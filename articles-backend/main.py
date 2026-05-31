"""
Articles backend for salmanranjha.me
FastAPI + SQLite, JWT auth for admin operations.
Public can read articles, only admin can create/update/delete.

Run locally:
    pip install fastapi uvicorn python-jose[cryptography] passlib[bcrypt] aiofiles
    python main.py

Set the ADMIN_PASSWORD environment variable before starting (see .env.example).
"""

import os
import math
import sqlite3
import uuid
from datetime import datetime, timedelta, timezone
from contextlib import contextmanager

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext

# ---- Config ----
ADMIN_PASSWORD  = os.environ.get("ADMIN_PASSWORD", "changeme")
SECRET_KEY      = os.environ.get("JWT_SECRET", "please-change-this-secret-in-production")
ALGORITHM       = "HS256"
TOKEN_EXPIRE_H  = 12
DB_PATH         = os.environ.get("DB_PATH", "articles.db")

# ---- App ----
app = FastAPI(title="salmanranjha.me articles API", docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Password hashing ----
pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")
bearer  = HTTPBearer(auto_error=False)

# ---- Database ----
def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS articles (
                id           TEXT PRIMARY KEY,
                title        TEXT NOT NULL,
                excerpt      TEXT,
                body         TEXT NOT NULL,
                published_at TEXT NOT NULL,
                updated_at   TEXT NOT NULL
            )
        """)
        conn.commit()

@contextmanager
def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

init_db()

# ---- Auth helpers ----
def create_token(data: dict) -> str:
    payload = data.copy()
    payload["exp"] = datetime.now(timezone.utc) + timedelta(hours=TOKEN_EXPIRE_H)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(bearer)) -> dict:
    if credentials is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        if payload.get("role") != "admin":
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden")
        return payload
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

# ---- Pydantic models ----
class LoginRequest(BaseModel):
    password: str

class ArticleCreate(BaseModel):
    title:   str
    excerpt: str = ""
    body:    str

class ArticleUpdate(BaseModel):
    title:   str | None = None
    excerpt: str | None = None
    body:    str | None = None

# ---- Helpers ----
def row_to_dict(row: sqlite3.Row) -> dict:
    d = dict(row)
    # I am estimating reading time as ~200 words per minute
    words = len(d.get("body", "").split())
    d["reading_time"] = max(1, math.ceil(words / 200))
    return d

# ---- Routes ----

@app.post("/auth/login")
def login(req: LoginRequest):
    if not pwd_ctx.verify(req.password, pwd_ctx.hash(ADMIN_PASSWORD)):
        # Constant-time comparison via passlib handles timing attacks
        # but we also need to compare directly since we don't store a hash
        if req.password != ADMIN_PASSWORD:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Wrong password")
    token = create_token({"role": "admin"})
    return {"access_token": token, "token_type": "bearer"}


@app.get("/articles")
def list_articles():
    """Public endpoint: returns all published articles (no body, just metadata)."""
    with get_conn() as conn:
        rows = conn.execute(
            "SELECT id, title, excerpt, published_at FROM articles ORDER BY published_at DESC"
        ).fetchall()
    return [dict(r) for r in rows]


@app.get("/articles/{article_id}")
def get_article(article_id: str):
    """Public endpoint: returns full article including body."""
    with get_conn() as conn:
        row = conn.execute(
            "SELECT * FROM articles WHERE id = ?", (article_id,)
        ).fetchone()
    if row is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return row_to_dict(row)


@app.post("/articles", dependencies=[Depends(verify_token)])
def create_article(article: ArticleCreate):
    now = datetime.now(timezone.utc).isoformat()
    aid = str(uuid.uuid4())
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO articles (id, title, excerpt, body, published_at, updated_at) VALUES (?,?,?,?,?,?)",
            (aid, article.title, article.excerpt, article.body, now, now)
        )
        conn.commit()
    return {"id": aid, "published_at": now}


@app.put("/articles/{article_id}", dependencies=[Depends(verify_token)])
def update_article(article_id: str, article: ArticleUpdate):
    now = datetime.now(timezone.utc).isoformat()
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM articles WHERE id = ?", (article_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Article not found")

        updates = {
            "title":      article.title   if article.title   is not None else row["title"],
            "excerpt":    article.excerpt if article.excerpt is not None else row["excerpt"],
            "body":       article.body    if article.body    is not None else row["body"],
            "updated_at": now,
        }
        conn.execute(
            "UPDATE articles SET title=?, excerpt=?, body=?, updated_at=? WHERE id=?",
            (updates["title"], updates["excerpt"], updates["body"], updates["updated_at"], article_id)
        )
        conn.commit()
    return {"id": article_id, "updated_at": now}


@app.delete("/articles/{article_id}", dependencies=[Depends(verify_token)])
def delete_article(article_id: str):
    with get_conn() as conn:
        row = conn.execute("SELECT id FROM articles WHERE id = ?", (article_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Article not found")
        conn.execute("DELETE FROM articles WHERE id = ?", (article_id,))
        conn.commit()
    return {"deleted": article_id}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
