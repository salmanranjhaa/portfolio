import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="px-10 pt-20 pb-20 max-w-2xl mx-auto">
      <p className="font-mono text-[0.68rem] text-gold uppercase tracking-widest mb-3">404</p>
      <h1 className="font-serif text-[1.9rem] font-bold text-paper leading-tight mb-3">This page doesn't exist.</h1>
      <p className="text-[0.9rem] text-muted mb-8">The link may be old, or the URL mistyped.</p>
      <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-gold border border-[rgba(212,175,97,0.3)] px-3 py-1.5 rounded hover:bg-[rgba(212,175,97,0.08)] transition-colors">
        ← Back home
      </Link>
    </div>
  )
}
