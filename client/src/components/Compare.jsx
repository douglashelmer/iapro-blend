import { useReveal } from '../hooks/useReveal'

export default function Compare() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Por que 3D + IA?</div>
      <h2 className="sec-title reveal" ref={titleRef}>O mercado está<br />mudando agora.</h2>
      <div className="compare-grid reveal" ref={gridRef}>
        <div className="compare-card">
          <div className="compare-chip">Só IA</div>
          <h3>Resultados inconsistentes</h3>
          <p>Falta de controle preciso, sem manipulação 3D real. Você fica refém da aleatoriedade e não consegue repetir resultados.</p>
        </div>
        <div className="compare-card">
          <div className="compare-chip">Só 3D</div>
          <h3>Processo lento demais</h3>
          <p>Dias de trabalho manual, variações limitadas. A velocidade do mercado exige mais do que o 3D sozinho consegue entregar.</p>
        </div>
        <div className="compare-card winner">
          <div className="winner-badge">✓ Melhor</div>
          <div className="compare-chip">3D + IA</div>
          <h3>Velocidade com precisão</h3>
          <p>A velocidade da IA com o controle do 3D. Resultados profissionais em horas, não semanas. O único caminho que escala.</p>
        </div>
      </div>
    </section>
  )
}
