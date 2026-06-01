"""
Resync existing articles in the live DB with the definitions in seed_articles.py.

seed_articles.py only INSERTs articles that don't yet exist, so once an article is
in the database its body and excerpt can no longer be changed by re-seeding. This
script closes that gap: it overwrites the body and excerpt of every article whose
title matches a seed entry, making seed_articles.py the single source of truth.

Idempotent and safe to run repeatedly. Run it on the server, alongside
seed_articles.py, after deploying article changes:

    python3 update_images.py
"""
import sqlite3, os
from datetime import datetime, timezone

import seed_articles  # must sit in the same directory; provides seed_articles.ARTICLES

DB_PATH = os.environ.get("DB_PATH", "articles.db")

# Articles whose title changed since they were first seeded. The live DB still holds
# the old title, so rename it before the resync below (which matches on title). Once
# applied, this is a harmless no-op on subsequent runs.
RENAMES = {
    "I Got Frustrated and Built an App. Then My Sister Sent Me an Excel File.": "Execution Is Cheap Now",
}


def main():
    with sqlite3.connect(DB_PATH) as conn:
        for old_title, new_title in RENAMES.items():
            cur = conn.execute(
                "UPDATE articles SET title = ? WHERE title = ?", (new_title, old_title)
            )
            if cur.rowcount:
                print(f"Renamed: {old_title[:45]}... -> {new_title}")

        for a in seed_articles.ARTICLES:
            now = datetime.now(timezone.utc).isoformat()
            cur = conn.execute(
                "UPDATE articles SET body = ?, excerpt = ?, updated_at = ? WHERE title = ?",
                (a["body"], a["excerpt"], now, a["title"]),
            )
            if cur.rowcount:
                print(f"Resynced: {a['title'][:60]}")
            else:
                print(f"Not in DB (skipped): {a['title'][:60]}")
        conn.commit()
    print("Done.")


if __name__ == "__main__":
    main()
