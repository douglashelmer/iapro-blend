import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const STORAGE_KEY = 'wfd_config'

const ALL_IMAGES = [
  '/images/result-image-1.webp',
  '/images/result-image-2.webp',
  '/images/result-image-3.webp',
  '/images/result-image-4.webp',
  '/images/UQTVDjpNTmOONz0YxNzEMDAPDH8.webp',
  '/images/HikBCU6skVoY2KNgjojuKIXeH4.webp',
  '/images/DroToGdSZcZsGneYv9FaDkk9E2I.webp',
  '/images/DCaalfQRT2fZn5gcYZM8WLyEFqU.webp',
  '/images/showcase-cosmetic-haircare.jpg',
  '/images/showcase-cosmetic-close.jpg',
  '/images/showcase-cosmetic-lifestyle.jpg',
  '/images/showcase-creams-close.jpg',
  '/images/showcase-mask-group-1.jpg',
  '/images/showcase-mask-group-2.jpg',
  '/images/showcase-ai-render.jpg',
  '/images/showcase-product-photo.jpg',
  '/images/showcase-product-luxury.jpg',
  '/images/showcase-fragrance.jpg',
  '/images/showcase-green-bottle.jpg',
  '/images/showcase-beer-hand.jpg',
  '/images/showcase-craft-beer.jpg',
  '/images/showcase-beer-spaten.jpg',
  '/images/showcase-whisky.jpg',
  '/images/carousel-product-1.webp',
  '/images/carousel-product-2.webp',
  '/images/carousel-product-3.webp',
  '/images/carousel-product-4.webp',
  '/images/carousel-product-5.webp',
  '/images/carousel-product-6.webp',
  '/images/carousel-product-7.webp',
  '/images/carousel-product-8.webp',
  '/images/carousel-product-9.webp',
  '/images/carousel-product-10.webp',
  '/images/carousel-product-11.webp',
  '/images/carousel-product-12.webp',
  '/images/carousel-product-13.webp',
  '/images/carousel-product-14.webp',
  '/images/carousel-product-15.webp',
  '/images/carousel-product-16.webp',
]

const DEFAULT_CONFIG = {
  blenderImg: '/images/HikBCU6skVoY2KNgjojuKIXeH4.webp',
  outputs: [
    '/images/result-image-1.webp',
    '/images/result-image-2.webp',
    '/images/result-image-3.webp',
    '/images/result-image-4.webp',
  ],
}

const METRICS = [
  'FIDELIDADE DO RÓTULO E INFORMAÇÕES',
  'FIDELIDADE DA EMBALAGEM E DETALHES',
  'FIDELIDADE DE CORES E TEXTURAS',
]

function ProgressRing({ value = 99 }) {
  const r = 15.9155
  const circ = 2 * Math.PI * r
  const dash = (value / 100) * circ

  return (
    <div className="wfd-ring">
      <svg viewBox="0 0 36 36" className="wfd-ring-svg">
        <circle cx="18" cy="18" r={r} fill="none" stroke="#2a2a2a" strokeWidth="3" />
        <circle
          cx="18" cy="18" r={r} fill="none"
          stroke="var(--orange)" strokeWidth="3"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
      </svg>
      <span className="wfd-ring-text">{value}%</span>
    </div>
  )
}

