import { useReveal } from '../hooks/useReveal'

// ── Para trocar as imagens, peça ao assistente aqui no chat ──
const CONFIG = {
  blenderImg: '/images/HikBCU6skVoY2KNgjojuKIXeH4.webp', // Painel Blender (viewport)
  outputs: [
    '/images/result-image-1.webp', // Variação 1 (canto superior esquerdo)
    '/images/result-image-2.webp', // Variação 2 (canto superior direito)
    '/images/result-image-3.webp', // Variação 3 (canto inferior esquerdo)
    '/images/result-image-4.webp', // Variação 4 (canto inferior direito)
  ],
}

const { blenderImg, outputs } = CONFIG

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
            <img src={blenderImg} alt="Blender 3D" className="wfd-blender-img" />
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
              {outputs.map((src, i) => (
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


    </section>
  )
}
