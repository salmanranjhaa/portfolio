import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const jobs = [
  {
    role: 'Agentic AI Software Engineer',
    org: 'LabVentures GmbH, St. Gallen',
    period: 'Sep 2026 · Present',
    bullets: [
      'Build software products at a venture builder with ten ventures, from education to bookkeeping and legal AI, applying AI coding agents to development, QA, and business analysis.',
      'Developed an automated UAT platform: AI agents deploy apps in isolated environments, derive test scenarios from user journeys and personas, and run them step by step. People approve test plans before any run, and every step is logged with a screenshot and an interpretation. Used for all web and Android products in the portfolio.',
      'Proofs of concept for an on-premise legal research assistant for Swiss lawyers (federal legislation retrieval, locally hosted models) and a teaching assistant for a HSG course, in use by students and lecturers.',
    ],
  },
  {
    role: 'Teaching Assistant, CS Fundamentals',
    org: 'University of St. Gallen',
    period: 'Feb 2025 · Present',
    bullets: [
      'Run weekly exercise sessions for 40-50 business students covering Python, databases, SQL, data science, and machine learning; set up their environments and troubleshoot the course tools.',
      'Coach ten project teams per semester building Streamlit applications on API or database data with a self-trained ML model, and review each final app, code, and video against the course requirements.',
    ],
  },
  {
    role: 'Research Assistant, Data Science',
    org: 'Institute of Responsible Innovation, HSG',
    period: 'Sep 2025 · Mar 2026',
    bullets: [
      'Built the data pipelines for a Swiss government-funded study (CHF 500k grant): 200,000+ founder biographies and 20,000+ Kickstarter campaign videos, transcribed with self-hosted Whisper on GPU.',
      'Designed a two-stage classifier (deterministic rules, then NLI zero-shot inference with DeBERTa and BART), benchmarked LLM providers on accuracy, cost, and latency, and validated it against hand-labelled ground truth (F1, Cohen\'s kappa).',
    ],
  },
  {
    role: 'Technical Business Analyst',
    org: 'FBK S.r.l., Milan',
    period: 'Nov 2021 · Oct 2024',
    bullets: [
      'Single point of contact across 10+ enterprise clients of a tender management SaaS used by life sciences multinationals (Johnson & Johnson, Abbott, Stryker) in 30+ countries, under SOC 2 Type II. Owned the J&J engagement end to end, aligning senior stakeholders on decisions in the EUR 300k+ tier.',
      'Ran technical feasibility for API integrations with SAP and JD Edwards ERP, validated the SAP ECC to S/4HANA endpoint migration, and built Tableau dashboards with role-based access for multi-country tender data.',
      'Led the data ingestion feature from client discovery to productisation, replacing manual migrations with automated XML-based dossier creation; generated EUR 200k+ in subsequent deal value.',
      'Led the price control engine update: manufacturing cost encryption and minimum price compliance for jurisdictions where below-cost sales carry legal consequences, deployed across multiple enterprise clients.',
    ],
  },
]

const education = [
  {
    degree: 'MSc in Computer Science (AI and Data Science specialisation)',
    school: 'University of St. Gallen (HSG)',
    period: '2024 · 2026',
    note: 'Master\'s Thesis: recurrent neural decoders for quantum error correction under cosmic ray burst noise · Integrated Master\'s Project: AEGIS P2P, Auditable Governance for LLM Agents in SAP Procure-to-Pay',
  },
  {
    degree: 'BSc in Economics, Management and Computer Science',
    school: 'Bocconi University, Milan',
    period: '2018 · 2021',
    note: 'Focus on quantitative methods, corporate finance, and data science',
  },
]

const skills = [
  {
    heading: 'Applied Competencies',
    groups: [
      { name: 'Agentic AI Systems', tags: ['ReACT Agents', 'BSPL', 'Commitment Protocols', 'MCP', 'RAG'] },
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
      <div className="px-6 md:px-10 py-10 max-w-3xl mx-auto space-y-14">

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
