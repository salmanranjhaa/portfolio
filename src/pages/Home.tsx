import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Zap, Briefcase, User, FileText, Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const EASE = [0.22, 1, 0.36, 1] as const

const stats = [
  { value: 10,  suffix: '+',  label: 'Enterprise clients served at FBK' },
  { value: 3,   suffix: '',   label: 'Production platforms shipped' },
  { value: 251, suffix: 'K+', label: 'SAP event logs in IMP dataset' },
  { value: 200, suffix: 'K+', label: 'Records analysed at IRI' },
]

const quickLinks = [
  { label: 'Academic Projects', desc: 'IMP, HuggingFace Framework, PITAS and other research-backed builds',         to: '/projects/academic', icon: BookOpen },
  { label: 'Personal Projects', desc: 'Loadedout, GRE Prep Station, Weave, Pitwall and other things built to solve real problems', to: '/projects/personal', icon: Zap },
  { label: 'Experience',        desc: 'FBK Milan, IRI HSG, Teaching Assistant, Bocconi and HSG education',           to: '/experience',        icon: Briefcase },
  { label: 'About',             desc: 'Who I am, what drives me, and why the enterprise plus AI intersection matters', to: '/about',             icon: User },
  { label: 'Articles',          desc: 'Writing on AI, enterprise software, and whatever else demands articulation',   to: '/articles',          icon: FileText },
  { label: 'Get in Touch',      desc: 'salman.ranjha@outlook.com · Based in St. Gallen, Switzerland',                to: 'mailto:salman.ranjha@outlook.com', icon: Mail, external: true },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative px-10 pt-14 pb-10 border-b border-rule overflow-hidden">
        <div className="flex items-start gap-10 max-w-2xl relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            src="/image/profile.png"
            alt="Salman Ranjha"
            className="w-[110px] h-[110px] rounded-full object-cover border border-rule flex-shrink-0"
          />
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}
              className="font-mono text-[0.68rem] text-gold uppercase tracking-widest mb-2"
            >
              salmanranjha.me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.06, ease: EASE }}
              className="font-serif text-[2.1rem] font-bold text-paper leading-tight mb-2"
            >
              Salman Ranjha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12, ease: EASE }}
              className="text-[0.95rem] text-muted mb-4"
            >
              Enterprise delivery experience meets hands-on agentic AI development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
              className="text-[0.875rem] text-papersoft leading-relaxed max-w-[480px]"
            >
              3 years building and shipping enterprise software for life sciences multinationals at FBK
              in Milan, then an MSc at HSG that coincided with AI taking over everything. The timing
              raised questions worth chasing: what does it mean to trust these systems, where do they
              break, and how do you build with them in environments where getting it wrong actually
              costs something? That's what the work has been about.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="px-10 py-10 max-w-3xl">
        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map(s => (
              <div key={s.label} className="bg-night3 border border-rule rounded-lg p-5 hover:border-[rgba(212,175,97,0.25)] transition-colors">
                <div className="font-serif text-[1.65rem] font-bold text-gold leading-none mb-1.5">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[0.68rem] text-muted leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Explore */}
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[1.25rem] font-bold text-paper mb-2 pb-2 border-b border-rule inline-block pr-8">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-6">
            {quickLinks.map(({ label, desc, to, icon: Icon, external }) => (
              external
                ? (
                  <a key={label} href={to}
                    className="bg-night3 border border-rule rounded-lg p-6 flex flex-col gap-2.5 group transition-all duration-200 hover:border-[rgba(212,175,97,0.3)] hover:bg-[#1c2035] cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[0.88rem] text-paper">{label}</span>
                      <ArrowRight size={13} className="text-muted group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-[0.78rem] text-muted leading-relaxed">{desc}</p>
                  </a>
                ) : (
                  <Link key={label} to={to}
                    className="bg-night3 border border-rule rounded-lg p-6 flex flex-col gap-2.5 group transition-all duration-200 hover:border-[rgba(212,175,97,0.3)] hover:bg-[#1c2035]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[0.88rem] text-paper">{label}</span>
                      <ArrowRight size={13} className="text-muted group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-[0.78rem] text-muted leading-relaxed">{desc}</p>
                  </Link>
                )
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
