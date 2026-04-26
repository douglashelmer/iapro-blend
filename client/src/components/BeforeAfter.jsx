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
          <div className="avd-card-label">3D Tradicional</div>
          <div className="avd-big-cost">3–4 dias</div>
          <div className="avd-big-label">por projeto de packshot</div>
          <div className="avd-card-divider" />
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🖥</span>
            <span>Máquinas de R$ 15k+ para render em tempo aceitável</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🏗</span>
            <span>Horas montando cenas complexas e iluminação no Blender</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">⏳</span>
            <span>Render que demora horas — e trava a máquina enquanto roda</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🔁</span>
            <span>Retrabalho constante a cada ajuste de cenário ou luz</span>
          </div>
        </div>

        <div className="avd-vs">VS</div>

        <div className="avd-new-card">
          <div className="avd-card-label">Fluxo 3D + IA</div>
          <div className="avd-big-cost orange">13 min</div>
          <div className="avd-big-label">do produto pronto à imagem final</div>
          <div className="avd-card-divider" />
          <div className="avd-detail-row">
            <span className="avd-detail-icon">💻</span>
            <span>Roda em qualquer notebook intermediário — sem investimento em hardware</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">⚡</span>
            <span>Sem montar cena complexa — a IA gera o cenário a partir do produto 3D</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🚀</span>
            <span>Render com IA em segundos, com qualidade fotorrealista</span>
          </div>
          <div className="avd-detail-row">
            <span className="avd-detail-icon">🎯</span>
            <span>Variações ilimitadas de cenário sem reabrir o Blender</span>
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