export default function WorkflowDemo() {
  const windowRef = useReveal()

  const [config, setConfig] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || DEFAULT_CONFIG }
    catch { return DEFAULT_CONFIG }
  })
  const [adminOpen, setAdminOpen] = useState(false)
  const [draft, setDraft] = useState(config)
  const [activeSlot, setActiveSlot] = useState(null)

  const openAdmin = () => { setDraft(config); setActiveSlot(null); setAdminOpen(true) }

  const pickImage = (url) => {
    if (activeSlot === 'blender') {
      setDraft(d => ({ ...d, blenderImg: url }))
    } else if (typeof activeSlot === 'number') {
      setDraft(d => {
        const outputs = [...d.outputs]
        outputs[activeSlot] = url
        return { ...d, outputs }
      })
    }
  }

  const save = () => {
    setConfig(draft)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    setAdminOpen(false)
  }

  const currentImg = activeSlot === 'blender'
    ? draft.blenderImg
    : typeof activeSlot === 'number' ? draft.outputs[activeSlot] : null

  return (
    <section className="sec wfd-sec">

      <div className="wfd-window reveal" ref={windowRef}>

        {/* ── Title bar ── */}
        <div className="wfd-titlebar">
          <div className="wfd-dots">
            <span className="wfd-dot" style={{ background: '#FF5F57' }} />
            <span className="wfd-dot" style={{ background: '#FFBD2E' }} />
            <span className="wfd-dot" style={{ background: '#28C840' }} />
          </div>
          <div className="wfd-wintitle">3dpro_workflow_v2.blend</div>
          <div className="wfd-titlebar-end" />
        </div>

        {/* ── Body ── */}
        <div className="wfd-body">

          {/* Left: Blender viewport */}
          <div className="wfd-left">
            <div className="wfd-viewport-label">Blender 4.5.0</div>
            <img src={config.blenderImg} alt="Blender 3D" className="wfd-blender-img" />
          </div>

          {/* Mid: IA Processing */}
          <div className="wfd-mid">
            <div className="wfd-panel-header">
              <span className="wfd-panel-icon">⚡</span>
              PROCESSAMENTO IA
            </div>
            {METRICS.map((m, i) => (
              <div className="wfd-metric-card" key={i}>
                <span className="wfd-metric-label">{m}</span>
                <ProgressRing value={99} />
              </div>
            ))}
            <div className="wfd-gerando-card">
              <div className="wfd-gerando-title">GERANDO VARIAÇÕES</div>
              <div className="wfd-gerando-sub">
                IA ESTÁ INTERPRETANDO AS INFORMAÇÕES DOS PRODUTOS E GERANDO...
              </div>
            </div>
          </div>

          {/* Right: Output grid */}
          <div className="wfd-right">
            <div className="wfd-panel-header">
              <span className="wfd-panel-icon">⊞</span>
              SAÍDA: VARIAÇÕES ILIMITADAS
            </div>
            <div className="wfd-output-grid">
              {config.outputs.map((src, i) => (
                <img key={i} src={src} alt={`Variação ${i + 1}`} className="wfd-output-img" />
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="wfd-bottombar">
          <span className="wfd-render-ok">✓ RENDER COMPLETE</span>
          <span className="wfd-render-time">0.8s</span>
        </div>

      </div>

      {/* Admin trigger */}
      <button className="wfd-admin-btn" onClick={openAdmin} title="Editar imagens da seção">
        ⚙ Editar imagens
      </button>

      {/* ── Admin modal ── */}
      {adminOpen && (
        <div className="wfd-overlay" onClick={e => e.target === e.currentTarget && setAdminOpen(false)}>
          <div className="wfd-modal">

            <div className="wfd-modal-header">
              <span>Editar imagens do WorkflowDemo</span>
              <button className="wfd-modal-close" onClick={() => setAdminOpen(false)}>✕</button>
            </div>

            {/* Slot row */}
            <div className="wfd-slots">
              <div
                className={`wfd-slot ${activeSlot === 'blender' ? 'active' : ''}`}
                onClick={() => setActiveSlot('blender')}
              >
                <img src={draft.blenderImg} alt="" />
                <span>Painel Blender</span>
              </div>
              {draft.outputs.map((src, i) => (
                <div
                  key={i}
                  className={`wfd-slot ${activeSlot === i ? 'active' : ''}`}
                  onClick={() => setActiveSlot(i)}
                >
                  <img src={src} alt="" />
                  <span>Variação {i + 1}</span>
                </div>
              ))}
            </div>

            {/* Picker grid */}
            {activeSlot !== null && (
              <div className="wfd-picker">
                <p className="wfd-picker-label">
                  Selecionando: <strong>{activeSlot === 'blender' ? 'Painel Blender' : `Variação ${activeSlot + 1}`}</strong>
                  {' — clique na imagem desejada'}
                </p>
                <div className="wfd-picker-grid">
                  {ALL_IMAGES.map(url => (
                    <img
                      key={url}
                      src={url}
                      alt=""
                      className={`wfd-picker-img ${currentImg === url ? 'selected' : ''}`}
                      onClick={() => pickImage(url)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="wfd-modal-footer">
              <button className="wfd-btn-cancel" onClick={() => setAdminOpen(false)}>Cancelar</button>
              <button className="wfd-btn-save" onClick={save}>Salvar</button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
