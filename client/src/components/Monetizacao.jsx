import { useReveal } from '../hooks/useReveal'

const MODELOS = [
  {
    n: '01',
    range: 'R$ 500–5k',
    periodo: '/job',
    tipo: 'Freelance por Projeto',
    desc: 'Entrega única para marca ou agência. Entrada mais rápida. Volume varia todo mês.',
    featured: false,
  },
  {
    n: '02',
    range: 'R$ 3k–12k',
    periodo: '/mês',
    tipo: 'Contrato Recorrente',
    desc: 'Pacote mensal fixo de X criativos. Receita previsível. É onde freelancer sério chega depois de 3–6 meses.',
    featured: true,
  },
  {
    n: '03',
    range: 'R$ 4k–20k',
    periodo: '/mês',
    tipo: 'Parceria com Agência',
    desc: 'Vira o braço 3D de agências de publicidade e branding. Alto volume, pouco comercial.',
    featured: false,
  },
  {
    n: '04',
    range: 'R$ 8k–25k',
    periodo: '/mês',
    tipo: 'Estúdio / In-House',
    desc: 'Posição dentro de uma indústria ou estúdio dedicado de uma marca. Deixa de ser freela, vira operação.',
    featured: false,
  },
]

export default function Monetizacao() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()
  const subRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Como ganhar dinheiro</div>
      <h2 className="sec-title reveal" ref={titleRef}>4&nbsp;caminhos para<br />faturar R$&nbsp;5k–20k/mês.</h2>
      <div className="monetizacao-grid reveal" ref={gridRef}>
        {MODELOS.map(m => (
          <div className={`monet-card${m.featured ? ' featured' : ''}`} key={m.n}>
            <div className="monet-num">{m.n}</div>
            <div className="monet-range">{m.range}<span style={{ fontSize: '60%', fontFamily: "'DM Mono',monospace", fontWeight: 400, letterSpacing: 1 }}>{m.periodo}</span></div>
            <div className="monet-type">{m.tipo}</div>
            <p className="monet-desc">{m.desc}</p>
          </div>
        ))}
      </div>
      <p className="reveal" ref={subRef} style={{ marginTop: 32, fontSize: 14, color: 'var(--ink3)', fontFamily: "'DM Mono',monospace", letterSpacing: 1, textAlign: 'center' }}>
        Designer que domina 3D+IA hoje trabalha de casa — sem estúdio, sem fotógrafo, sem depender de um único cliente.
      </p>
    </section>
  )
}
