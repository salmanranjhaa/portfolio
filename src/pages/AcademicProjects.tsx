import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import FadeIn from '../components/FadeIn'

export default function AcademicProjects() {
  return (
    <div>
      <PageHeader eyebrow="Academic Projects" title="Research-backed builds." subtitle="Work done in the context of the MSc at HSG and IRI research. Built to academic standards, designed with real deployment in mind." />
      <div className="px-10 py-10 max-w-3xl">

        {/* Featured IMP */}
        <FadeIn>
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white border-l-[3px] border-accent border border-border rounded-lg p-8 mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[0.68rem] text-accent uppercase tracking-widest">
                Integrated Master's Project · In Progress · Dec 2026
              </span>
            </div>
            <h2 className="font-serif text-[1.2rem] font-bold text-[#111] mb-2 leading-snug">
              Trustworthy Agentic AI for SAP Procure to Pay Workflows
            </h2>
            <p className="font-mono text-[0.72rem] text-text-muted mb-5">
              Interactions Lab, University of St. Gallen · Prof. Andrei Ciortea · 12 ECTS
            </p>
            <p className="text-[0.875rem] text-[#2c2c2c] leading-relaxed mb-4">
              Designing and prototyping an agentic architecture for LLM-driven automation of
              compliance-sensitive ERP workflows, where decisions require an audit trail and
              explainability is a hard requirement. The architecture pairs a flexible LLM decision
              layer with formal interaction structure and runtime guardrails, targeting a system
              that is both adaptive and verifiable.
            </p>
            <p className="text-[0.875rem] text-[#2c2c2c] leading-relaxed mb-5">
              Working with the BPI Challenge 2019 dataset: 251,000+ real SAP Procure to Pay event
              logs, using structural anomalies (invoice before goods receipt, payment block, price
              change after PO) as the primary test bed. Evaluating against an LLM-only baseline and
              a classical agent baseline, targeting the reliability gap customers encounter as they
              adopt Joule and the broader SAP Business AI roadmap.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Agentic AI', 'BDI Agents', 'NeMo Guardrails', 'Process Mining', 'SAP P2P', 'LLMs', 'JaCaMo'].map(t => (
                <span key={t} className="tag-accent">{t}</span>
              ))}
            </div>
          </motion.div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
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
              tags: ['Distributed Systems', 'MQTT', 'W3C WoT', 'MCP', 'FastAPI'],
            },
            {
              title: 'IRI Kickstarter Research Pipeline',
              meta: 'Institute of Responsible Innovation · HSG',
              desc: 'Large-scale data pipeline across 200,000+ Kickstarter projects analysing rhetorical framing patterns. Audio transcription via Whisper Large v3 on GPU, creator biography classification via a two-stage deterministic plus NLI pipeline using DeBERTa and BART. Validated against human-labelled subsets with Cohen\'s kappa.',
              tags: ['Whisper', 'DeBERTa', 'BART', 'NLP', 'GCP', 'Python'],
            },
          ].map(({ title, meta, desc, tags }) => (
            <FadeIn key={title}>
              <motion.div whileHover={{ y: -2 }} className="card h-full flex flex-col">
                <h3 className="font-serif text-[1rem] font-bold text-[#111] mb-1.5 leading-snug">{title}</h3>
                <p className="font-mono text-[0.7rem] text-text-muted mb-3">{meta}</p>
                <p className="text-[0.85rem] text-[#2c2c2c] leading-relaxed flex-1 mb-4">{desc}</p>
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
