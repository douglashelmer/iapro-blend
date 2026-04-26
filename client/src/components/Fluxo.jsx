import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { n: '01', icon: '🧠', title: 'Conceito com IA', desc: 'Agentes de IA criam o conceito completo do produto — nome, ideia, direcionamento criativo — automaticamente.', tag: 'Claude + IA' },
  { n: '02', icon: '🎨', title: 'Desenvolvimento Visual', desc: 'Criação de embalagens e rótulos com prompts especializados e ferramentas de IA generativa.', tag: 'Nano Banana' },
  { n: '03', icon: '⬡', title: 'Modelagem 3D', desc: 'Produto 100% manipulável com precisão absoluta no Blender, garantindo consistência em toda a campanha.', tag: 'Blender 3D' },
  { n: '04', icon: '▷', title: 'Multiplicação com IA', desc: 'Packshots, animações e vídeos para campanhas completas gerados em fração do tempo tradicional.', tag: 'Google Veo' },
]

export default function Fluxo() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const stepsRef = useReveal()

  return (
    <section className="sec sec-alt" id="fluxo">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O Fluxo 3D + IA</div>
      <h2 className="sec-title reveal" ref={titleRef}>Nenhum outro<br />curso ensina isso.</h2>
      <div className="steps reveal" ref={stepsRef}>
        {STEPS.map(s => (
          <div className="step-card" key={s.n}>
            <div className="step-n">ETAPA {s.n}</div>
            <span className="step-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="step-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
