import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

export default function About() {
  const languages = ['English', 'Italian', 'Urdu', 'Punjabi', 'German (in progress)']
  const interests = ['Astronomy', 'Physics', 'F1', 'Motorsports', 'Go-Karting', 'Football', 'Skiing', 'CrossFit', 'Running']

  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="The longer version."
        subtitle="Where I'm from, what shaped me, and what I'm building toward."
      />
      <div className="px-10 py-10 max-w-2xl space-y-8">

        <FadeIn>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            I grew up in Lahore, Pakistan and ended up in Europe through a route that felt unconventional at the time. Bocconi in Milan for a BSc in Economics, Management and Computer Science, then 3 years at FBK as a Technical Business Analyst.
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            The FBK years were formative in a specific way. The work centred on a life sciences tender and bid management platform, which meant sitting at the intersection of highly regulated commercial processes and the enterprise software trying to automate them. A recurring part of the job was translating between the two: taking what the system was doing and making it legible to business users who had no interest in the technical details, only in whether it worked for them. You learn quickly that the gap between what a system is supposed to do and what it actually does in production is vast, and that most of the interesting work happens inside that gap. 3 years of that builds a particular kind of intuition about software in high-stakes environments.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            Alongside that, I've been a research assistant at the Institute of Responsible Innovation at HSG. The work sits at the boundary of data engineering and applied NLP: large-scale pipelines across hundreds of thousands of Kickstarter projects, audio transcription at scale using Whisper on GPU instances, scraping pipelines, and classification models for text data using transformer-based NLI approaches. A less obvious part of the role has been working directly with the academic team, professors and postdocs mostly from humanities backgrounds, and translating what the pipelines were doing into something they could reason about and trust. Different audience from FBK, same underlying skill.
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            I started the MSc at HSG at exactly the moment AI became impossible to ignore. My bachelor's was largely pre-ChatGPT: you learned to code, you learned to think computationally, friction was real and deliberate. By the time I was in St. Gallen, that friction had collapsed. Courses that should have taken a week took an afternoon. Projects that would have required a team ran from a single terminal. And I kept coming back to the same question: is my masters genuinely more manageable, or am I just better at outsourcing the hard parts? That question turned into something more serious. I started paying attention to where AI actually fails, what it confidently gets wrong, and what the right mental model is for someone building with it rather than just using it. Not scepticism, but precision about what trust actually requires.
          </p>
        </FadeIn>

        <FadeIn delay={0.19}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            The enterprise background and the AI questions converged naturally. When you've watched organisations make high-stakes decisions on top of complex software systems, you develop a specific intuition for what it means to rely on something in a context where the cost of a wrong answer is real. Applying that intuition to agentic AI, asking not just whether it can act but whether you can verify and audit how it acted, became the thread running through the master's project and most of what I read outside of it.
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            On the side, I've used agentic AI to build things I wouldn't have attempted otherwise: full-stack platforms that a solo developer can now prototype in days, pipelines that would have required a team, tools that iterate fast enough that the bottleneck is no longer implementation but product judgment. That shift is the most interesting thing happening right now. When the friction to build is near-zero, what matters is how clearly you can think about what you're building and why. Technical skill is still necessary, but the premium has moved to product thinking, and I've been paying close attention to that transition.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            I took the Teaching Assistant role for a simple reason: I needed pocket money and the position was available. The first session I walked into, standing in front of 50 students, I was genuinely shaking. But something shifted over the course of the semester. It is a mandatory course for business administration students who arrive scared of it, not unmotivated by choice but because CS has never felt relevant to them. My approach has been to meet them there: make the material interesting, get them thinking about the product first and the code second, and turn fear into something closer to curiosity. What I found is that I'm genuinely good at simplifying complex technical concepts into something non-technical people can grasp and actually enjoy. The goal was never just to help them pass. It was to get them to stop being scared. That worked, and the students responded to it. I've now done this for 3 consecutive semesters, which at this point is a choice, not a necessity.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            Outside of work and study: sometimes CrossFit, sometimes running, depending on how the morning feels. I picked up skiing when I moved to Switzerland, which has been a thoroughly humbling experience, but the slopes are not getting away from me and I am already counting down to next season. A deep interest in astronomy and physics, motorsports in most forms, F1, go-karting, anything with a wheel and a timer, and football.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-mono text-[0.68rem] text-gold uppercase tracking-widest mb-3">Languages</h3>
              <div className="flex flex-wrap gap-1.5">
                {languages.map(l => <span key={l} className="tag">{l}</span>)}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-[0.68rem] text-gold uppercase tracking-widest mb-3">Interests</h3>
              <div className="flex flex-wrap gap-1.5">
                {interests.map(i => <span key={i} className="tag">{i}</span>)}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
