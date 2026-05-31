import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

export default function About() {
  const languages = ['English', 'Italian', 'Urdu', 'Punjabi', 'German (in progress)']
  const interests = ['CrossFit', 'Running', 'Skiing', 'Gaming', 'Qawwali', 'Funk & Jazz', 'Ancient History', 'Stand-up Comedy']

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
            I grew up in Lahore, Pakistan, and ended up in Europe through a somewhat unconventional route
            for someone from my background. Bocconi in Milan for my BSc in Economics, Management and
            Computer Science, then three years at FBK as a Technical Business Analyst working on ERP
            implementations for large multinationals across pharma and medtech.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            The FBK years taught me something important: the gap between what enterprise software is
            supposed to do and what it actually does in production is vast, and most of the interesting
            work happens in that gap. You learn to speak to IT Directors and shop floor operators in the
            same week, navigate organisations where the real decision-making is never in the org chart,
            and ship things on timelines that were already unrealistic before scope changed.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <blockquote className="border-l-[2px] border-gold pl-6 py-2 my-6">
            <p className="font-serif text-[1.1rem] text-paper leading-relaxed italic">
              "The interesting problems live at the intersection of enterprise constraints and AI capability.
              That's where I want to build."
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            The MSc at HSG let me go deeper on the technical side. The Integrated Master's Project
            is my attempt to close the loop: using what I learned about how SAP actually behaves in
            regulated environments to design agentic architectures that are both capable and auditable.
            Not just asking whether LLMs can automate procurement, but whether they can do it in a way
            that survives a compliance audit.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[0.95rem] text-papersoft leading-[1.8]">
            Outside of work and academia, I coach and do CrossFit most mornings, recently picked up skiing
            (late, but committed), and spend more time than I probably should thinking about Mughal history
            and listening to Nusrat Fateh Ali Khan. I'm also a TA for an introductory CS course at HSG,
            which I take seriously because I remember what it felt like to not understand how any of this worked.
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="grid grid-cols-2 gap-6 pt-4">
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
