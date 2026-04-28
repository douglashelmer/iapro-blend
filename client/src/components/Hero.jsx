import { useRef, useEffect, lazy, Suspense } from 'react'

const Carousel = lazy(() => import('./Carousel'))
const Ticker   = lazy(() => import('./Ticker'))

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    // Só carrega o vídeo em desktop — evita download de 7MB no mobile
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.src = '/images/video-hero.mp4'
      videoRef.current.load()
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-canvas-wrap">

        {/* Vídeo de fundo — desktop (src definido via JS para não baixar no mobile) */}
        <video
          ref={videoRef}
          id="hero-canvas"
          className="hero-video-desk"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />

        {/* Imagem de fundo — mobile */}
        <img
          id="hero-canvas-mob"
          className="hero-video-mob"
          src="/images/imagem-mobi-2.webp"
          aria-hidden="true"
          fetchPriority="high"
          alt=""
        />

        <div className="hero-overlay">

          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">🪐</span>
            O Futuro da criação já começou
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="orange">3D + NANO BANANA + CLAUDE CODE:</span> O NOVO FLUXO PARA CRIAR{' '}
            <span className="orange">PROJETOS 3D DE 15K</span> EM MINUTOS SEM GASTAR 1 REAL
          </h1>

          {/* Sub */}
          <p className="hero-sub">DO ZERO AO PROFISSIONAL – USANDO FERRAMENTAS 100% GRATUITAS</p>

          {/* CTA */}
          <div className="hero-btns">
            <a href="#preco" className="hero-cta-btn">GARANTIR MINHA VAGA AGORA <span className="hero-cta-icon">✦</span></a>
          </div>

        </div>

        {/* Stats */}
        <div className="hero-stats" role="list" aria-label="Métricas do curso">
          {[
            { num: '90%',  label: 'Menos Tempo' },
            { num: '10X',  label: 'Mais Produtivo' },
            { num: '100%', label: 'Consistente' },
          ].map(s => (
            <div className="hero-stat" key={s.label} role="listitem">
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        <Carousel />
        <Ticker />
      </Suspense>
    </section>
  )
}
