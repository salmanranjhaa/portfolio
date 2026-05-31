import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Zap, Briefcase, User, FileText, Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const stats = [
  { value: 10, suffix: '+', label: 'Enterprise clients served at FBK' },
  { value: 3, suffix: '', label: 'Production platforms shipped' },
  { value: 251, suffix: 'K+', label: 'SAP event logs in IMP dataset' },
  { value: 200, suffix: 'K+', label: 'Records analysed at IRI' },
]

const quickLinks = [
  { label: 'Academic Projects', desc: 'IMP, HuggingFace Framework, PITAS and other research-backed builds', to: '/projects/academic', icon: BookOpen },
  { label: 'Personal Projects', desc: 'Loadedout, Weave, Pitwall and other things built for the sake of building', to: '/projects/personal', icon: Zap },
  { label: 'Experience', desc: 'FBK Milan, IRI HSG, Teaching Assistant, Bocconi and HSG education', to: '/experience', icon: Briefcase },
  { label: 'About', desc: 'Who I am, what drives me, and why the enterprise plus AI intersection matters', to: '/about', icon: User },
  { label: 'Articles', desc: 'Writing on AI, enterprise software, and whatever else is worth articulating', to: '/articles', icon: FileText },
  { label: 'Get in Touch', desc: 'salman.ranjha@outlook.com · Based in St. Gallen, Switzerland', to: 'mailto:salman.ranjha@outlook.com', icon: Mail, external: true },
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
      <div className="px-10 pt-14 pb-10 border-b border-border bg-white">
        <div className="flex items-start gap-10 max-w-2xl">
          <motion.img
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src="/image/profile.png"
            alt="Salman Ranjha"
            className="w-[110px] h-[110px] rounded-full object-cover border-2 border-border flex-shrink-0 shadow-sm"
          />
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className="font-mono text-[0.7rem] text-accent uppercase tracking-widest mb-2"
            >
              salmanranjha.me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}
              className="font-serif text-[2rem] font-bold text-[#111] leading-tight mb-2"
            >
              Salman Ranjha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}
              className="text-[0.95rem] text-text-muted mb-4"
            >
              Enterprise delivery experience meets hands-on agentic AI development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }}
              className="text-[0.875rem] text-[#2c2c2c] leading-relaxed max-w-[480px]"
            >
              Two and a half years building enterprise software for J&amp;J, Abbott and Stryker at FBK
              in Milan, then an MSc at HSG where the focus shifted to building agentic AI systems.
              The Integrated Master's Project brings both together: trustworthy agentic architectures
              for regulated SAP workflows. That intersection is where the interesting problems live.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="px-10 py-10 max-w-3xl">
        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map(s => (
              <div key={s.label} className="bg-white border border-border rounded-lg p-5">
                <div className="font-serif text-[1.65rem] font-bold text-accent leading-none mb-1.5">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[0.7rem] text-text-muted leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Explore */}
        <FadeIn delay={0.1}>
          <h2 className="section-title mb-8">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {quickLinks.map(({ label, desc, to, icon: Icon, external }) => (
              external
                ? (
                  <a key={label} href={to}
                    className="bg-white border border-border rounded-lg p-6 flex flex-col gap-2.5 group transition-all duration-200 hover:border-accent hover:shadow-sm cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[0.9rem] text-[#111]">{label}</span>
                      <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-[0.8rem] text-text-muted leading-relaxed">{desc}</p>
                  </a>
                ) : (
                  <Link key={label} to={to}
                    className="bg-white border border-border rounded-lg p-6 flex flex-col gap-2.5 group transition-all duration-200 hover:border-accent hover:shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[0.9rem] text-[#111]">{label}</span>
                      <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-[0.8rem] text-text-muted leading-relaxed">{desc}</p>
                  </Link>
                )
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
