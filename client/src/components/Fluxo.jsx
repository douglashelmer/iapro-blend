import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { n: '1', icon: '🧠', title: 'Conceito com IA',      desc: 'Agentes de IA criam o conceito completo do produto — nome, ideia e direcionamento criativo — automaticamente.', tag: 'Claude + IA' },
  { n: '2', icon: '🎨', title: 'Desenvolvimento Visual', desc: 'Criação de embalagens e rótulos com prompts especializados e ferramentas de IA generativa.', tag: 'Nano Banana' },
  { n: '3', icon: '⬡',  title: 'Modelagem 3D',          desc: 'Produto 100% manipulável com precisão absoluta no Blender — consistência garantida em toda campanha.', tag: 'Blender 3D' },
  { n: '4', icon: '▷',  title: 'Multiplicação com IA',  desc: 'Packshots, animações e vídeos para campanhas completas gerados em fração do tempo tradicional.', tag: 'Veo + IA' },
]

export default function Fluxo() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const metaRef = useReveal()
  const stepsRef = useReveal()

  return (
    <section className="sec">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Two-column: headline left, metric card right */}
        <div className="fluxo-grid reveal" ref={metaRef}>
          <div>
            <div className="fluxo-eyebrow">As ferramentas que mudam tudo</div>
            <h2 className="fluxo-title">
              O <span>Fluxo IAPRO.BLEND</span><br />reduz seu trabalho<br />de dias para minutos
            </h2>
            <p className="fluxo-body">
              O Claude não é um chatbot. No nosso fluxo, ele controla ferramentas, gera arquivos e toma decisões criativas — enquanto você apenas dá as instruções. Sem linha de código. Sem configuração complexa.
            </p>
            <ul className="fluxo-checks">
              <li>Automatiza etapas repetitivas do workflow 3D</li>
              <li>Gera variações de produto em segundos</li>
              <li>Aplica texturas e iluminação com precisão profissional</li>
              <li>Funciona com Blender — que é completamente gratuito</li>
              <li>Sem experiência prévia necessária</li>
            </ul>
          </div>
          <div className="fluxo-metric-card">
            <div className="fluxo-metric-header">Antes vs Depois</div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Método Antigo</span>
              <span className="fluxo-metric-val">3 dias de trabalho</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Com Fluxo IAPRO.BLEND</span>
              <span className="fluxo-metric-val">13 minutos</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Custo Antes</span>
              <span className="fluxo-metric-val muted">R$ 3.000</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Custo Agora</span>
              <span className="fluxo-metric-val">R$ 0</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Ferramentas</span>
              <span className="fluxo-metric-val" style={{ fontSize: 12 }}>Blender + Nano Banana + Claude</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ marginTop: 72 }}>Nenhum outro curso ensina isso</div>
        <h2 className="sec-title reveal" ref={titleRef} style={{ marginBottom: 32 }}>O Fluxo <span style={{ color: 'var(--orange)' }}>3D + IA</span></h2>
        <div className="steps reveal" ref={stepsRef}>
          {STEPS.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-n">{s.n}</div>
              <div className="step-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="step-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
