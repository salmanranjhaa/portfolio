import { ExternalLink } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const ventures = [
  {
    title: 'Polaris Counselling',
    tagline: 'Independent university counselling for Pakistani students.',
    desc: 'In Pakistan almost nobody guides students toward the top names in Europe. The agencies that exist earn commission from average private universities, so that is where their students end up, advised by people with a stake in the answer. I went through the process myself and had spent years guiding students through it unofficially, so Polaris does it properly: independent counselling into the best universities in Europe, covering scholarships, housing, documentation, immigration and everything else the process demands.',
    tags: ['Counselling', 'European Admissions', 'Scholarships', 'Education'],
    links: [{ label: 'Visit', href: 'https://polarisedu.info' }],
  },
  {
    title: 'Polaris Platform',
    tagline: 'The software that runs an admissions practice.',
    desc: 'The platform came out of doing the counselling. It holds a knowledge base of universities, scholarships, visas and requirements, with AI working on top of it, and it manages students, applications, documents, deadlines and the daily work around them in one place. It is built for schools, independent counsellors, consultancies and everyone in between.',
    tags: ['Admissions Platform', 'AI', 'SaaS', 'EdTech'],
    links: [{ label: 'Visit', href: 'https://agencies.polarisedu.info' }],
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
                {v.links.length > 0 && (
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
                  {v.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[0.75rem] font-mono text-gold border border-[rgba(212,175,97,0.3)] px-2.5 py-1 rounded hover:bg-[rgba(212,175,97,0.08)] transition-colors">
                      <ExternalLink size={12} /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
