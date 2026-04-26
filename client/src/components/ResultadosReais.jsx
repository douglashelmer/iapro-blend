import { useReveal } from '../hooks/useReveal'

const RESULTADOS = [
  {
    tag: 'Dez 2025',
    value: 'R$ 4k',
    desc: 'Projeto de packshot aprovado em 1 revisão',
    meta: 'Cliente real — Mirra Oil Repair',
    quote: 'Projeto entregue com o novo fluxo 3D+IA. Aprovado e publicado pela marca.',
  },
  {
    tag: 'Jan 2026',
    value: 'R$ 800',
    desc: 'Primeiro freela em 3 semanas',
    meta: 'Via Instagram — sem experiência anterior em 3D',
    quote: 'Portfólio montado no workshop. Fechou o primeiro trabalho direto pelo Instagram.',
  },
  {
    tag: 'Fev 2026',
    value: 'R$ 3.200',
    desc: 'Contrato recorrente em 60 dias',
    meta: '2 marcas de suplementos — mensal',
    quote: 'Hoje atende 2 marcas de suplementos em contrato mensal recorrente.',
  },
]

export default function ResultadosReais() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Quem já está no caminho</div>
      <h2 className="sec-title reveal" ref={titleRef}>Resultados reais.<br />Sem experiência prévia em 3D.</h2>
      <div className="resultados-grid reveal" ref={gridRef}>
        {RESULTADOS.map(r => (
          <div className="resultado-card" key={r.tag}>
            <div className="resultado-tag">
              <span aria-hidden="true">●</span>{r.tag}
            </div>
            <div className="resultado-value">{r.value}</div>
            <div className="resultado-desc">{r.desc}</div>
            <div className="resultado-meta">{r.meta}</div>
            <p className="resultado-quote">"{r.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
