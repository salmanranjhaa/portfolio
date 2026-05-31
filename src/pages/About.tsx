import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="About" title="The longer version." subtitle="Where I come from, what I have built, and why the enterprise plus AI intersection is the place I keep coming back to." />
      <div className="px-10 py-10">
        <FadeIn>
          <div className="max-w-[640px] text-[0.94rem] text-[#2c2c2c] leading-[1.85] space-y-5">
            <p>
              I grew up in Lahore, Pakistan, studied economics, management, and computer science at
              Bocconi in Milan, then spent two and a half years as a Technical Business Analyst at FBK,
              a SaaS company serving life sciences multinationals. The clients were Johnson &amp; Johnson,
              Abbott, Stryker. The work was everything from client discovery through to post go live support,
              always sitting at the point where what the customer actually needed had to get translated into
              something a team could build and ship.
            </p>

            <blockquote className="border-l-[3px] border-accent pl-6 py-3 bg-[rgba(201,76,38,0.05)] rounded-r-lg my-8">
              <p className="font-serif text-[1.05rem] text-[#111] italic leading-relaxed">
                Trust in enterprise software is earned through consistency and accountability, not
                capability alone.
              </p>
            </blockquote>

            <p>
              That lesson came from watching customers run global procurement operations under SOC 2
              Type II, where compliance was not a checkbox but a design constraint from the very first
              conversation. When a pharmaceutical multinational deploys a system that touches pricing
              across 30+ countries, the question is not just whether the system works but whether it
              can be trusted to work the same way every time.
            </p>

            <p>
              The MSc at HSG brought a sharper technical lens to the same set of questions. The research
              side involved transformer-based NLP across 200,000+ records at the Institute of Responsible
              Innovation, comparing LLM providers on accuracy, cost, and latency, building multimodal
              pipelines. The building side was where the agentic AI work started: real systems, not
              just studied frameworks. Loadedout, Weave, Pitwall, the Distributed Task Execution Platform
              across 16 teams, all of them built and shipped, most of them still running.
            </p>

            <p>
              The Integrated Master's Project is where both sides connect. The question it is trying to
              answer is: can you build an agentic AI system for regulated ERP workflows that is both
              flexible enough to handle real process variation and verifiable enough that an auditor can
              follow what it did and why? That is not a research question for its own sake. It is the
              question that every enterprise customer adopting AI inside their core processes will
              eventually have to answer.
            </p>

            <p>
              Outside of work: CrossFit most mornings, started skiing recently. Qawwali and funk depending
              on the mood. Geopolitics, ancient history, motorsport. Currently learning German in
              St. Gallen, which is going.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <h3 className="font-mono text-[0.72rem] text-text-muted uppercase tracking-widest mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['English (native)', 'Urdu / Punjabi (native)', 'Italian (professional)', 'German (in progress)'].map(l => (
              <span key={l} className="tag">{l}</span>
            ))}
          </div>
          <h3 className="font-mono text-[0.72rem] text-text-muted uppercase tracking-widest mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {['CrossFit', 'Skiing', 'Qawwali / Sufi music', 'Funk & jazz', 'Motorsport', 'Geopolitics', 'Ancient history', 'Stand-up comedy'].map(i => (
              <span key={i} className="tag">{i}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
