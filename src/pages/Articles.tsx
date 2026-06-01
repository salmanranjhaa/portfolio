import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'

interface Article { id: string; title: string; excerpt?: string; published_at: string; reading_time?: number }

const API_BASE = window.location.origin.includes('localhost') ? 'http://localhost:8001' : '/api'

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_BASE}/articles`)
      .then(r => r.json())
      .then(setArticles)
      .catch(() => setArticles([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <PageHeader
        eyebrow="Articles"
        title="Things worth writing down."
        subtitle="On AI, enterprise software, and whatever else demands articulation."
      />
      <div className="px-10 py-10 max-w-2xl">
        {loading && <p className="text-muted text-sm">Loading...</p>}
        {!loading && articles.length === 0 && (
          <p className="text-muted text-sm">No articles yet. Check back soon.</p>
        )}
        <div className="space-y-3">
          {articles.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.05}>
              <Link to={`/articles/${a.id}`}
                className="group flex items-start justify-between gap-6 bg-night3 border border-rule rounded-lg px-6 py-5 hover:border-[rgba(212,175,97,0.3)] hover:bg-[#1c2035] transition-all duration-200">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[0.9rem] text-paper mb-1 group-hover:text-gold transition-colors">{a.title}</div>
                  {a.excerpt && <p className="text-[0.78rem] text-muted leading-relaxed line-clamp-2">{a.excerpt}</p>}
                  {a.reading_time ? (
                    <div className="font-mono text-[0.65rem] text-muted mt-2">{a.reading_time} min read</div>
                  ) : null}
                </div>
                <ArrowRight size={14} className="text-muted group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
