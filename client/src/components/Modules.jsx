import { useReveal } from '../hooks/useReveal'

const MODS = [
  { n: '01', title: 'IA para o Conceito', desc: 'Aceleração criativa e geração de ativos mestres — rótulos, visuais e direção de arte em horas.', badge: '→ Etapa 1' },
  { n: '02', title: 'Blender PRO', desc: 'Modelagem do produto, aplicação de rótulos vetorizados e criação do Produto 3D Mestre para toda a campanha.', badge: '→ Etapa 2' },
  { n: '03', title: 'A Ponte 3D–IA', desc: 'O módulo exclusivo: como usar o render do Blender como base para a IA amplificar com fotorrealismo.', badge: '→ Exclusivo' },
  { n: '04', title: '10x Mais Resultados', desc: 'Packshots, cenários e animações em 1/10 do tempo — com o produto 3D consistente como base.', badge: '→ Etapa 3' },
  { n: '05', title: 'Profissional do Futuro', desc: 'Finalização, monetização e entrega de campanha. Freela, precificação e posicionamento com o novo workflow.', badge: '→ Carreira' },
]

export default function Modules() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O caminho completo</div>
      <h2 className="sec-title reveal" ref={titleRef}>Módulos que<br />transformam carreiras.</h2>
      <div className="modules-list reveal" ref={listRef}>
        {MODS.map(m => (
          <div className="mod-row" key={m.n}>
            <div className="mod-num">{m.n}</div>
            <div>
              <div className="mod-title">{m.title}</div>
              <div className="mod-desc">{m.desc}</div>
            </div>
            <div className="mod-badge">{m.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
