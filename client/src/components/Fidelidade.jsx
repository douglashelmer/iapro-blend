import { useReveal } from '../hooks/useReveal'

const METRICAS = [
  { num: '99%', label: 'Fidelidade de Rótulo' },
  { num: '99%', label: 'Fidelidade de Embalagem' },
  { num: '99%', label: 'Fidelidade de Cor e Textura' },
  { num: '30s', label: 'Render completo de 1 cena' },
]

export default function Fidelidade() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()
  const subRef = useReveal()

  return (
    <section className="sec sec-dark">
      <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ color: 'rgba(245,241,234,.35)' }}>
        Não é IA "imaginando"
      </div>
      <h2 className="sec-title reveal" ref={titleRef} style={{ color: 'var(--cream)', maxWidth: 640 }}>
        99% de fidelidade.<br />É IA&nbsp;+ 3D controlado.
      </h2>
      <div className="fidelidade-grid reveal" ref={gridRef} role="list" aria-label="Métricas de fidelidade">
        {METRICAS.map(m => (
          <div className="fid-card" key={m.label} role="listitem">
            <div className="fid-num">{m.num}</div>
            <div className="fid-label">{m.label}</div>
          </div>
        ))}
      </div>
      <p className="fidelidade-sub reveal" ref={subRef}>
        Rótulo, embalagem, cor e textura exatos — renderizados em segundos. Nenhuma IA sozinha chega perto disso.
      </p>
    </section>
  )
}
