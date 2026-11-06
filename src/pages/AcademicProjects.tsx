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
                Master's Thesis · Submitting Nov 2026
              </span>
            </div>
            <h2 className="font-serif text-[1.25rem] font-bold text-paper mb-1.5 leading-snug">
              Neural Decoders for Correlated Burst Noise in Surface Code Quantum Error Correction
            </h2>
            <div className="font-mono text-[0.7rem] text-muted mb-5">
              University of St. Gallen · Supervised by Prof. Anna-Lena Horlemann, co-supervised by Prof. Lukas Gonon · Master's Thesis
            </div>
            <p className="text-[0.875rem] text-papersoft italic leading-[1.75] mb-3">
              Neural decoders for cosmic ray bursts on the surface code, mapping where decoding is
              possible at all, where a learned decoder beats matching, and how to train one to get
              there.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              Cosmic ray impacts raise the error rate of many qubits on a superconducting chip at
              once, while the standard matching decoder assumes noise that does not change over
              time. A distance 5 surface code is simulated in Stim under a two state Markov burst
              model calibrated to Google's Sycamore cosmic ray measurements. A decoder built from a
              small convolutional encoder and a two layer LSTM is evaluated against minimum weight
              perfect matching across the full range of burst severities.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-3">
              The severity sweep maps where decoding is possible: mild bursts are easy for every
              decoder, the calibrated worst case leaves every decoder at chance, and a decodable
              band lies between. Every comparison uses the same 50,000 test shots per severity and a
              paired McNemar test. Training runs use up to a million simulated shots, with byte
              identical test sets and seed pinned, reproducible experiment bundles.
            </p>
            <p className="text-[0.875rem] text-papersoft leading-[1.75] mb-5">
              Matching cannot use the burst under this noise model. Reweighting the matching graph
              with perfect knowledge of the burst leaves every correction unchanged, shown by proof
              and an exhaustive computational check. The neural decoder ties or beats matching at
              every decodable severity on three independent seeds, with up to 32 percent fewer
              logical errors. Training from scratch stalls in the strongly correlated regime, and
              chaining checkpoints from milder to harsher noise gets the learner through. The neural
              advantage ends just before matching stops decoding, and fine tuning a model at that
              edge erases what it had learned.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Quantum Error Correction', 'Surface Codes', 'Neural Decoders', 'LSTM', 'CNN', 'Stim', 'PyMatching', 'PyTorch', 'Transfer Learning'].map(t => (
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
