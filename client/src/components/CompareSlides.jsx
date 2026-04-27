import { useRef, useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

// ── Substitua os pares antes/depois aqui ──
const SLIDES = [
  { before: '/images/01antes.webp', after: '/images/01depois.webp' },
  { before: '/images/carousel-product-3.webp', after: '/images/roxo2.webp' },
  { before: '/images/carousel-product-5.webp', after: '/images/roxo3.webp' },
  { before: '/images/carousel-product-7.webp', after: '/images/roxo4.webp' },
  { before: '/images/carousel-product-9.webp', after: '/images/result-image-1.webp' },
  { before: '/images/carousel-product-11.webp', after: '/images/result-image-2.webp' },
]

function Slide({ before, after }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPos(x)
  }, [])

  useEffect(() => {
    const onMove = (e) => { if (dragging.current) update(e.clientX) }
    const onUp   = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [update])

  const onTouchMove = (e) => {
    e.preventDefault()
    update(e.touches[0].clientX)
  }

  return (
    <div
      className="cs-slide"
      ref={containerRef}
      onTouchMove={onTouchMove}
      onTouchStart={() => { dragging.current = true }}
      onTouchEnd={() => { dragging.current = false }}
    >
      {/* After — full width underneath */}
      <img src={after} alt="depois" className="cs-img" draggable={false} />

      {/* Before — clipped on left */}
      <div className="cs-before-wrap" style={{ width: `${pos}%` }}>
        <img src={before} alt="antes" className="cs-img cs-before-img" draggable={false} />
        <div className="cs-label cs-label-before">ANTES</div>
      </div>
      <div className="cs-label cs-label-after">DEPOIS</div>

      {/* Divider */}
      <div
        className="cs-divider"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => { e.preventDefault(); dragging.current = true }}
        onTouchStart={(e) => { e.stopPropagation(); dragging.current = true }}
      >
        <div className="cs-handle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 10H3M3 10L5 8M3 10L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 10H17M17 10L15 8M17 10L15 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function CompareSlides() {
  const titleRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section className="sec csl-sec">
      <div className="sec-eyebrow reveal" ref={titleRef}>O fluxo em ação</div>
      <h2 className="sec-title reveal" ref={titleRef}>Do modelo 3D<br />à imagem final.</h2>
      <div className="csl-grid reveal" ref={gridRef}>
        {SLIDES.map((s, i) => (
          <Slide key={i} before={s.before} after={s.after} />
        ))}
      </div>
    </section>
  )
}
