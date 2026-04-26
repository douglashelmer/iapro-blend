import { useReveal } from '../hooks/useReveal'

const CARDS = [
  { cat: 'Cosméticos',  tempoB: '3 dias', tempoA: '15 min', custoB: 'R$ 2.500', custoA: 'R$ 0', eco: '100% de economia' },
  { cat: 'Bebidas',     tempoB: '2 dias', tempoA: '12 min', custoB: 'R$ 1.500', custoA: 'R$ 0', eco: '100% de economia' },
  { cat: 'Suplementos', tempoB: '3 dias', tempoA: '13 min', custoB: 'R$ 3.000', custoA: 'R$ 0', eco: '100% de economia' },
  { cat: 'Perfumes',    tempoB: '4 dias', tempoA: '23 min', custoB: 'R$ 3.500', custoA: 'R$ 0', eco: '100% de economia' },
]

export default function BeforeAfter() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const cardsRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Comparação real</div>
      <h2 className="sec-title reveal" ref={titleRef}>A diferença<br />é inegável.</h2>
      <div className="avd-cards reveal" ref={cardsRef}>
        {CARDS.map(c => (
          <div className="avd-card" key={c.cat}>
            <div className="avd-cat">{c.cat}</div>
            <div className="avd-row-item">
              <div className="avd-row-label">Tempo</div>
              <div className="avd-before">{c.tempoB}</div>
              <div className="avd-after">{c.tempoA}</div>
            </div>
            <div className="avd-row-item">
              <div className="avd-row-label">Custo</div>
              <div className="avd-before">{c.custoB}</div>
              <div className="avd-after">{c.custoA}</div>
            </div>
            <div className="avd-economy">{c.eco}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
