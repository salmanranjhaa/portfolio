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
      <div className="px-6 md:px-10 py-10 max-w-3xl mx-auto">

        {/* Featured IMP */}
        <FadeIn>
          <div className="border border-rule rounded-xl p-8 mb-10 relative overflow-hidden bg-night3 hover:border-[rgba(212,175,97,0.3)] transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-gold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Integrated Master's Project · In Progress · Jan 2027
              </span>
            </div>
            <h2 className="font-serif text-[1.25rem] font-bold text-paper mb-1.5 leading-snug">
              AEGIS P2P: Auditable Governance for LLM Agents in SAP Procure-to-Pay
            </h2>
            <div className="font-mono text-[0.7rem] text-muted mb-5">
              Interactions Lab, University of St. Gallen · Supervised by Prof. Andrei Ciortea · with Adria Pop
            </div>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              LLM agents may propose Procure-to-Pay actions such as registering invoices, posting goods
              receipts, or releasing payments, but they do not decide. AEGIS P2P is a governance gate
              that checks each proposal before it runs. The proposer's role comes from the gate's own
              registry, not from the agent's claim. The gate has two layers: a BSPL information
              protocol, verified safe and live with the BSPL reference checker, decides whether an
              action is enabled in the case, and a Cupid-style norm engine with commitments and
              deadlines decides whether it is allowed. Every verdict (allowed, blocked, escalated, or
              routed to manual review) is written to a hash-chained audit log.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              The specification covers 28 P2P actions, 8 roles, and 18 norm declarations, with a
              vocabulary that covers the public BPI Challenge 2019 SAP log. Preliminary results on 130
              labelled scenarios: the full gate decides every scenario as labelled, while each layer
              alone lets forbidden actions through. Across 13,895 seeded manipulated proposals, none was
              wrongly allowed. Across about 3,000 proposals from four live LLMs, no forbidden request was
              executed.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-5">
              The target question is the reliability gap enterprises will face as they adopt Joule and
              the broader SAP Business AI roadmap: not whether an agent can act, but whether each action
              is provably permitted before execution and auditable afterwards. These results are
              preliminary; the final evaluation on a frozen corpus and specification is due January 2027.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Agentic AI', 'LLMs', 'BSPL', 'Commitment Protocols', 'SAP P2P', 'Process Mining', 'Audit Logs', 'BPI 2019'].map(t => (
                <span key={t} className="tag-accent">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Featured Thesis */}
        <FadeIn delay={0.05}>
          <div className="border border-rule rounded-xl p-8 mb-10 relative overflow-hidden bg-night3 hover:border-[rgba(212,175,97,0.3)] transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-gold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Master's Thesis · In Progress · Oct 2026
              </span>
            </div>
            <h2 className="font-serif text-[1.25rem] font-bold text-paper mb-1.5 leading-snug">
              QEC Burst Decoder, Recurrent Neural Decoding of the Surface Code under Cosmic Ray Burst Noise
            </h2>
            <div className="font-mono text-[0.7rem] text-muted mb-5">
              University of St. Gallen · Supervised by Prof. Anna Lena Horlemann · Master's Thesis
            </div>
            <p className="text-[0.875rem] text-papersoft italic leading-[1.75] mb-3">
              Recurrent neural decoders for cosmic ray noise bursts on the surface code, mapping
              where decoding is physically possible at all, and which training methods actually
              get a learner there.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              Investigating whether recurrent neural networks can decode quantum error correcting
              codes under cosmic ray burst noise, a correlated failure mode that the standard
              matching decoder is structurally blind to. A distance 5 surface code is simulated
              in Stim under a two state Markov noise model calibrated from Google's Sycamore
              cosmic ray measurements, and a compact LSTM decoder is evaluated against minimum
              weight perfect matching across the full axis of burst severities.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              The severity sweep maps where decoding is physically possible at all: mild bursts
              are trivial, the calibrated worst case is an information theoretic wall where every
              decoder degenerates to a coin flip, and a narrow decodable band lies between. The
              methodology is strict single variable experimentation over hundreds of thousands of
              simulated shots per configuration, with byte identical test sets and fully
              reproducible, seed pinned experiment bundles trained on GPU.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-5">
              Results so far include a structural proof that perfect burst knowledge cannot help
              matching based decoding under this noise model, and a training method finding:
              neural decoders trained from scratch collapse in the strongly correlated regime,
              but severity transfer, chaining checkpoints from milder to harsher noise, unlocks
              it, while fine tuning near the wall is measurably destructive and zero shot
              transfer is optimal there. The learned decoder currently sits within 6 percent of
              the classical baseline in the hardest decodable regime.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Quantum Error Correction', 'Surface Codes', 'Neural Decoders', 'LSTM', 'Stim', 'PyMatching', 'PyTorch', 'Transfer Learning'].map(t => (
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
