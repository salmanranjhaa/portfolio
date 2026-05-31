import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

const projects = [
  {
    title: 'Loadedout',
    badge: 'Live',
    badgeHref: 'https://loadedout.online',
    meta: 'FastAPI · Vertex AI · GCP · PostgreSQL',
    desc: 'Full-stack personal health and fitness platform used daily. Covers workout logging, meal tracking, body weight history, and schedule management with Google Calendar sync and LLM-driven personalised coaching. Built on GCP with Vertex AI for the coaching layer. Started as a weekend experiment, ended up as a core part of the daily routine.',
    tags: ['FastAPI', 'Vertex AI', 'GCP', 'PostgreSQL', 'Google Calendar API', 'LLM coaching'],
    github: null,
    live: 'https://loadedout.online',
    featured: true,
  },
  {
    title: 'Weave',
    badge: null,
    meta: 'Multi-agent enterprise intelligence',
    desc: 'Two AI agents over a shared ERP data layer: a RAG router performing parallel retrieval across PostgreSQL, ChromaDB, and Neo4j, and a ReACT agent running autonomous iterative reasoning across the same sources. Deployed on GCP via Docker Compose over a fully LLM-generated synthetic enterprise dataset (65 employees, 50+ tickets, 120+ Slack messages across 10 channels).',
    tags: ['RAG', 'ReACT', 'Neo4j', 'ChromaDB', 'PostgreSQL', 'Docker', 'GCP'],
    github: 'https://github.com/salmanranjhaa',
    live: null,
    featured: false,
  },
  {
    title: 'Pitwall',
    badge: null,
    meta: 'F1 race strategy simulator',
    desc: 'Live F1 race management simulation where the user acts as race engineer across qualifying, tire strategy, and pit windows. Implements a BDI agent system for 20 AI drivers with distinct personalities and autonomous strategic plans, driven by LightGBM models trained on FastF1 telemetry from 2022 to 2024 across 24 circuits.',
    tags: ['BDI Agents', 'LightGBM', 'React 19', 'TypeScript', 'FastAPI', 'FastF1', 'SQLite'],
    github: 'https://github.com/salmanranjhaa/PitWall',
    live: null,
    featured: false,
  },
]

export default function PersonalProjects() {
  return (
    <div>
      <PageHeader eyebrow="Personal Projects" title="Built for the sake of building." subtitle="Things that exist because a problem was interesting enough to ship a solution for. Most of them are still running." />
      <div className="px-10 py-10 max-w-3xl">
        <div className="flex flex-col gap-5">
          {projects.map(({ title, badge, badgeHref, meta, desc, tags, github, live, featured }) => (
            <FadeIn key={title}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`bg-white border rounded-lg p-7 transition-all duration-200 hover:shadow-sm ${featured ? 'border-l-[3px] border-accent' : 'border-border hover:border-[#c8bfb0]'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-[1.1rem] font-bold text-[#111]">{title}</h3>
                      {badge && badgeHref && (
                        <a href={badgeHref} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-[0.68rem] text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded hover:bg-accent/10 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          {badge}
                        </a>
                      )}
                    </div>
                    <p className="font-mono text-[0.7rem] text-text-muted">{meta}</p>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    {live && (
                      <a href={live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.75rem] font-mono text-accent border border-accent/30 px-2.5 py-1 rounded hover:bg-accent/5 transition-colors">
                        <ExternalLink size={11} /> Visit
                      </a>
                    )}
                    {github && (
                      <a href={github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.75rem] font-mono text-text-muted border border-border px-2.5 py-1 rounded hover:border-[#c8bfb0] hover:text-[#111] transition-colors">
                        <Github size={11} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[0.875rem] text-[#2c2c2c] leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
