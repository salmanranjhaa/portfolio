import { ExternalLink } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const ventures = [
  {
    title: 'Polaris',
    tagline: 'An independent counselling service, and the admissions platform it became.',
    desc: 'Polaris began as an independent counselling service for Pakistani students, taking no commission from universities so the advice stays honest. Running it exposed the real problem: consultancies manage applications in spreadsheets and WhatsApp. So Polaris became the software too. It is now a platform where counsellors run every case in one place, from intake through offer, with UK, Australian and European admission rules built in. An AI counsellor called رہنما (Rehnuma) works beside the team in English and Urdu, and research agents read university pages and return findings for a human to approve before anything reaches a student record.',
    tags: ['Admissions Platform', 'AI Agents', 'Counselling', 'EdTech'],
    links: [
      { label: 'Counselling', href: 'https://polarisedu.info' },
      { label: 'Platform', href: 'https://agencies.polarisedu.info' },
    ],
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
