import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { num: 'Dias → Horas', title: 'Velocidade extrema',     desc: 'Do conceito à campanha completa em 1–2 dias, não em semanas de trabalho manual.' },
  { num: '100%',         title: 'Controle total',         desc: 'Cada etapa sob seu controle, sem depender da aleatoriedade da IA pura.' },
  { num: 'Premium',      title: 'Qualidade profissional', desc: 'Resultados que só a união de 3D + IA consegue entregar — impossíveis com uma ferramenta só.' },
  { num: '10x',          title: 'Multiplicação',          desc: 'Gere dezenas de variações e assets em fração do tempo do processo tradicional.' },
]

export default function Benefits() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O que você ganha</div>
      <h2 className="sec-title reveal" ref={titleRef}>Resultados reais,<br />mensuráveis.</h2>
      <div className="benefits-grid reveal" ref={gridRef}>
        {ITEMS.map(b => (
          <div className="benefit-card" key={b.title}>
            <div className="benefit-num">{b.num}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
