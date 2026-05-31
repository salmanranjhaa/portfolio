import { useState, useEffect } from 'react'

const API_BASE = window.location.origin.includes('localhost') ? 'http://localhost:8001' : '/api'

interface Article { id: string; title: string; excerpt?: string; body: string; published_at: string }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('admin_token') || '')
  const [pw, setPw] = useState('')
  const [loginErr, setLoginErr] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [editingId, setEditingId] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null)

  const inputCls = "w-full border border-rule rounded-lg px-3.5 py-2.5 text-sm text-papersoft bg-night3 outline-none focus:border-gold transition-colors font-sans placeholder:text-muted"

  useEffect(() => { if (token) loadList() }, [token])

  async function login() {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: pw }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Wrong password')
      sessionStorage.setItem('admin_token', data.access_token)
      setToken(data.access_token)
    } catch (e: any) { setLoginErr(e.message) }
  }

  async function loadList() {
    const res = await fetch(`${API_BASE}/articles`, { headers: { Authorization: `Bearer ${token}` } })
    setArticles(await res.json())
  }

  async function save() {
    if (!title || !body) { setStatus({ msg: 'Title and body are required.', ok: false }); return }
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `${API_BASE}/articles/${editingId}` : `${API_BASE}/articles`
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ title, excerpt, body }) })
      if (!res.ok) throw new Error('Save failed')
      setStatus({ msg: editingId ? 'Article updated.' : 'Published.', ok: true })
      clearForm(); loadList()
    } catch { setStatus({ msg: 'Save failed.', ok: false }) }
    setTimeout(() => setStatus(null), 4000)
  }

  async function del(id: string) {
    if (!confirm('Delete this article?')) return
    await fetch(`${API_BASE}/articles/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
    loadList()
  }

  async function startEdit(id: string) {
    const res = await fetch(`${API_BASE}/articles/${id}`)
    const a = await res.json()
    setEditingId(a.id); setTitle(a.title); setExcerpt(a.excerpt || ''); setBody(a.body)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function clearForm() { setEditingId(''); setTitle(''); setExcerpt(''); setBody('') }

  if (!token) return (
    <div className="min-h-screen bg-night flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-night3 border border-rule rounded-xl p-8">
        <h1 className="font-serif text-[1.4rem] font-bold text-paper mb-6">Admin</h1>
        {loginErr && <p className="text-burg text-sm mb-4">{loginErr}</p>}
        <div className="mb-4">
          <label className="block text-[0.75rem] font-mono text-muted uppercase tracking-wide mb-2">Password</label>
          <input className={inputCls} type="password" value={pw} onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()} placeholder="Admin password" autoFocus />
        </div>
        <button onClick={login} className="w-full bg-gold text-night font-medium text-sm py-2.5 rounded-lg hover:bg-goldsoft transition-colors">
          Sign in
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-night">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-10 pb-5 border-b border-rule">
          <span className="font-serif text-[1.1rem] text-paper">Admin</span>
          <a href="/articles.html" className="text-muted text-sm hover:text-gold transition-colors font-mono">← Articles</a>
        </div>

        {status && (
          <div className={`mb-6 text-sm px-4 py-3 rounded-lg border ${status.ok ? 'text-gold border-[rgba(212,175,97,0.3)] bg-[rgba(212,175,97,0.08)]' : 'text-burg border-[rgba(189,76,95,0.3)] bg-[rgba(189,76,95,0.08)]'}`}>
            {status.msg}
          </div>
        )}

        {/* Editor */}
        <div className="bg-night3 border border-rule rounded-xl p-7 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-[1.05rem] text-paper">{editingId ? 'Edit article' : 'New article'}</h2>
            <div className="flex gap-2">
              <button onClick={clearForm} className="text-sm text-muted border border-rule px-3.5 py-1.5 rounded-lg hover:text-papersoft transition-colors font-mono">Clear</button>
              <button onClick={save} className="text-sm bg-gold text-night px-4 py-1.5 rounded-lg hover:bg-goldsoft transition-colors font-medium">{editingId ? 'Save changes' : 'Publish'}</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[0.72rem] font-mono text-muted uppercase tracking-wide mb-1.5">Title</label>
              <input className={inputCls} value={title} onChange={e => setTitle(e.target.value)} placeholder="Article title" />
            </div>
            <div>
              <label className="block text-[0.72rem] font-mono text-muted uppercase tracking-wide mb-1.5">Excerpt (optional)</label>
              <input className={inputCls} value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Short description" />
            </div>
          </div>
          <div>
            <label className="block text-[0.72rem] font-mono text-muted uppercase tracking-wide mb-1.5">Body (Markdown)</label>
            <textarea className={`${inputCls} min-h-[220px] resize-y`} value={body} onChange={e => setBody(e.target.value)} placeholder="Write in Markdown..." />
          </div>
        </div>

        {/* List */}
        <h2 className="font-serif text-[1rem] text-paper mb-4">Published</h2>
        {articles.length === 0 && <p className="text-muted text-sm">No articles yet.</p>}
        <div className="space-y-2">
          {articles.map(a => (
            <div key={a.id} className="flex items-center justify-between gap-4 bg-night3 border border-rule rounded-lg px-5 py-4">
              <div>
                <div className="text-[0.88rem] text-paper font-medium">{a.title}</div>
                <div className="font-mono text-[0.65rem] text-muted mt-0.5">{formatDate(a.published_at)}</div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => startEdit(a.id)} className="text-[0.75rem] text-muted border border-rule px-3 py-1 rounded hover:text-papersoft hover:border-[rgba(212,175,97,0.3)] transition-colors font-mono">Edit</button>
                <button onClick={() => del(a.id)} className="text-[0.75rem] text-burg border border-[rgba(189,76,95,0.3)] px-3 py-1 rounded hover:bg-[rgba(189,76,95,0.08)] transition-colors font-mono">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
