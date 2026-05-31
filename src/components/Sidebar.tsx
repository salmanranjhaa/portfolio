import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, User, BookOpen, Zap, Briefcase, FileText, Mail, Github, Linkedin } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const nav = [
  { label: 'Home',              to: '/',                    icon: Home,     section: 'Main' },
  { label: 'About',             to: '/about',               icon: User,     section: 'Main' },
  { label: 'Academic Projects', to: '/projects/academic',   icon: BookOpen, section: 'Work' },
  { label: 'Personal Projects', to: '/projects/personal',   icon: Zap,      section: 'Work' },
  { label: 'Experience',        to: '/experience',          icon: Briefcase,section: 'Work' },
  { label: 'Articles',          to: '/articles',            icon: FileText, section: 'Writing' },
]

const sections = ['Main', 'Work', 'Writing']

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-night text-paper p-2.5 rounded-lg border border-rule"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`
          fixed top-0 left-0 h-full w-[240px] bg-night flex flex-col z-50
          border-r border-rule transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-muted hover:text-paper md:hidden"
          aria-label="Close menu"
        >
          <X size={16} />
        </button>

        {/* Brand */}
        <div className="px-7 pt-9 pb-7 border-b border-rule">
          <div className="font-serif text-[1.15rem] text-paper leading-tight mb-1.5">
            Salman Ranjha
          </div>
          <div className="text-[0.65rem] text-muted uppercase tracking-widest leading-relaxed font-mono">
            MSc Data Science &amp; AI<br />University of St. Gallen
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 overflow-y-auto">
          {sections.map(section => (
            <div key={section}>
              <div className="px-7 pt-3.5 pb-1.5 text-[0.6rem] text-[#2a2d3e] uppercase tracking-[0.12em] font-mono">
                {section}
              </div>
              {nav
                .filter(n => n.section === section)
                .map(({ label, to, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-2.5 px-7 py-2.5 text-[0.82rem] transition-all duration-150 relative
                      ${isActive
                        ? 'text-gold bg-[rgba(212,175,97,0.06)] before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-gold before:rounded-r'
                        : 'text-muted hover:text-papersoft hover:bg-[#10131e]'
                      }
                    `}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                    {label}
                  </NavLink>
                ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-7 py-5 border-t border-rule">
          <div className="flex items-center gap-2 text-[0.65rem] text-muted mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            Open to opportunities
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:salman.ranjha@outlook.com" className="text-muted hover:text-gold transition-colors" title="Email">
              <Mail size={14} />
            </a>
            <a href="https://www.linkedin.com/in/salman-ranjha-934019177" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors" title="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://github.com/salmanranjhaa" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors" title="GitHub">
              <Github size={14} />
            </a>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
