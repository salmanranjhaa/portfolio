import { useState, useEffect } from 'react'
import { ArrowLeft, Trash2, Edit2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const API = '/api'

interface Article { id: string; title: string; excerpt: string; body: string; published_at: string }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Admin() {
  const [token, setToken] = useState(sessionStorage.getItem('admin_token') || '')
  const [pw, setPw] = useState('')
  const [loginErr, setLoginErr] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [editingId, setEditingId] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [statusMsg, setStatusMsg] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error'>('success')

  const authed = !!token

  useEffect(() => { if (authed) loadArticles() }, [authed])

  async function login() {
    setLoginErr('')
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Wrong password')
      sessionStorage.setItem('admin_token', data.access_token)
      setToken(data.access_token)
    } catch (e: any) { setLoginErr(e.message) }
  }

  async function loadArticles() {
    try {
      const res = await fetch(`${API}/articles`, { headers: { Authorization: `Bearer ${token}` } })
      setArticles(await res.json())
    } catch {}
  }

  async function save() {
    if (!title.trim() || !body.trim()) { showStatus('Title and body are required.', 'error'); return }
    const url = editingId ? `${API}/articles/${editingId}` : `${API}/articles`
    const method = editingId ? 'PUT' : 'POST'
    try {
      const res = await fetch(url, {
        method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, excerpt, body }),
      })
      if (!res.ok) { if (res.status === 401) { sessionStorage.removeItem('admin_token'); setToken('') } throw new Error() }
      showStatus(editingId ? 'Article updated.' : 'Article published.', 'success')
      clearForm(); loadArticles()
    } catch { showStatus('Save failed.', 'error') }
  }

  async function editArticle(a: Article) {
    setEditingId(a.id); setTitle(a.title); setExcerpt(a.excerpt || ''); setBody(a.body)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function deleteArticle(id: string) {
    if (!confirm('Delete this article?')) return
    await fetch(`${API}/articles/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
    loadArticles()
  }

  function clearForm() { setEditingId(''); setTitle(''); setExcerpt(''); setBody('') }
  function showStatus(msg: string, type: 'success' | 'error') { setStatusMsg(msg); setStatusType(type); setTimeout(() => setStatusMsg(''), 4000) }

  const inputCls = "w-full border border-[#e8e4da] rounded-lg px-3.5 py-2.5 text-sm text-[#2c2c2c] bg-white outline-none focus:border-accent transition-colors font-sans"

  if (!authed) return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white border border-border rounded-xl p-8">
        <Link to="/" className="flex items-center gap-1.5 text-[0.78rem] text-text-muted hover:text-accent mb-6 transition-colors">
          <ArrowLeft size={13} /> Back to site
        </Link>
        <h1 className="font-serif text-[1.4rem] font-bold text-[#111] mb-6">Admin</h1>
        {loginErr && <div className="text-[0.8rem] bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-2.5 mb-4">{loginErr}</div>}
        <label className="block text-[0.75rem] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Password</label>
        <input className={inputCls} type="password" value={pw} onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()} placeholder="Enter admin password" />
        <button onClick={login} className="mt-4 w-full bg-accent text-white font-semibold text-sm py-2.5 rounded-lg hover:opacity-90 transition-opacity">
          Sign in
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
          <h1 className="font-serif text-[1.3rem] font-bold text-[#111]">Admin</h1>
          <Link to="/articles" className="text-[0.78rem] text-text-muted hover:text-accent transition-colors">Back to articles</Link>
        </div>

        {statusMsg && (
          <div className={`text-[0.8rem] px-4 py-2.5 rounded-lg mb-5 ${statusType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {statusMsg}
          </div>
        )}

        <div className="bg-white border border-border rounded-xl p-7 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-[1.05rem] font-bold text-[#111]">{editingId ? 'Edit article' : 'New article'}</h2>
            <div className="flex gap-2">
              {editingId && <button onClick={clearForm} className="text-[0.8rem] text-text-muted border border-border px-3.5 py-1.5 rounded-lg hover:border-[#c8bfb0] transition-colors">Cancel</button>}
              <button onClick={save} className="bg-accent text-white text-[0.8rem] font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity">
                {editingId ? 'Save changes' : 'Publish'}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[0.72rem] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Title</label>
              <input className={inputCls} value={title} onChange={e => setTitle(e.target.value)} placeholder="Article title" />
            </div>
            <div>
              <label className="block text-[0.72rem] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Excerpt (optional)</label>
              <input className={inputCls} value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Short description shown in the list" />
            </div>
          </div>
          <div>
            <label className="block text-[0.72rem] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Body (Markdown)</label>
            <textarea className={`${inputCls} font-mono text-[0.82rem] leading-relaxed resize-y min-h-[380px]`}
              value={body} onChange={e => setBody(e.target.value)} placeholder="Write in Markdown." />
          </div>
        </div>

        <h2 className="font-serif text-[1.05rem] font-bold text-[#111] mb-4">Published</h2>
        {articles.length === 0
          ? <p className="text-[0.84rem] text-text-muted">No articles yet.</p>
          : articles.map(a => (
            <div key={a.id} className="flex items-center justify-between gap-4 bg-white border border-border rounded-lg px-5 py-4 mb-2.5">
              <div>
                <div className="font-semibold text-[0.875rem] text-[#111]">{a.title}</div>
                <div className="font-mono text-[0.68rem] text-text-muted mt-0.5">{formatDate(a.published_at)}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => editArticle(a)}
                  className="flex items-center gap-1.5 text-[0.78rem] text-text-muted border border-border px-3 py-1.5 rounded-lg hover:border-[#c8bfb0] transition-colors">
                  <Edit2 size={12} /> Edit
                </button>
                <button onClick={() => deleteArticle(a.id)}
                  className="flex items-center gap-1.5 text-[0.78rem] text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 size={12} /> Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
