"""
Run once on the server to seed the articles database.
    python3 seed_articles.py
"""
import sqlite3, uuid, os
from datetime import datetime, timezone

DB_PATH = os.environ.get("DB_PATH", "articles.db")

def ts(y, m, d):
    return datetime(y, m, d, 12, 0, 0, tzinfo=timezone.utc).isoformat()

ARTICLES = [
    {
        "id": str(uuid.uuid4()),
        "title": "Salam: The First ****** Nobel Laureate and the Theology of Exclusion in Pakistan",
        "excerpt": "Dr. Abdus Salam was Pakistan's only Nobel laureate in science. The state erased him anyway. On the intersection of religious nationalism, scientific genius, and the price of ideological conformity.",
        "published_at": ts(2025, 5, 10),
        "body": """\
![Dr. Abdus Salam at the blackboard — Pakistan's first and only Nobel laureate in science](/image/Salam1.png)

## Introduction

"I hate to say this but he is a controversial figure in Pakistan and the reason I hate to say this is because there is no reason he should be controversial" — Dr. Salman Hameed, professor of Astronomy at Hampshire College.

This poignant observation encapsulates the tragic reality of Dr. Abdus Salam, Pakistan's sole Nobel laureate in science, whose immense contributions to theoretical physics and the development of his nation's scientific infrastructure have been systematically erased from national memory. His "controversy" stems not from any scientific malpractice or disloyalty to his country, but solely from his identity as an Ahmadi Muslim.

This essay argues that Dr. Salam's effective disappearance from Pakistani national narratives is a stark illustration of the profound degradation of inclusive citizenship under the weight of religious nationalism. The state's decision to position itself as the ultimate arbiter of faith, culminating in the 1974 constitutional amendment that declared Ahmadis non-Muslims, created an ideological paradox: it rendered it impossible for the Pakistani state to acknowledge one of its most brilliant minds without confronting the exclusionary dogma at the heart of its identity, inflicting a devastating and ongoing intellectual and moral cost upon the nation.

## Two Irreconcilable Legacies

The story of Dr. Abdus Salam presents two irreconcilable legacies: that of the celebrated architect of modern physics and that of the persecuted Ahmadi. His scientific legacy is undeniably monumental. He was a principal architect of the electroweak theory, a groundbreaking achievement that unified two of the four fundamental forces of nature — the electromagnetic and weak nuclear forces — into a single, elegant framework. This contribution earned him the Nobel Prize in Physics in 1979, making him the first Pakistani and the first person from an Islamic country to receive a Nobel Prize in science.

His impact extended far beyond theoretical research. He was instrumental in establishing the Pakistan Atomic Energy Commission (PAEC) and the Pakistan Space and Upper Atmosphere Research Commission (SUPARCO). He played a crucial role in Pakistan's nuclear program, recruiting and mentoring key physicists. Yet this entire scientific heritage would be actively disowned by the state.

![The ICTP in Trieste, founded by Salam to fight the intellectual isolation of scientists from the Global South](/image/salam3.jpg)

## The International Centre for Theoretical Physics

While building scientific capacity at home, Salam was simultaneously fighting against the intellectual isolation of scientists in the developing world. His most enduring legacy in this fight is the International Centre for Theoretical Physics (ICTP), which he founded in 1964 in Trieste, Italy. The center was born directly from his own painful experience of intellectual solitude upon returning to Pakistan in the early 1950s. He famously described the feeling:

> "When in Pakistan I was the only theoretical physicist in the country. The nearest colleague was in Bombay... You have no idea of what that can be like. A theoretical physicist has got to be able to talk, to discuss, to shout if needed."

To this day, the center hosts thousands of scientists each year, a vibrant testament to Salam's conviction that "science is the common heritage of humankind." His personal commitment was absolute: he donated his entire share of the Nobel Prize money to establish a fund for gifted students from Pakistan and India.

![Salam in his study, reading the news from home — surrounded by the books and honours of a life in physics](/image/salam2.jpg)

## The Erasure

In 1974, when the government of Zulfikar Ali Bhutto amended the Constitution to formally declare Ahmadis as non-Muslims, Salam courageously resigned from his post as Chief Scientific Advisor to the President in protest. This marked the beginning of a deliberate process by the state to disown its most celebrated scientist.

The most chilling metaphor for this erasure is the desecration of his gravestone in Rabwah, Pakistan. Originally, his epitaph proudly read "First Muslim Nobel Laureate." Following a court order, local authorities physically chiseled away the word "Muslim" to comply with laws forbidding Ahmadis from identifying as such. This was not vandalism. It was the calculated enforcement of state policy — a symbolic purging of an inconvenient truth from national memory.

## The Architecture of Persecution

The 1974 constitutional declaration was the cornerstone of an elaborate legal architecture of oppression. Under Ordinance XX, promulgated by General Zia-ul-Haq in 1984, it is a criminal offense for an Ahmadi to call their place of worship a "mosque," perform the azaan, use common Islamic greetings, publicly recite the Kalima, or display Quranic verses. Violations are actively prosecuted and can lead to imprisonment.

In 2023, while Ahmadis constitute less than 0.1% of the population, they accounted for 20% of all individuals accused of blasphemy. An accusation is often enough to incite mob violence, and reports document these accusations being exploited as tools of blackmail and land seizure.

## The Pattern Repeats: Dr. Atif Mian

The tragic story of Dr. Salam found a powerful echo in 2018 with the case of Dr. Atif Mian, a Professor of Economics at Princeton University, recognized by the IMF as one of the top 25 young economists in the world. When the newly elected government of Prime Minister Imran Khan appointed Dr. Mian to its Economic Advisory Council, the moment his Ahmadi faith became public, a vicious campaign erupted from religious hardliners. The government, initially defiant, performed a complete U-turn. Dr. Mian resigned "for the sake of the stability of the Government of Pakistan." Two other distinguished economists on the council resigned in protest.

The Atif Mian affair demonstrates the chilling continuation of religious bigotry as a primary determinant of state policy: the brain drain is not a historical accident but an active, ongoing process.

## What Was Lost

By excluding individuals like Dr. Salam and Dr. Mian, Pakistan did not just lose a Nobel laureate and a world-class economist. It lost a vision of what it could have been: a pluralist, meritocratic, and forward-looking country that celebrated its brightest minds regardless of their creed.

The erasure of Dr. Salam is not just a moral failure. It is a profound intellectual self-mutilation, the consequences of which the nation continues to suffer.

Dr. Abdus Salam's ideas live on in physics textbooks across the world. His name is spoken with reverence in the halls of science. His vision for global scientific cooperation thrives at the ICTP in Trieste. It is Pakistan that has been left behind.

To truly honor Abdus Salam would require dismantling the entire legal architecture of persecution: repealing the Second Amendment and Ordinance XX, reforming the blasphemy laws, and abolishing the separate electorate system. It would mean choosing merit over bigotry, truth over ideology, and courage over political convenience. Until that day comes, Dr. Salam remains both a national hero and a national haunting — the embodiment of the brilliant future Pakistan could have had, and the most powerful reminder of the intolerant present it has chosen, and continues to choose, to become.
""",
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Climate Justice and Aviation: Why Technology Alone Is Not Enough",
        "excerpt": "Aviation emits disproportionately and harms unequally. The technology fix addresses emissions intensity while leaving untouched the deeper distributional failures at the heart of aviation's climate problem.",
        "published_at": ts(2025, 4, 18),
        "body": """\
![A jet at cruising altitude, contrails streaming across a clear sky](/image/aviation1.jpg)

## Introduction

The first time I encountered aviation, it was a simulation. A planetarium in Pakistan housed a decommissioned aircraft with screens projecting the flight path from Islamabad to Skardu, across the Himalayas and the Karakoram range. The plane never moved, but the experience felt remarkable. For many Pakistanis, that is roughly as close as aviation gets. My father has never boarded an aircraft, and for a significant share of the population the question of flying is not one of choosing a destination but whether a single journey — the Hajj, a sacred pilgrimage to Makkah — will ever be within reach.

Contrast this with the European experience of budget carriers such as Ryanair, or their American equivalents such as Spirit Airlines, where flying has become so normalised it is treated as a mild inconvenience. Having flown both, the difference is not merely economic. It reflects a profound asymmetry in who accesses aviation, who benefits from its connectivity, and who bears the consequences when the climate it is destabilising begins to fail.

This essay argues that while technological innovation is essential to aviation's decarbonisation, an exclusive focus on the technology fix is structurally insufficient to achieve climate justice. Technology addresses the emissions intensity of individual flights but leaves untouched the deeper distributional failures at the heart of aviation's climate problem: a global minority produces the vast majority of its climate harm, while a global majority, disproportionately from the Global South, bears its consequences.

## Aviation's Climate Justice Problem

Aviation accounts for approximately 2.5% of global CO2 emissions, rising to an estimated 3.5 to 4% of effective radiative forcing when non-CO2 warming effects are included. The distributional picture is considerably more troubling. Roughly 80% of the global population has never flown, and a highly concentrated group — estimated at approximately 1% of the global population — is responsible for around 50% of aviation's CO2 emissions.

Pakistan illustrates this asymmetry with particular clarity. The country contributes a negligible fraction of global aviation emissions yet consistently ranks among the world's most climate-vulnerable nations. The 2022 floods, which submerged approximately one third of the country and displaced over 33 million people, were intensified by climate change to which Pakistan's cumulative emissions contributed almost nothing.

The question is not only how to make aviation cleaner, but how to ensure that the costs and benefits of its climate trajectory are distributed fairly across populations with radically unequal relationships to the sector.

## The Promise of Technology

It would be analytically dishonest to dismiss what technology is currently achieving. Sustainable Aviation Fuel (SAF) can reduce lifecycle carbon emissions by up to 80% compared to conventional jet fuel, and blending mandates across the European Union and United Kingdom are beginning to create genuine market demand. AI is deployed to optimise flight routing and predict maintenance failures, yielding measurable efficiency gains. Hydrogen propulsion remains early-stage but represents a credible long-run pathway for short and medium-haul aviation.

These developments are real, and the trajectory of aviation technology is unambiguously towards lower emissions intensity per passenger kilometre. However, scholars have argued that industry confidence in technological solutions has functioned less as a roadmap for decarbonisation and more as a mechanism for deferring structural reform. The question is not whether technology contributes, but whether it is being asked to carry a burden it cannot structurally bear.

## The Limits of the Technology Fix

The central limitation of the technology fix is that it addresses emissions intensity while leaving the volume and distribution of flying unchanged. This reflects the Jevons paradox: efficiency gains tend to reduce unit costs, stimulate demand, and may partially offset the emissions savings they produce. IATA projects global passenger numbers reaching 7.8 billion annually by 2040, approximately doubling from 2019 levels, and even optimistic SAF scenarios are unlikely to decarbonise such growth within a 1.5-degree timeframe.

Carbon offsetting compounds this problem. CORSIA relies substantially on forestry and land-use credits sited in the Global South, and evidence suggests a substantial share may not represent genuine, permanent carbon removals. More critically, even technically valid offsets represent a transfer of climate responsibility rather than its elimination, placing the cost of maintaining carbon sinks on communities that bear no responsibility for the flights being offset.

## The Middle Eastern Hub Model: Democratisation and Contradiction

The Middle Eastern hub model — Emirates, Qatar Airways, and Etihad operating through Dubai, Doha, and Abu Dhabi — introduces genuine complexity that a straightforward North-South critique cannot accommodate. These carriers have materially expanded long-haul access for South Asian middle classes in ways that legacy carriers never prioritised. For passengers from Pakistan, India, Bangladesh, and the Philippines, Gulf connections represent the primary infrastructure of diaspora mobility, labour migration, and pilgrimage.

Speaking from personal experience, every long-haul journey I have taken has routed through one of these hubs, and the transit has become part of the journey's meaning. These airports offer a compressed encounter with places that might otherwise remain entirely distant.

This democratisation of access is a real mobility gain. However, it coexists with a growth-maximisation model sustained by significant state subsidy, and the Gulf hub's expansion logic is entirely compatible with the technology fix framing: if SAF and efficiency improvements neutralise emissions consequences, expansion faces no structural constraint. The justice implications are genuinely contradictory.

## The Political Economy of Inaction

The dominance of the technology fix in policy discourse is not accidental. It reflects the convergence of interests among airlines, manufacturers, fuel producers, and governments that have structural incentives to preserve growth. Beyond industry, the cultural normalisation of frequent flying has produced what researchers describe as a darker side of hypermobility, in which excessive air travel is embedded in professional identity and social aspiration in ways that insulate it from behavioural critique.

ICAO operates by consensus among states with vastly different economic relationships to aviation, and high-income states have consistently resisted binding targets that would constrain demand. The CORSIA framework sets a baseline of carbon-neutral growth rather than absolute reduction, with enforcement mechanisms widely regarded as inadequate.

## Towards Climate Justice

Genuine progress on climate justice would require technological investment alongside demand-side reform and structural change in global aviation governance. Progressive per-person flight taxation represents one of the more coherent demand-side instruments, though it requires careful calibration to avoid imposing disproportionate costs on lower-income groups who rely on aviation for essential purposes such as family visits or pilgrimage. Governance reform giving greater voice to climate-vulnerable nations at ICAO would address the procedural justice deficit but faces the same structural resistance as any measure constraining growth.

The barriers to progress are therefore not primarily technical but political, embedded in the interests of actors who benefit from the current framing and retain the institutional leverage to maintain it.

## Conclusion

Much of what currently passes for climate action in aviation resembles a simulation of transformation: commitments are announced, technology roadmaps published, and multilateral frameworks celebrated, while the underlying trajectory — growth-driven, inequitably distributed, and resistant to redistribution — continues largely unchanged.

My father has never flown. For millions of Pakistanis, the question of aviation is not which hub city is worth an overnight stop but whether the one flight that truly matters will ever be within reach. Meanwhile the aviation system expands on a logic that serves its existing users and externalises its costs onto communities that have barely participated in it.

Closing that gap requires technology and something considerably harder: a structural reckoning with who the system serves, who governs it, and who bears its consequences. That reckoning has not yet seriously begun.
""",
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Agent-Assisted Development: What It Actually Means",
        "excerpt": "I started my Master's in the AI era of education. That puts me squarely in a strange place. Not about whether to use AI, but about what understanding means when the tools can do almost everything faster.",
        "published_at": ts(2025, 6, 1),
        "body": """\
![A developer at a multi-monitor workstation — the agent in the loop, not running it](/image/Agent2.png)

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

![A hackathon in progress — teams building under time pressure](/image/Agent1.png)

Then I saw what Finger had done at a hackathon in Baden, and it clicked.

28 teams, 6 judges, live scoring needed during presentations. No existing tool fit the moment. So Finger asked Claude Code to build one. Two Python files, one HTML template, a Flask app with SQLite, deployed on SAP BTP Cloud Foundry before the first team walked on stage. Live leaderboard, tap-friendly scoring panels for five criteria, admin interface, shared PIN. It solved exactly the problem it needed to solve, nothing more.

He called it "agent-assisted development at its most practical: solve exactly your problem, deploy, use it, move on."

That framing matters. It is not a product. It is not a portfolio piece. It is a tool built for a specific moment by someone who knew exactly what they needed. The distinction between that and vibe-coding your way to a messy prototype is entirely about intentionality.

The more interesting part is what happened before the presentations began. Claude had already reviewed all 28 code submissions. That analysis, reviewed and adjusted by humans, surfaced as a summary card when judges opened a team's scoring panel. The jury saw the technical picture, then evaluated the pitch independently. AI handling the analytical grunt work, humans making the judgment calls.

A student called AI grading "utterly disgraceful and extremely unfair." The concern was real. Finger's response was not defensive. He walked through the design: AI in the first round served the jury, not replaced it. 75% of jury time was spent reviewing Claude's analysis, understanding it, pushing back on it. In the second round, votes were entirely human. That is a system built by someone who had thought carefully about where the line belongs.

## The Right Question

Most of the conversation around AI is still stuck on capability. Can it write code? Can it review submissions? Can it deploy? These are the wrong questions. The right question is whether the person using it knows what they are actually trying to solve, and whether the AI is in the right place in the loop.

There was always a difference between the box tickers and the people who took the system apart. AI has not changed that. It has just made it easier to tick the box convincingly, which makes the distinction harder to see and more important to maintain.

The slower path is not worth it because friction is romantic. It is worth it because understanding is what you are left with when the tool changes, and the tool always changes.

That is not a low bar. It is just the right one.
""",
    },
]

