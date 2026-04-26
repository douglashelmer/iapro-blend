import { useReveal } from '../hooks/useReveal'


export default function BeforeAfter() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const cardsRef = useReveal()

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

    </section>
  )
}
