"""
Run this on the server to fix image URLs in existing articles.
    python3 update_images.py
"""
import sqlite3, os

DB_PATH = os.environ.get("DB_PATH", "articles.db")

# Unsplash CDN allows hotlinking. These are stable direct photo URLs.
UPDATES = {
    "Salam: The First": """![Dr. Abdus Salam at ICTP — Pakistan's first and only Nobel laureate in science](https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80)

## Introduction""",

    "Climate Justice and Aviation": """![A commercial aircraft in flight](https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80)

## Introduction""",

    "Agent-Assisted Development": """![Lines of code on a screen — the medium, not the message](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

I started my Master's""",
}

# Per-article second image replacements
SECOND_IMAGE_UPDATES = {
    "Salam: The First": (
        "![The ICTP in Trieste, founded by Salam to fight the intellectual isolation of scientists from the Global South](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ICTP_Trieste.jpg/640px-ICTP_Trieste.jpg)",
        "![The ICTP in Trieste — Salam's answer to the intellectual isolation of scientists from the developing world](https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80)"
    ),
    "Climate Justice and Aviation": (
        "![Gulf hub airports have transformed long-haul access for South Asian middle classes](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hamad_International_Airport_inside.jpg/640px-Hamad_International_Airport_inside.jpg)",
        "![Airport terminal — the infrastructure of mobility](https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80)"
    ),
    "Agent-Assisted Development": (
        "![A hackathon in progress — teams building under time pressure](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hackathon_Toronto_Tableau_Software.jpg/640px-Hackathon_Toronto_Tableau_Software.jpg)",
        "![Teams collaborating under time pressure](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80)"
    ),
}

def main():
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        articles = conn.execute("SELECT id, title, body FROM articles").fetchall()
        for a in articles:
            title = a["title"]
            body = a["body"]
            updated = body

            # Fix first image
            for key, replacement in UPDATES.items():
                if title.startswith(key):
                    # Replace from start up to ## Introduction or "I started"
                    lines = updated.split("\n")
                    # Find first line that starts with "## " or "I started"
                    cut = 0
                    for i, line in enumerate(lines):
                        if line.startswith("## ") or line.startswith("I started"):
                            cut = i
                            break
                    updated = replacement + "\n" + "\n".join(lines[cut+1:])
                    break

            # Fix second image
            for key, (old_img, new_img) in SECOND_IMAGE_UPDATES.items():
                if title.startswith(key):
                    updated = updated.replace(old_img, new_img)
                    break

            if updated != body:
                from datetime import datetime, timezone
                now = datetime.now(timezone.utc).isoformat()
                conn.execute("UPDATE articles SET body = ?, updated_at = ? WHERE id = ?",
                             (updated, now, a["id"]))
                print(f"Updated: {title[:60]}")
            else:
                print(f"No change: {title[:60]}")
        conn.commit()
    print("Done.")

if __name__ == "__main__":
    main()
