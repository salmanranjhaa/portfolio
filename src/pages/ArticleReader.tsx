import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

interface Article { id: string; title: string; body: string; published_at: string; reading_time?: number }

const API_BASE = window.location.origin.includes('localhost') ? 'http://localhost:8001' : '/api'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function renderMd(md: string): string {
  return md
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-8"><img src="$2" alt="$1" class="w-full rounded-lg border border-rule object-cover max-h-80" /><figcaption class="text-center font-mono text-[0.65rem] text-muted mt-2">$1</figcaption></figure>')
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-[1.05rem] font-bold mt-7 mb-3 text-paper">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-[1.3rem] font-bold mt-9 mb-4 text-paper">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="font-serif text-[1.6rem] font-bold mt-9 mb-5 text-paper">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-paper">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="font-mono text-[0.85em] bg-[#1c2035] text-gold px-1.5 py-0.5 rounded">$1</code>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-[2px] border-gold pl-5 py-2 bg-[rgba(212,175,97,0.05)] rounded-r my-5 italic text-papersoft">$1</blockquote>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold underline underline-offset-2 hover:text-goldsoft" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-papersoft">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-papersoft">$2</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
}

export default function ArticleReader() {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return
    fetch(`${API_BASE}/articles/${id}`)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(setArticle)
      .catch(() => setError(true))
  }, [id])

  return (
    <div className="px-10 pt-14 pb-20 max-w-2xl">
      <Link to="/articles" className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-muted hover:text-gold transition-colors mb-10">
        ← All articles
      </Link>
      {error && <p className="text-muted text-sm">Could not load this article.</p>}
      {article && (
        <article>
          <h1 className="font-serif text-[1.9rem] font-bold text-paper leading-tight mb-4">{article.title}</h1>
          <div className="font-mono text-[0.7rem] text-muted mb-10">
            {formatDate(article.published_at)}{article.reading_time ? ` · ${article.reading_time} min read` : ''}
          </div>
          <div
            className="text-[0.94rem] text-papersoft leading-[1.85] space-y-4"
            dangerouslySetInnerHTML={{ __html: `<p class="mb-4">${renderMd(article.body)}</p>` }}
          />
        </article>
      )}
    </div>
  )
}
