import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

const projects = [
  {
    title: 'HuggingFace Model Metadata Framework',
    meta: 'Advanced Databases · HSG',
    desc: '8-stage ETL pipeline processing 1M+ HuggingFace models with JSON normalisation, enrichment, and domain inference. Paired with a budget-constrained scoring system across Popularity, Originality, Influence, and Documentation quality, and an optimisation algorithm balancing model quality against domain diversity.',
    tags: ['ETL', 'Python', 'Dask', 'PostgreSQL', 'Optimisation'],
  },
  {
    title: 'PITAS, Distributed Task Execution Platform',
    meta: 'Advanced Software & Systems Engineering · HSG',
    desc: 'Federated microservices platform coordinated across 16 teams via an auction-based architecture. Designed event-driven communication (MQTT, WebSub), semantic IoT discovery (W3C WoT), and LLM agent integration (MCP). Shipped a production-ready system with live integration across 15+ external teams.',
    tags: ['Distributed Systems', 'MQTT', 'W3C WoT', 'MCP', 'Microservices', 'FastAPI'],
  },
  {
    title: 'IRI Kickstarter Research Pipeline',
    meta: 'Institute of Responsible Innovation · HSG',
    desc: 'Large-scale data pipeline across 200,000+ Kickstarter projects, analysing rhetorical framing patterns in entrepreneurial communication. Audio transcription via Whisper Large v3 on GPU, creator biography classification (Individual vs. Group) via a two-stage deterministic plus NLI pipeline using DeBERTa and BART. Validated against human-labelled subsets with Cohen\'s kappa.',
    tags: ['Whisper', 'DeBERTa', 'BART', 'NLP', 'GCP', 'Python'],
  },
]

export default function AcademicProjects() {
  return (
    <div>
      <PageHeader
        eyebrow="Academic Projects"
        title="Research-backed builds."
        subtitle="Work done in the context of the MSc at HSG and IRI research. Built to academic standards, designed with real deployment in mind."
      />
      <div className="px-10 py-10 max-w-3xl mx-auto">

        {/* Featured IMP */}
        <FadeIn>
          <div className="border border-rule rounded-xl p-8 mb-10 relative overflow-hidden bg-night3 hover:border-[rgba(212,175,97,0.3)] transition-colors"
               style={{ borderLeft: '3px solid #d4af61' }}>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-gold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Integrated Master's Project · In Progress · Dec 2026
              </span>
            </div>
            <h2 className="font-serif text-[1.25rem] font-bold text-paper mb-1.5 leading-snug">
              AEGIS-P2P, Auditable Enterprise Governance for Intelligent Systems in Procure-to-Pay
            </h2>
            <div className="font-mono text-[0.7rem] text-muted mb-5">
              Interactions Lab, University of St. Gallen · Supervised by Prof. Andrei Ciortea · 12 ECTS
            </div>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              Designing a two layer governance gate for LLM driven automation of compliance
              sensitive SAP Procure-to-Pay workflows, where every action must be auditable before
              it runs. An LLM proposes actions; a BSPL information protocol determines which
              actions are structurally possible from the causal flow of information, and a Cupid
              commitment norm engine determines which are normatively correct. The system proves
              conformance before execution rather than logging it after.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              Evaluated on the BPI Challenge 2019 dataset: 251,000+ real SAP Procure-to-Pay event
              logs, replayed against formal compliance rules that auto generate verdicts at scale.
              The headline baseline stack isolates each governance layer: LLM only, LLM plus
              protocol, LLM plus protocol plus norms, with six ablations and a live LLM containment
              track under blind and informed conditions.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-5">
              The target question is the reliability gap enterprises will face as they adopt Joule
              and the broader SAP Business AI roadmap: not whether the system can act, but whether
              it can act in a way that is provably auditable before execution, not merely logged
              after.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Agentic AI', 'LLMs', 'BSPL', 'Commitment Protocols', 'SAP P2P', 'Process Mining', 'Audit Logs', 'BPI 2019'].map(t => (
                <span key={t} className="tag-accent">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className="card h-full">
                <h3 className="font-serif text-[1rem] font-bold text-paper mb-1">{p.title}</h3>
                <div className="font-mono text-[0.65rem] text-gold mb-3 uppercase tracking-wide">{p.meta}</div>
                <p className="text-[0.82rem] text-papersoft leading-[1.7] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  )
}
