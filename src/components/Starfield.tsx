const dots = [
  { x:  7, y:  4, s: 1.5, o: 0.55, d: 3.8 },
  { x: 14, y: 11, s: 1,   o: 0.35, d: 5.2 },
  { x: 22, y:  2, s: 2,   o: 0.65, d: 4.1 },
  { x: 31, y: 14, s: 1,   o: 0.4,  d: 6.7 },
  { x: 38, y:  6, s: 1.5, o: 0.5,  d: 3.4 },
  { x: 47, y:  3, s: 1,   o: 0.3,  d: 7.1 },
  { x: 53, y: 10, s: 2,   o: 0.6,  d: 4.8 },
  { x: 61, y:  5, s: 1,   o: 0.4,  d: 5.5 },
  { x: 69, y: 13, s: 1.5, o: 0.55, d: 3.9 },
  { x: 76, y:  3, s: 1,   o: 0.35, d: 6.2 },
  { x: 84, y:  8, s: 2,   o: 0.7,  d: 4.3 },
  { x: 91, y:  2, s: 1,   o: 0.45, d: 5.8 },
  { x: 96, y: 12, s: 1.5, o: 0.5,  d: 3.6 },
  { x:  3, y: 22, s: 1,   o: 0.3,  d: 7.4 },
  { x: 18, y: 28, s: 1.5, o: 0.45, d: 4.9 },
  { x: 33, y: 24, s: 1,   o: 0.35, d: 6.1 },
  { x: 72, y: 19, s: 2,   o: 0.6,  d: 3.7 },
  { x: 88, y: 26, s: 1,   o: 0.4,  d: 5.3 },
  { x: 94, y: 38, s: 1.5, o: 0.5,  d: 4.6 },
  { x:  5, y: 45, s: 1,   o: 0.3,  d: 6.9 },
  { x: 42, y: 42, s: 1.5, o: 0.4,  d: 5.1 },
  { x: 58, y: 36, s: 1,   o: 0.35, d: 7.2 },
  { x: 79, y: 44, s: 2,   o: 0.55, d: 3.5 },
  { x: 97, y: 55, s: 1,   o: 0.4,  d: 5.7 },
  { x:  8, y: 62, s: 1.5, o: 0.45, d: 4.2 },
  { x: 25, y: 58, s: 1,   o: 0.3,  d: 6.5 },
  { x: 65, y: 61, s: 2,   o: 0.6,  d: 3.8 },
  { x: 82, y: 68, s: 1,   o: 0.35, d: 7.0 },
  { x:  4, y: 78, s: 1.5, o: 0.5,  d: 4.4 },
  { x: 48, y: 74, s: 1,   o: 0.4,  d: 5.9 },
  { x: 91, y: 72, s: 2,   o: 0.65, d: 3.3 },
  { x: 15, y: 85, s: 1,   o: 0.3,  d: 6.8 },
  { x: 35, y: 88, s: 1.5, o: 0.45, d: 4.7 },
  { x: 60, y: 82, s: 1,   o: 0.35, d: 5.6 },
  { x: 77, y: 91, s: 2,   o: 0.55, d: 4.0 },
  { x: 93, y: 86, s: 1,   o: 0.4,  d: 6.3 },
]

export default function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="skybg" />
      <div className="milkyway" />

      {/* Tiny star dots */}
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            borderRadius: '50%',
            background: '#fff',
            ['--o' as string]: d.o,
            ['--d' as string]: `${d.d}s`,
            animation: `twinkle ${d.d}s ease-in-out ${(i * 0.28) % 4}s infinite`,
          }}
        />
      ))}

      {/* Polaris north star — upper right area */}
      <div className="polaris-star" style={{ left: '82%', top: '6%' }} />

      {/* 3 accent 4-pointed stars */}
      {[
        { x: '12%', y: '9%',  s: 7 },
        { x: '54%', y: '4%',  s: 5 },
        { x: '93%', y: '22%', s: 6 },
      ].map((a, i) => (
        <div key={i} style={{
          position: 'absolute', left: a.x, top: a.y,
          color: '#d4af61',
          animation: `twinkle ${3.5 + i}s ease-in-out ${i * 1.2}s infinite`,
          ['--o' as string]: 0.7,
        }}>
          <svg width={a.s} height={a.s} viewBox="0 0 24 24">
            <path d="M12 0.5L13.7 10.3L23.5 12L13.7 13.7L12 23.5L10.3 13.7L0.5 12L10.3 10.3Z" fill="currentColor" />
          </svg>
        </div>
      ))}

      {/* Shooting meteor */}
      <div className="meteor" style={{ left: '15%', top: '8%' }} />
    </div>
  )
}
