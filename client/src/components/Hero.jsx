import Carousel from './Carousel'
import Ticker from './Ticker'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-canvas-wrap">

        {/* Vídeo de fundo — desktop */}
        <video
          id="hero-canvas"
          className="hero-video-desk"
          src="/images/video-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* Vídeo de fundo — mobile */}
        <video
          id="hero-canvas-mob"
          className="hero-video-mob"
          src="/images/banner-logos-rodando.webm"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="hero-overlay">

          {/* Logo */}
          <div className="hero-logo" aria-label="Formação IAPRO.BLEND">
            <span className="hero-logo-formacao">FORMAÇÃO</span>
            <div className="hero-logo-text">
              <div className="hero-logo-line1">
                <span className="h-ia">IA</span><span className="h-pro">PRO</span><span className="h-dot">.</span>
              </div>
              <div className="hero-logo-blend">BLEND</div>
            </div>
          </div>

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
      <Carousel />
      <Ticker />
    </section>
  )
}
