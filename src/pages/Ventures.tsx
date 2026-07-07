import { ExternalLink } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const ventures = [
  {
    title: 'Polaris',
    tagline: 'Independent university counselling for Pakistani students.',
    desc: 'An independent, commission-free counselling service helping Pakistani students get into elite European universities. Most agents steer students toward whichever institution pays them a commission; Polaris takes none, and focuses instead on the funding and scholarship pathways agents rarely disclose, from tuition waivers to fully funded places at top schools across Switzerland, Italy, the Netherlands and Scandinavia.',
    tags: ['University Counselling', 'Scholarships', 'European Admissions', 'Education'],
    live: 'https://polarisedu.info',
  },
]

export default function Ventures() {
  return (
    <div>
      <PageHeader
        eyebrow="Ventures"
        title="Beyond the codebase."
        subtitle="Not everything worth building is software. Ventures with real users and real stakes."
      />
      <div className="px-6 md:px-10 py-10 max-w-3xl mx-auto space-y-5">
        {ventures.map((v, i) => (
          <FadeIn key={v.title} delay={i * 0.07}>
            <div className="rounded-xl p-7 border transition-all duration-200 hover:bg-[#1c2035] bg-night3 border-rule hover:border-[rgba(212,175,97,0.3)]">
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="font-serif text-[1.1rem] font-bold text-paper">{v.title}</h3>
                  <p className="text-[0.78rem] text-gold font-mono mt-0.5">{v.tagline}</p>
                </div>
                {v.live && (
                  <span className="flex-shrink-0 font-mono text-[0.6rem] text-gold bg-[rgba(212,175,97,0.1)] border border-[rgba(212,175,97,0.25)] px-2 py-0.5 rounded uppercase tracking-widest">
                    Live
                  </span>
                )}
              </div>
              <p className="text-[0.875rem] text-papersoft leading-[1.75] my-4">{v.desc}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="flex gap-2">
                  {v.live && (
                    <a href={v.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[0.75rem] font-mono text-gold border border-[rgba(212,175,97,0.3)] px-2.5 py-1 rounded hover:bg-[rgba(212,175,97,0.08)] transition-colors">
                      <ExternalLink size={12} /> Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
