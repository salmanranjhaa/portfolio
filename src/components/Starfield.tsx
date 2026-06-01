import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const stars = [
  { x: '12%',  y: '8%',  s: 6,  d: 3.8, o: 0.85 },
  { x: '28%',  y: '3%',  s: 3,  d: 5.2, o: 0.5  },
  { x: '45%',  y: '6%',  s: 4,  d: 4.1, o: 0.65 },
  { x: '62%',  y: '2%',  s: 5,  d: 6.3, o: 0.75 },
  { x: '78%',  y: '9%',  s: 7,  d: 3.4, o: 0.9  },
  { x: '91%',  y: '5%',  s: 4,  d: 5.7, o: 0.6  },
  { x: '5%',   y: '22%', s: 3,  d: 4.8, o: 0.45 },
  { x: '88%',  y: '28%', s: 5,  d: 3.9, o: 0.7  },
  { x: '95%',  y: '45%', s: 3,  d: 6.1, o: 0.5  },
  { x: '3%',   y: '55%', s: 4,  d: 4.4, o: 0.55 },
  { x: '92%',  y: '62%', s: 6,  d: 3.2, o: 0.8  },
  { x: '7%',   y: '78%', s: 3,  d: 5.5, o: 0.4  },
  { x: '85%',  y: '82%', s: 5,  d: 4.7, o: 0.65 },
  { x: '18%',  y: '92%', s: 4,  d: 6.8, o: 0.5  },
  { x: '55%',  y: '88%', s: 3,  d: 3.6, o: 0.45 },
]

function StarMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0.5L13.7 10.3L23.5 12L13.7 13.7L12 23.5L10.3 13.7L0.5 12L10.3 10.3Z" fill="currentColor" />
    </svg>
  )
}

export default function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-gold"
          style={{ left: s.x, top: s.y, opacity: s.o * 0.3 }}
          animate={{ opacity: [s.o * 0.25, s.o, s.o * 0.25] }}
          transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
        >
          <StarMark size={s.s} />
        </motion.div>
      ))}
    </div>
  )
}