def main():
    with sqlite3.connect(DB_PATH) as conn:
        for a in ARTICLES:
            exists = conn.execute("SELECT id FROM articles WHERE title = ?", (a["title"],)).fetchone()
            if exists:
                print(f"Skipping (already exists): {a['title'][:60]}")
                continue
            now = datetime.now(timezone.utc).isoformat()
            conn.execute(
                "INSERT INTO articles (id, title, excerpt, body, published_at, updated_at) VALUES (?,?,?,?,?,?)",
                (a["id"], a["title"], a["excerpt"], a["body"], a["published_at"], now)
            )
            print(f"Inserted: {a['title'][:60]}")
        conn.commit()
    print("Done.")


# Additional articles are appended after main() is defined. They must be registered
# before main() runs, so the __main__ guard lives at the end of the file (below).
ARTICLES.append({
    "id": str(uuid.uuid4()),
    "title": "I Got Frustrated and Built an App. Then My Sister Sent Me an Excel File.",
    "excerpt": "Two personal projects, two real users, and the cleanest argument for just building the thing yourself.",
    "published_at": ts(2025, 6, 15),
    "body": """\
There is a specific kind of frustration that comes from opening an app that is supposed to help you and immediately being asked to fill out a form about your goals, your body type, your activity level, your dietary philosophy, and whether you would like to receive motivational notifications.

I do not want motivational notifications. I want to log that I did a workout and move on with my day.

I was in my second semester at HSG, teaching two days a week, doing research two others, trying to train consistently, cook reasonable food, and not lose track of what was happening when. Every fitness app I tried either wanted too much from me upfront or gave me too much back. Dashboards built for people whose primary hobby is tracking themselves. I am not that person. I just needed something that remembered what I did yesterday so I could do slightly more today.

So I built [Loadedout](https://loadedout.online).

FastAPI backend, Vertex AI for the coaching layer, Google Calendar sync so my training blocks actually live where my schedule lives. The AI coaching piece is not decorative — it reads your recent history and tells you something specific, not generic. It does not tell you to stay hydrated. It notices that you have skipped legs three weeks in a row and says so.

The part I did not expect was how much I would actually use it. I have built things before that I stopped using within a month because the friction of maintaining them exceeded the value they returned. Loadedout is the opposite. I open it every day. It has become load-bearing. That feedback loop — building something, using it, noticing what is wrong, fixing it — is a different kind of learning than any project I have submitted for a grade.

---

A few months later my sister sent me an Excel file.

It was a list of GRE vocabulary words she needed to memorise before an exam. Hundreds of them. The message with it was essentially: can you put these in a Word document in a nicer format?

I could have done that in twenty minutes. Instead I spent a weekend building her an app.

[GRE Prep Station](https://github.com/salmanranjhaa/GRE_prep_studio) has flashcard mode, a quiz mode, AI-generated definitions and mnemonics via Groq, semantic grading so it evaluates whether you actually understood a word rather than just pattern-matched the dictionary definition, and a progress tracker so she could see what was sticking and what was not. Admin panel so I could add new word sets. Deployed on GCP with Docker Compose.

She did not ask for any of that. She asked for a Word document.

But I knew the actual problem. She did not need a nicer list. She needed a way to study that would make the words stay. The Excel file was the stated requirement. Learning the words was the real one.

This is the thing about building for someone you know: you cannot hide behind the spec. You know what they actually need and you either build for that or you do not. There is no ambiguity to retreat into.

---

Neither of these projects is technically the most impressive thing I have built. The distributed systems work for PITAS was more complex. The IMP research involves harder problems. But Loadedout and GRE Prep are the ones I find myself talking about most naturally, because the motivation is self-evident. You do not have to explain why someone would want to track their workouts or why a student needs to learn vocabulary. The problem is obvious. The only interesting question is whether you built something that actually solves it.

Both of them did. That is a higher bar than it sounds.
""",
})


if __name__ == "__main__":
    main()
