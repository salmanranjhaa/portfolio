import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, User, BookOpen, Zap, Briefcase, FileText, Mail, Github, Linkedin } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const nav = [
  { label: 'Home', to: '/', icon: Home, section: 'Main' },
  { label: 'About', to: '/about', icon: User, section: 'Main' },
  { label: 'Academic Projects', to: '/projects/academic', icon: BookOpen, section: 'Work' },
  { label: 'Personal Projects', to: '/projects/personal', icon: Zap, section: 'Work' },
  { label: 'Experience', to: '/experience', icon: Briefcase, section: 'Work' },
  { label: 'Articles', to: '/articles', icon: FileText, section: 'Writing' },
]

const sections = ['Main', 'Work', 'Writing']

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#111] text-white p-2.5 rounded-lg"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed top-0 left-0 h-full w-[240px] bg-[#111] flex flex-col z-50
          transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Close button mobile */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-[#6a6a6a] hover:text-white md:hidden"
          aria-label="Close menu"
        >
          <X size={16} />
        </button>

        {/* Brand */}
        <div className="px-7 pt-9 pb-7 border-b border-[#1f1f1f]">
          <div className="font-serif text-[1.15rem] text-[#f5f5f5] leading-tight mb-1.5">
            Salman Ranjha
          </div>
          <div className="text-[0.68rem] text-[#6a6a6a] uppercase tracking-widest leading-relaxed">
            MSc CS, Data Science &amp; AI<br />University of St. Gallen
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 overflow-y-auto">
          {sections.map(section => (
            <div key={section}>
              <div className="px-7 pt-3.5 pb-1.5 text-[0.62rem] text-[#3a3a3a] uppercase tracking-[0.1em]">
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
                        ? 'text-accent bg-[rgba(201,76,38,0.06)] before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-accent before:rounded-r'
                        : 'text-[#6a6a6a] hover:text-[#e8e4da] hover:bg-[#1a1a1a]'
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
        <div className="px-7 py-5 border-t border-[#1f1f1f]">
          <div className="flex items-center gap-2 text-[0.68rem] text-[#6a6a6a] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
            Open to opportunities in Switzerland
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:salman.ranjha@outlook.com" className="text-[#6a6a6a] hover:text-accent transition-colors" title="Email">
              <Mail size={14} />
            </a>
            <a href="https://www.linkedin.com/in/salman-ranjha-934019177" target="_blank" rel="noopener noreferrer" className="text-[#6a6a6a] hover:text-accent transition-colors" title="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://github.com/salmanranjhaa" target="_blank" rel="noopener noreferrer" className="text-[#6a6a6a] hover:text-accent transition-colors" title="GitHub">
              <Github size={14} />
            </a>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
