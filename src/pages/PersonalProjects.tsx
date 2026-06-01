import { ExternalLink, Github } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const projects = [
  {
    title: 'Loadedout',
    tagline: 'Fitness and lifestyle tracking, rebuilt from scratch.',
    desc: 'Full-stack fitness platform live at loadedout.online. Workout tracking, meal logging, AI-powered coaching via Vertex AI, and Google Calendar sync. Built entirely solo and used daily. The kind of project that starts as a weekend experiment and turns into a production system you refuse to stop improving.',
    tags: ['FastAPI', 'Vertex AI', 'PostgreSQL', 'Google Calendar API', 'Python'],
    live: 'https://loadedout.online',
    featured: true,
  },
  {
    title: 'GRE Prep Station',
    tagline: 'A vocabulary trainer built for my sister.',
    desc: 'My sister needed to prep for the GRE. I built her an app. Flashcards with AI-generated definitions and mnemonics, multiple-choice and written-answer quizzes with semantic grading, per-user progress tracking, and a full admin panel. The kind of project that clarifies what product thinking actually means: you know the user personally, you know exactly what they need, and you have to make it work for them rather than for an abstraction.',
    tags: ['FastAPI', 'PostgreSQL', 'Groq', 'Vanilla JS', 'Docker', 'GCP'],
    github: 'https://github.com/salmanranjhaa/GRE_prep_studio',
    featured: false,
  },
  {
    title: 'Weave',
    tagline: 'Enterprise RAG system with a proper agentic layer.',
    desc: 'Multi-source RAG architecture spanning Postgres, Neo4j, Slack, and ERP data. ReACT agent trace panel, multi-source routing, and a Star Wars lightsaber colour scheme that somehow makes the interface feel right. Built to understand what production agentic systems actually require.',
    tags: ['FastAPI', 'PostgreSQL', 'Neo4j', 'React', 'ReACT Agents', 'RAG'],
    github: 'https://github.com/salmanranjhaa/Weave',
    featured: false,
  },
  {
    title: 'Pitwall',
    tagline: 'F1 strategy and race data dashboard.',
    desc: 'Real-time Formula 1 data visualisation and strategy analysis. Tyre degradation models, gap charts, pit window calculations. The design system from this project is what the rest of the portfolio borrows from.',
    tags: ['React', 'TypeScript', 'FastAPI', 'F1 Data API'],
    github: 'https://github.com/salmanranjhaa/PitWall',
    featured: false,
  },
]

export default function PersonalProjects() {
  return (
    <div>
      <PageHeader
        eyebrow="Personal Projects"
        title="Built for the sake of building."
        subtitle="Things that started as curiosity and ended up in production, or close enough."
      />
      <div className="px-10 py-10 max-w-3xl space-y-5">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.07}>
            <div className={`rounded-xl p-7 border transition-all duration-200 hover:bg-[#1c2035] ${
              p.featured
                ? 'bg-night3 border-l-[3px] border-gold'
                : 'bg-night3 border-rule hover:border-[rgba(212,175,97,0.3)]'
            }`}>
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="font-serif text-[1.1rem] font-bold text-paper">{p.title}</h3>
                  <p className="text-[0.78rem] text-gold font-mono mt-0.5">{p.tagline}</p>
                </div>
                {p.featured && (
                  <span className="flex-shrink-0 font-mono text-[0.6rem] text-gold bg-[rgba(212,175,97,0.1)] border border-[rgba(212,175,97,0.25)] px-2 py-0.5 rounded uppercase tracking-widest">
                    Live
                  </span>
                )}
              </div>
              <p className="text-[0.875rem] text-papersoft leading-[1.75] my-4">{p.desc}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="flex gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[0.75rem] font-mono text-gold border border-[rgba(212,175,97,0.3)] px-2.5 py-1 rounded hover:bg-[rgba(212,175,97,0.08)] transition-colors">
                      <ExternalLink size={12} /> Visit
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[0.75rem] font-mono text-muted border border-rule px-2.5 py-1 rounded hover:border-[rgba(212,175,97,0.3)] hover:text-papersoft transition-colors">
                      <Github size={12} /> GitHub
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
