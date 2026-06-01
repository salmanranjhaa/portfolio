"""
Run once on the server to update the agentic AI article to final version.
    python3 update_article_agentic.py
"""
import sqlite3, os
from datetime import datetime, timezone

DB_PATH = os.environ.get("DB_PATH", "articles.db")

TITLE = "Agent-Assisted Development: What It Actually Means"

BODY = """\
I started my Master's in Computer Science two years ago. That puts me squarely in the AI era of education, which is a strange place to be.

At the beginning I was skeptical. Not of AI itself, but of how much of it felt right to use. Every project could technically be done with AI assistance. I used it, I got the grades, but the question that kept surfacing was: are we just grading different AI agents now? Is anyone actually learning anything, or are we getting very good at prompting our way to a passing mark?

The question is not rhetorical. I teach as well. The students in my course build web applications. They use AI, all of them, and there is no honest argument for banning it. My job has become less about evaluating the output and more about figuring out where the limit sits. What is the student responsible for understanding? What is the agent allowed to carry? When I look at a submitted project, what am I actually assessing?

## A Conversation Worth Having

I have been trying to think through the right frame for this, and the most useful surface I found was a conversation with Alexander Finger, CTO at SAP Switzerland.

I had reached out after reading his blog, a piece called "ver-rückt" that touched on trust in AI but got me thinking about something slightly different: access. Growing up in Pakistan, internet at home was a real luxury. I spent weeks convincing my dad it was worth the cost. He was genuinely skeptical, could not quite see what it would change. Now he gets concerned the moment the connection drops. Same person, same generation, completely different relationship with the technology. He did not consciously decide to depend on it. The dependency accumulated quietly, one small convenience at a time, until one day it was load bearing.

I wrote to Finger that I felt we were in the middle of that same shift again, just faster and less visible because we are inside it. The barrier to learning anything has basically collapsed. Any skill, any topic, available instantly. And on the surface that feels like pure progress — more access should mean more understanding. But frictionless access optimises for getting to the answer. Understanding requires you to stay in the problem a little longer than is comfortable.

When I did my undergrad, getting to the right information took effort. Math forums, Reddit threads, Stack Overflow at 2am. It was annoying, but something happened along the way. You would land on a page looking for one thing and find something completely different that turned out to matter. The accidental discovery, the stuff you find because the path was inefficient — I am not sure that survives when everything is one prompt away.

Finger replied within minutes. His answer: the true and unique role of education is to show people the difference between knowing and understanding, and to get them to experience it. There was always a difference, he said, between people ticking the box to pass the test and people taking the system apart to see how it works, what they can learn from it, and how they might reconstruct it for a new purpose.

Which raised the harder question. Now that the tools exist to do almost everything faster, what is the actual argument for the slower path? We do not walk between cities anymore because we have trains. Is the friction still worth it, or are we just romanticising the walk?

## The Design Question

I took Software and Systems Engineering with Simon Mayer, Full Professor in Computer Science at HSG. We built a fully integrated distributed system. I used agents to help build it. The project was delivered. And the question did not go away — it got sharper. I put it to Mayer directly: are we just grading different AI agents now?

His answer was not a policy. It was a design question. The issue is not whether AI is in the loop. The issue is whether the human in the loop knows what they are doing and why.

That reframe changed how I thought about it, and it changed how I teach.

As a Teaching Assistant, I stopped trying to police where AI sat in the process and started focusing on what the student actually understood about what they were building. Before any line of code, the conversation became: what are you building, why are you building it, and how excited are you about the problem? Product thinking before implementation. Walking through the design, the user, the tradeoffs, not just the technical spec.

Something shifted when the framing changed. Students stopped doing the minimum required to satisfy the brief and started going beyond it, because they were invested in the thing they were building, not just the grade attached to it. For two semesters in a row, projects from my exercise class were selected among the best in the cohort. There are 12 to 13 exercise classes running in parallel, 10 projects each. The top projects get nominated, the professor selects three to present in the main lecture in front of around 500 students, and then the students vote. Both semesters, projects from my class made it through not just on the professor's judgment but on the peers' vote as well.

AI was present throughout. That was never the variable. The variable was whether the student had a real answer to why they were building what they were building.

## The Hackathon

![Teams collaborating under time pressure](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80)

Then I saw what Finger had done at a hackathon in Baden, and it clicked.

28 teams, 6 judges, live scoring needed during presentations. No existing tool fit the moment. So Finger asked Claude Code to build one. Two Python files, one HTML template, a Flask app with SQLite, deployed on SAP BTP Cloud Foundry before the first team walked on stage. Live leaderboard, tap-friendly scoring panels for five criteria, admin interface, shared PIN. It solved exactly the problem it needed to solve, nothing more.

He called it "agent-assisted development at its most practical: solve exactly your problem, deploy, use it, move on."

That framing matters. It is not a product. It is not a portfolio piece. It is a tool built for a specific moment by someone who knew exactly what they needed. The distinction between that and vibe-coding your way to a messy prototype is entirely about intentionality.

The more interesting part is what happened before the presentations began. Claude had already reviewed all 28 code submissions — a technical analysis that would have been impossible to do manually at depth across that many projects in the time available. That analysis, reviewed and adjusted by humans, surfaced as a summary card when judges opened a team's scoring panel. The jury then entered their own scores manually. AI providing the context, humans making the judgment calls.

A comment in the thread raised the concern that using AI in the evaluation process was unfair to participants who had worked through the night. The concern was real. Finger's response was not defensive. He was explicit about what AI actually did and what it did not: 75% of jury time was spent reviewing Claude's analysis, understanding it, pushing back on it. The scoring itself was entirely human. That is a system built by someone who had thought carefully about where the line belongs.

## The Right Question

Most of the conversation around AI is still stuck on capability. Can it write code? Can it review submissions? Can it deploy? These are the wrong questions. The right question is whether the person using it knows what they are actually trying to solve, and whether the AI is in the right place in the loop.

There was always a difference between the box tickers and the people who took the system apart. AI has not changed that. It has just made it easier to tick the box convincingly, which makes the distinction harder to see and more important to maintain.

The question was never whether you used the tool. It was always whether you understood the problem. That has not changed. It just got easier to pretend otherwise.\
"""

def main():
    with sqlite3.connect(DB_PATH) as conn:
        now = datetime.now(timezone.utc).isoformat()
        result = conn.execute(
            "UPDATE articles SET body = ?, updated_at = ? WHERE title = ?",
            (BODY, now, TITLE)
        )
        if result.rowcount:
            print(f"Updated: {TITLE}")
        else:
            print("Article not found — check title matches exactly")
        conn.commit()

if __name__ == "__main__":
    main()
