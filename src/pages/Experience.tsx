import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const jobs = [
  {
    role: 'Teaching Assistant, CS Fundamentals',
    org: 'University of St. Gallen',
    period: '2025 · Ongoing',
    bullets: [
      'Teaching Python and core CS concepts to 40-50 students per semester.',
      'Running exercise sessions, grading, and office hours for the introductory programming course.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Institute of Responsible Innovation, HSG',
    period: 'Sep 2025 · Mar 2026',
    bullets: [
      'Building large-scale data pipelines across 200,000+ Kickstarter projects for entrepreneurship research.',
      'Audio transcription using Whisper Large v3 on GCP GPU instances, creator biography classification via two-stage NLI pipeline.',
      'Validated classification models against human-labelled subsets using Cohen\'s kappa.',
    ],
  },
  {
    role: 'Technical Business Analyst',
    org: 'FBK S.r.l., Milan',
    period: 'Nov 2021 · Oct 2024',
    bullets: [
      'Served 10+ enterprise clients across pharma and medtech, with Johnson & Johnson as primary account from Business Analyst to IT Director engagement.',
      'Led EUR 200k+ deal closures and managed project streams worth EUR 300k+ for J&J alone.',
      'Delivered SAP and JD Edwards ERP implementations including custom integrations, data migration, and cross-system workflows.',
      'Identified and escalated a pricing control mechanism being used to circumvent legally prohibited below-cost selling; implementation was halted.',
      'Produced full delivery artefacts: functional analyses, Azure DevOps backlogs, UAT scripts, and hypercare documentation.',
    ],
  },
]

const education = [
  {
    degree: 'MSc in Computer Science, Data Science & AI',
    school: 'University of St. Gallen (HSG)',
    period: '2024 · 2026',
    note: 'Integrated Master\'s Project: Trustworthy Agentic AI for SAP P2P Workflows',
  },
  {
    degree: 'BSc in Economics, Management and Computer Science',
    school: 'Bocconi University, Milan',
    period: '2018 · 2021',
    note: 'Focus on quantitative methods, corporate finance, and software fundamentals',
  },
]

const skills = [
  {
    heading: 'Applied Competencies',
    groups: [
      { name: 'Agentic AI Systems', tags: ['ReACT Agents', 'BDI Architectures', 'NeMo Guardrails', 'MCP', 'RAG'] },
      { name: 'Enterprise Software', tags: ['SAP ERP', 'JD Edwards', 'ERP Integration', 'Process Mining', 'Azure DevOps'] },
      { name: 'Data & ML', tags: ['NLP', 'Transformer Models', 'ETL Pipelines', 'Whisper', 'DeBERTa', 'BART'] },
      { name: 'Delivery & Analysis', tags: ['Functional Analysis', 'UAT Design', 'Stakeholder Management', 'Technical Documentation'] },
    ],
  },
  {
    heading: 'Tools & Technologies',
    groups: [
      { name: 'Languages', tags: ['Python', 'TypeScript', 'SQL', 'LaTeX'] },
      { name: 'Frameworks', tags: ['FastAPI', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
      { name: 'Infrastructure', tags: ['GCP', 'Docker', 'PostgreSQL', 'Neo4j', 'ChromaDB', 'nginx'] },
      { name: 'AI / ML', tags: ['HuggingFace', 'Vertex AI', 'Groq', 'LangChain', 'W3C WoT'] },
    ],
  },
]

export default function Experience() {
  return (
    <div>
      <PageHeader
        eyebrow="Experience"
        title="Where the work happened."
        subtitle="Enterprise software delivery, academic research, and teaching — across Milan and St. Gallen."
      />
      <div className="px-10 py-10 max-w-3xl space-y-14">

        {/* Timeline */}
        <FadeIn>
          <h2 className="section-title mb-8">Work</h2>
          <div className="space-y-5">
            {jobs.map(({ role, org, period, bullets }) => (
              <motion.div key={role} whileHover={{ x: 2 }} className="bg-night3 border border-rule rounded-lg p-6 hover:border-[rgba(212,175,97,0.25)] transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-semibold text-[0.95rem] text-paper mb-0.5">{role}</div>
                    <div className="font-mono text-[0.7rem] text-gold">{org}</div>
                  </div>
                  <span className="font-mono text-[0.68rem] text-muted flex-shrink-0 pt-0.5">{period}</span>
                </div>
                <ul className="space-y-1.5">
                  {bullets.map((b, i) => <li key={i} className="tl-bullet">{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.08}>
          <h2 className="section-title mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map(({ degree, school, period, note }) => (
              <div key={degree} className="bg-night3 border border-rule rounded-lg p-6 hover:border-[rgba(212,175,97,0.25)] transition-colors">
                <div className="font-mono text-[0.65rem] text-gold uppercase tracking-wide mb-2">{period}</div>
                <div className="font-semibold text-[0.92rem] text-paper mb-1">{degree}</div>
                <div className="text-[0.8rem] text-muted mb-2">{school}</div>
                <div className="text-[0.78rem] text-papersoft italic leading-snug">{note}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills */}
        {skills.map(({ heading, groups }, si) => (
          <FadeIn key={heading} delay={0.1 + si * 0.05}>
            <h2 className="section-title mb-8">{heading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {groups.map(({ name, tags }) => (
                <div key={name} className="bg-night3 border border-rule rounded-lg p-5 hover:border-[rgba(212,175,97,0.25)] transition-colors">
                  <div className="font-semibold text-[0.82rem] text-paper mb-3">{name}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}

      </div>
    </div>
  )
}
