import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/I4hfK5lD?off=NzLncA'

const ROWS = [
  { cat: 'Cosméticos',  tempoB: '3 dias',  custoB: 'R$ 2.500', tempoA: '15 min', custoA: 'R$ 0' },
  { cat: 'Bebidas',     tempoB: '2 dias',  custoB: 'R$ 1.500', tempoA: '12 min', custoA: 'R$ 0' },
  { cat: 'Suplementos', tempoB: '3 dias',  custoB: 'R$ 3.000', tempoA: '13 min', custoA: 'R$ 0' },
  { cat: 'Perfumes',    tempoB: '4 dias',  custoB: 'R$ 3.500', tempoA: '23 min', custoA: 'R$ 0' },
]

export default function BeforeAfter() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const cardsRef = useReveal()
  const calcRef = useReveal()
  const tableRef = useReveal()

  return (
    <section className="sec avd-sec">
      {/* Header */}
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Comparativo real</div>
      <h2 className="sec-title reveal" ref={titleRef}>
        Cada projeto no método antigo<br />é dinheiro jogado fora.
      </h2>

      {/* Big comparison cards */}
      <div className="avd-compare-cards reveal" ref={cardsRef}>
        <div className="avd-old-card">
          <div className="avd-card-label">Método Antigo</div>
          <div className="avd-big-cost">R$ 3.000</div>
          <div className="avd-big-label">custo médio por projeto</div>
          <div className="avd-card-divider" />
          <div className="avd-detail-row">
            <span className="avd-detail-icon">⏱</span>
            <span><strong>3–4 dias</strong> de trabalho por projeto</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">💸</span>
            <span>Fotógrafo + estúdio + edição + retrabalho</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🔁</span>
            <span>Revisões infinitas, prazos perdidos</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">😓</span>
            <span>Depende de terceiros para cada entrega</span>
          </div>
        </div>

        <div className="avd-vs">VS</div>

        <div className="avd-new-card">
          <div className="avd-card-label">Com IAPRO.BLEND</div>
          <div className="avd-big-cost orange">R$ 0</div>
          <div className="avd-big-label">custo por projeto</div>
          <div className="avd-card-divider" />
          <div className="avd-detail-row">
            <span className="avd-detail-icon">⚡</span>
            <span><strong>13 minutos</strong> do conceito à entrega</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">✅</span>
            <span>Blender + Nano Banana + Claude — 100% gratuito</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🎯</span>
            <span>99% de fidelidade ao produto real</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🚀</span>
            <span>Você controla tudo, sozinho, de casa</span>
          </div>
        </div>
      </div>

      {/* Yearly loss calculator */}
      <div className="avd-calc reveal" ref={calcRef}>
        <div className="avd-calc-title">Fazendo apenas <span>10 projetos por ano</span> no método antigo:</div>
        <div className="avd-calc-row">
          <div className="avd-calc-item loss">
            <div className="avd-calc-num">R$ 30.000</div>
            <div className="avd-calc-desc">gastos desnecessários com estúdio e fotógrafo</div>
          </div>
          <div className="avd-calc-plus">+</div>
          <div className="avd-calc-item loss">
            <div className="avd-calc-num">30 dias</div>
            <div className="avd-calc-desc">de trabalho desperdiçado em tarefas manuais</div>
          </div>
          <div className="avd-calc-plus">=</div>
          <div className="avd-calc-item highlight">
            <div className="avd-calc-num">R$ 30.000<br /><span style={{fontSize:'60%', letterSpacing:1}}>QUE PODERIAM ESTAR NO SEU BOLSO</span></div>
            <div className="avd-calc-desc">se você dominasse o fluxo 3D + IA hoje</div>
          </div>
        </div>
        <a href={CTA} className="btn-solid avd-cta">Parar de perder dinheiro agora →</a>
      </div>

      {/* Detail table */}
      <div className="avd-table-wrap reveal" ref={tableRef}>
        <div className="avd-table-head">
          <span className="avd-th">Produto</span>
          <span className="avd-th">Tempo Antigo</span>
          <span className="avd-th">Custo Antigo</span>
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
            <span className="avd-td"><span className="avd-td badge">100% menos</span></span>
          </div>
        ))}
      </div>
    </section>
  )
}
