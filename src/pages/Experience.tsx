import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

const jobs = [
  {
    period: 'Feb 2025 – Present',
    location: 'St. Gallen, Switzerland',
    role: 'Teaching Assistant, Fundamentals of Computer Science',
    company: 'University of St. Gallen',
    context: null,
    bullets: [
      'Run weekly sessions for 40 to 50 students covering assignment reviews, exam preparation, and end-to-end project delivery; evaluate team projects across code quality, system design, and presentation across full semester delivery cycles.',
    ],
  },
  {
    period: 'Sep 2024 – Mar 2026',
    location: 'St. Gallen, Switzerland',
    role: 'Research Assistant',
    company: 'Institute of Responsible Innovation, University of St. Gallen',
    context: null,
    bullets: [
      'Analysed behavioural patterns across 200,000+ entrepreneurial records using transformer-based NLP classification (BERT, DeBERTa) and linguistic metrics (semantic density, Cohen\'s kappa), validating model output against human-labelled subsets.',
      'Built multimodal data pipelines processing Kickstarter content (video, audio, text) at scale, ran comparative benchmarks across LLM providers (OpenAI, Gemini, DeepSeek) on accuracy, cost, and latency, and translated findings into insights for non-technical research stakeholders.',
    ],
  },
  {
    period: 'Apr 2022 – Oct 2024',
    location: 'Milan, Italy',
    role: 'Technical Business Analyst',
    company: 'FBK S.r.l.',
    context: 'Tender management SaaS for life sciences multinationals including Johnson & Johnson, Abbott, and Stryker, operating across 30+ countries under SOC 2 Type II certification.',
    bullets: [
      'Served as single point of contact across a portfolio of 10+ enterprise clients, with primary ownership of the J&J engagement end to end from BA to IT Director level, aligning senior management on both sides for decisions in the EUR 300k+ tier across bimonthly release cycles.',
      'Led the data ingestion feature from client discovery through productization, replacing manual one-off migrations with automated XML-based dossier creation, archive routing, and live status handling across J&J and other multinationals, generating EUR 200k+ in subsequent deal value.',
      'Led the price control engine update, implementing manufacturing cost encryption and minimum price compliance rules for markets where selling below manufacturing cost is legally prohibited, deployed across multiple enterprise clients.',
      'Ran technical feasibility for API integrations with SAP and JD Edwards ERP systems, validated SAP ECC to S/4HANA endpoint migration, and built Tableau dashboards consolidating multi-country tender data into a management view with role-based access.',
      'Produced structured delivery artifacts across all accounts: functional analyses, architecture documentation, user stories and test scripts in Azure DevOps, user guides, and training material, driving work through QA, UAT, deployment, and Hypercare.',
    ],
  },
]

const education = [
  {
    period: 'Sep 2024 – Present',
    degree: 'MSc Computer Science, Data Science & AI',
    school: 'University of St. Gallen (HSG), Switzerland',
    detail: 'Machine Learning, Deep Learning, NLP with LLMs, Advanced Databases, Software Systems Engineering, Information Theory, Marketing Analytics, User Centred Design (HCI). Integrated Master\'s Project (12 ECTS) at the Interactions Lab supervised by Prof. Andrei Ciortea.',
  },
  {
    period: 'Sep 2018 – May 2021',
    degree: 'BSc Economics, Management & Computer Science',
    school: 'Bocconi University, Milan, Italy',
    detail: 'Machine Learning, Big Data and Databases, Econometrics, Computer Programming. Trilingual university environment across Italian, English, and international curriculum.',
  },
]

const competencies = [
  { name: 'Enterprise Delivery', level: 'Professional — FBK, 2.5 years', detail: 'SAP and JD Edwards integration, Procure to Pay and Order to Cash workflows, SaaS delivery lifecycle, UAT and Hypercare, Azure DevOps, SOC 2 compliance' },
  { name: 'AI Engineering', level: 'Advanced — MSc coursework and personal projects', detail: 'Agentic AI (BDI, JaCaMo, NeMo Guardrails), RAG, ReACT, NLP, LLMs, Transformers (BERT, DeBERTa), Process Mining, Few-Shot Learning' },
  { name: 'Data Engineering', level: 'Advanced — IRI research and personal projects', detail: 'ETL Pipelines, Distributed Processing (Dask), Web Scraping, API Integration, GCP, Azure, multimodal pipelines' },
  { name: 'Visualisation', level: 'Proficient — FBK and research', detail: 'Tableau, PowerBI, Plotly' },
]

const toolGroups = [
  { label: 'Programming', items: ['Python', 'R', 'SQL', 'Java', 'JavaScript', 'TypeScript'] },
  { label: 'ML & AI Stack', items: ['HuggingFace', 'Vertex AI', 'LightGBM', 'Groq', 'OpenAI API'] },
  { label: 'Databases', items: ['PostgreSQL', 'Neo4j', 'ChromaDB', 'MongoDB', 'SQLite'] },
  { label: 'Infrastructure', items: ['GCP', 'Docker', 'FastAPI', 'GitHub Actions', 'Azure DevOps'] },
]

export default function Experience() {
  return (
    <div>
      <PageHeader eyebrow="Experience & Education" title="Where the work happened." subtitle="Enterprise software delivery, AI research, teaching, and the academic foundations underneath all of it." />
      <div className="px-10 py-10 max-w-3xl">

        <h2 className="section-title mb-8">Professional Experience</h2>
        <div className="flex flex-col gap-6 mb-14">
          {jobs.map(({ period, location, role, company, context, bullets }) => (
            <FadeIn key={role}>
              <div className="grid grid-cols-[140px_1fr] gap-5">
                <div className="pt-0.5">
                  <div className="font-mono text-[0.7rem] text-accent leading-snug mb-1">{period}</div>
                  <div className="font-mono text-[0.68rem] text-text-muted">{location}</div>
                </div>
                <motion.div whileHover={{ x: 2 }} className="bg-white border border-border rounded-lg p-6">
                  <div className="font-semibold text-[0.95rem] text-[#111] mb-0.5">{role}</div>
                  <div className="text-[0.82rem] text-accent font-medium mb-3">{company}</div>
                  {context && <p className="text-[0.78rem] text-text-muted italic mb-4 leading-relaxed">{context}</p>}
                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b, i) => <li key={i} className="tl-bullet">{b}</li>)}
                  </ul>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>

        <h2 className="section-title mb-8">Education</h2>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {education.map(({ period, degree, school, detail }) => (
              <div key={degree} className="bg-white border border-border rounded-lg p-6">
                <div className="font-mono text-[0.7rem] text-accent mb-2">{period}</div>
                <div className="font-semibold text-[0.92rem] text-[#111] mb-1">{degree}</div>
                <div className="text-[0.82rem] text-accent mb-3">{school}</div>
                <div className="text-[0.8rem] text-text-muted leading-relaxed">{detail}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <h2 className="section-title mb-8">Skills</h2>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {competencies.map(({ name, level, detail }) => (
              <div key={name} className="bg-white border border-border rounded-lg p-5">
                <div className="font-semibold text-[0.88rem] text-[#111] mb-0.5">{name}</div>
                <div className="font-mono text-[0.68rem] text-accent mb-2">{level}</div>
                <div className="text-[0.8rem] text-text-muted leading-relaxed">{detail}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {toolGroups.map(({ label, items }) => (
              <div key={label}>
                <div className="font-mono text-[0.7rem] text-text-muted uppercase tracking-widest mb-2">{label}</div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(i => <span key={i} className="tag">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
