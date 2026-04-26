import { useReveal } from '../hooks/useReveal'

const ROWS = [
  { cat: 'Cosméticos',  tempoB: '3 dias',  custoB: 'R$ 2.500', tempoA: '15 min', custoA: 'R$ 0', eco: '75% menos' },
  { cat: 'Bebidas',     tempoB: '2 dias',  custoB: 'R$ 1.500', tempoA: '12 min', custoA: 'R$ 0', eco: '75% menos' },
  { cat: 'Suplementos', tempoB: '3 dias',  custoB: 'R$ 3.000', tempoA: '13 min', custoA: 'R$ 0', eco: '75% menos' },
  { cat: 'Perfumes',    tempoB: '4 dias',  custoB: 'R$ 3.500', tempoA: '23 min', custoA: 'R$ 0', eco: '75% menos' },
]

export default function BeforeAfter() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const tableRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Comparativo real</div>
      <h2 className="sec-title reveal" ref={titleRef}>Quanto custa<br />não aprender isso.</h2>
      <div className="avd-table-wrap reveal" ref={tableRef}>
        <div className="avd-table-head">
          <span className="avd-th">Produto</span>
          <span className="avd-th">Tempo (Método Antigo)</span>
          <span className="avd-th">Custo (Método Antigo)</span>
          <span className="avd-th orange">Tempo com BNC</span>
          <span className="avd-th orange">Custo com BNC</span>
          <span className="avd-th">Economia</span>
        </div>
        {ROWS.map(r => (
          <div className="avd-table-row" key={r.cat}>
            <span className="avd-td cat">{r.cat}</span>
            <span className="avd-td muted">{r.tempoB}</span>
            <span className="avd-td muted">{r.custoB}</span>
            <span className="avd-td orange">{r.tempoA}</span>
            <span className="avd-td orange">{r.custoA}</span>
            <span className="avd-td"><span className="avd-td badge">{r.eco}</span></span>
          </div>
        ))}
      </div>
    </section>
  )
}
