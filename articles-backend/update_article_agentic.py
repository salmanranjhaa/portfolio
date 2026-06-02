"""
Update the agentic AI article in the live DB to the version defined in seed_articles.py.

This script used to hardcode the article body, which let it drift from seed_articles.py
— it had reverted the local images to a missing intro image and an external Unsplash
URL. It now pulls the body and excerpt straight from seed_articles.py, so the two can
never diverge again. (update_images.py resyncs every article; this one targets just the
agentic piece.)

    python3 update_article_agentic.py
"""
import sqlite3, os
from datetime import datetime, timezone

import seed_articles  # must sit in the same directory; provides seed_articles.ARTICLES

DB_PATH = os.environ.get("DB_PATH", "articles.db")
TITLE = "Agent-Assisted Development: What It Actually Means"


def main():
    article = next((a for a in seed_articles.ARTICLES if a["title"] == TITLE), None)
    if article is None:
        print(f"Article not found in seed_articles.py: {TITLE}")
        return
    with sqlite3.connect(DB_PATH) as conn:
        now = datetime.now(timezone.utc).isoformat()
        result = conn.execute(
            "UPDATE articles SET body = ?, excerpt = ?, updated_at = ? WHERE title = ?",
            (article["body"], article["excerpt"], now, TITLE),
        )
        if result.rowcount:
            print(f"Updated: {TITLE}")
        else:
            print("Article not found in DB — check title matches exactly")
        conn.commit()


if __name__ == "__main__":
    main()
