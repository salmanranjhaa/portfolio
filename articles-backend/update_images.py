"""
Resync existing articles in the live DB with the bodies defined in seed_articles.py.

seed_articles.py only INSERTs articles that don't yet exist, so once an article is
in the database its body (and the images it references) can no longer be changed by
re-seeding. This script closes that gap: it overwrites the body of every article whose
title matches a seed entry, making seed_articles.py the single source of truth.

Idempotent — safe to run repeatedly. Run it on the server, alongside seed_articles.py,
after deploying new images:

    python3 update_images.py
"""
import sqlite3, os
from datetime import datetime, timezone

import seed_articles  # must sit in the same directory; provides seed_articles.ARTICLES

DB_PATH = os.environ.get("DB_PATH", "articles.db")


def main():
    with sqlite3.connect(DB_PATH) as conn:
        for a in seed_articles.ARTICLES:
            now = datetime.now(timezone.utc).isoformat()
            cur = conn.execute(
                "UPDATE articles SET body = ?, updated_at = ? WHERE title = ?",
                (a["body"], now, a["title"]),
            )
            if cur.rowcount:
                print(f"Resynced: {a['title'][:60]}")
            else:
                print(f"Not in DB (skipped): {a['title'][:60]}")
        conn.commit()
    print("Done.")


if __name__ == "__main__":
    main()
