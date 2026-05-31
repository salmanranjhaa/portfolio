import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const API = '/api'

interface Article { id: string; title: string; body: string; published_at: string; reading_time?: number }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Very simple markdown renderer for the reader
function renderMarkdown(md: string) {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-[1.05rem] font-bold mt-7 mb-3 text-[#111]">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-[1.3rem] font-bold mt-9 mb-4 text-[#111]">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="font-serif text-[1.6rem] font-bold mt-9 mb-5 text-[#111]">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="font-mono text-[0.85em] bg-[#ede9e0] px-1.5 py-0.5 rounded">$1</code>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-[3px] border-accent pl-5 py-2 bg-[rgba(201,76,38,0.05)] rounded-r my-5 italic text-[#111]">$1</blockquote>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent underline underline-offset-2" target="_blank" rel="noopener">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-[0.93rem] leading-relaxed mb-1">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
}

export default function ArticleReader() {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return
    fetch(`${API}/articles/${id}`)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(setArticle)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="px-10 py-14 text-text-muted text-sm">Loading&hellip;</div>
  if (error || !article) return (
    <div className="px-10 py-14">
      <Link to="/articles" className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent mb-6 transition-colors">
        <ArrowLeft size={14} /> All articles
      </Link>
      <p className="text-text-muted">Article not found.</p>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
      className="px-10 py-12 max-w-[680px]">
      <Link to="/articles" className="flex items-center gap-1.5 text-[0.8rem] text-text-muted hover:text-accent mb-8 transition-colors">
        <ArrowLeft size={13} /> All articles
      </Link>
      <h1 className="font-serif text-[1.9rem] font-bold text-[#111] leading-tight mb-4">{article.title}</h1>
      <div className="flex items-center gap-3 font-mono text-[0.7rem] text-text-muted mb-10 border-b border-border pb-8">
        <span className="w-8 h-0.5 bg-accent" />
        {formatDate(article.published_at)}
        {article.reading_time && <span>&middot; {article.reading_time} min read</span>}
      </div>
      <div
        className="text-[0.94rem] text-[#2c2c2c] leading-[1.85]"
        dangerouslySetInnerHTML={{ __html: `<p class="mb-4 leading-relaxed">${renderMarkdown(article.body)}</p>` }}
      />
    </motion.div>
  )
}
