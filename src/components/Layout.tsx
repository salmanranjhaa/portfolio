import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './Sidebar'
import Starfield from './Starfield'

const pageTitles: Record<string, string> = {
  '/':                  'Salman Ranjha — AI & Enterprise Software',
  '/about':             'About — Salman Ranjha',
  '/projects/academic': 'Academic Projects — Salman Ranjha',
  '/projects/personal': 'Personal Projects — Salman Ranjha',
  '/experience':        'Experience — Salman Ranjha',
  '/articles':          'Articles — Salman Ranjha',
}

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.2 } },
}

export default function Layout() {
  const location = useLocation()
  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? 'Salman Ranjha'
  }, [location.pathname])
  return (
    <div className="flex min-h-screen">
      <Starfield />
      <Sidebar />
      <main className="flex-1 md:ml-[240px] min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
