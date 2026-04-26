import { useReveal } from '../hooks/useReveal'

const MODS = [
  {
    img: '/images/module-ia-conceito.jpg',
    eyebrow: 'Etapa 1 do fluxo: Conceito e Visual',
    title: 'IA para o Conceito',
    desc: 'Aceleração criativa e geração de ativos mestres — rótulos, visuais e direção de arte em horas com agentes de IA.',
    badge: '→ Etapa 1',
  },
  {
    img: '/images/HikBCU6skVoY2KNgjojuKIXeH4.webp',
    eyebrow: 'Etapa 2 do fluxo: Modelagem 3D',
    title: 'Blender PRO',
    desc: 'Modelagem do produto, aplicação de rótulos vetorizados e criação do Produto 3D Mestre — base consistente para toda campanha.',
    badge: '→ Etapa 2',
  },
  {
    img: '/images/DroToGdSZcZsGneYv9FaDkk9E2I.webp',
    eyebrow: 'Exclusivo do fluxo IAPRO.BLEND',
    title: 'A Ponte 3D–IA',
    desc: 'O módulo exclusivo: como usar o render do Blender como base controlada para a IA amplificar com fotorrealismo absoluto.',
    badge: '→ Exclusivo',
  },
  {
    img: '/images/UQTVDjpNTmOONz0YxNzEMDAPDH8.webp',
    eyebrow: 'Etapa 3 do fluxo: Multiplicação',
    title: '10x Mais Resultados',
    desc: 'Packshots, cenários e animações em 1/10 do tempo — com o produto 3D consistente como base imutável.',
    badge: '→ Etapa 3',
  },
  {
    img: '/images/DCaalfQRT2fZn5gcYZM8WLyEFqU.webp',
    eyebrow: 'Resultado final e carreira',
    title: 'Profissional do Futuro',
    desc: 'Finalização, monetização e entrega de campanha. Freela, precificação e posicionamento com o novo workflow.',
    badge: '→ Carreira',
  },
]

export default function Modules() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="sec sec-alt" id="fluxo">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O caminho completo 3D + IA</div>
      <h2 className="sec-title reveal" ref={titleRef}>Módulos estratégicos<br />que transformam carreiras.</h2>
      <div className="modules-list reveal" ref={listRef}>
        {MODS.map(m => (
          <div className="mod-row" key={m.title}>
            <img className="mod-img" src={m.img} alt="" loading="lazy" />
            <div className="mod-body">
              <div className="mod-eyebrow">{m.eyebrow}</div>
              <div className="mod-title">{m.title}</div>
              <div className="mod-desc">{m.desc}</div>
              <span className="mod-badge">{m.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
