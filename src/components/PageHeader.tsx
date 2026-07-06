interface Props { eyebrow?: string; title: string; subtitle?: string; width?: string }

export default function PageHeader({ eyebrow, title, subtitle, width = 'max-w-3xl' }: Props) {
  return (
    <div className="px-6 md:px-10 pt-14 pb-9 border-b border-rule">
      <div className={`${width} mx-auto`}>
        {eyebrow && (
          <p className="font-mono text-[0.68rem] text-gold uppercase tracking-widest mb-3">{eyebrow}</p>
        )}
        <h1 className="font-serif text-[2.1rem] font-bold text-paper leading-tight mb-3">{title}</h1>
        {subtitle && <p className="text-[0.95rem] text-muted max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  )
}
