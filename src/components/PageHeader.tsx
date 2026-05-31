import { motion } from 'framer-motion'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="px-10 pt-14 pb-9 border-b border-border bg-white">
      <motion.p
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        className="font-mono text-[0.7rem] text-accent uppercase tracking-widest mb-2.5"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}
        className="font-serif text-[2.1rem] font-bold text-[#111] leading-tight mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}
          className="text-[0.92rem] text-text-muted max-w-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
