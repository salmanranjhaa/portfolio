import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const API = '/api'

interface Article { id: string; title: string; excerpt: string; published_at: string }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${API}/articles`)
      .then(r => r.json())
      .then(setArticles)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <PageHeader eyebrow="Articles" title="Writing." subtitle="On AI, enterprise software, systems, and whatever else is worth articulating properly." />
      <div className="px-10 py-10 max-w-2xl">
        {loading && <p className="text-text-muted text-sm">Loading articles&hellip;</p>}
        {error && <p className="text-text-muted text-sm">Could not load articles. Please try again later.</p>}
        {!loading && !error && articles.length === 0 && (
          <p className="text-text-muted text-sm text-center py-16">Nothing published yet. Check back soon.</p>
        )}
        {!loading && !error && articles.length > 0 && (
          <div className="flex flex-col gap-4">
            {articles.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/articles/${a.id}`}
                  className="block bg-white border border-border rounded-lg px-7 py-6 group transition-all duration-200 hover:border-accent hover:shadow-sm">
                  <div className="font-mono text-[0.68rem] text-text-muted mb-2">{formatDate(a.published_at)}</div>
                  <h2 className="font-serif text-[1.1rem] font-bold text-[#111] mb-2 leading-snug group-hover:text-accent transition-colors">{a.title}</h2>
                  {a.excerpt && <p className="text-[0.84rem] text-text-muted leading-relaxed mb-3">{a.excerpt}</p>}
                  <span className="flex items-center gap-1.5 text-[0.75rem] font-mono text-accent">
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
