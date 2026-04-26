import { useReveal } from '../hooks/useReveal'

const CARDS = [
  {
    icon: '🎯',
    chip: 'Para quem é',
    title: 'Designers 3D',
    desc: 'Você quer entregar projetos de qualidade premium em tempo recorde e parar de perder horas em renders manuais.',
  },
  {
    icon: '📊',
    chip: 'Para quem é',
    title: 'Profissionais de Marketing',
    desc: 'Você precisa de imagens de produto de alta qualidade sem depender de fotógrafo ou estúdio para cada campanha.',
  },
  {
    icon: '🚀',
    chip: 'Para quem é',
    title: 'Empreendedores',
    desc: 'Você vende produtos e quer imagens que vendem — sem gastar R$ 2.500 em um estúdio fotográfico toda vez.',
    winner: true,
  },
  {
    icon: '💡',
    chip: 'Para quem é',
    title: 'Criativos Visionários',
    desc: 'Você entende que quem domina 3D + IA agora vai dominar o mercado criativo nos próximos anos.',
  },
]

export default function Compare() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Para quem é o IAPRO.BLEND</div>
      <h2 className="sec-title reveal" ref={titleRef}>Isso foi feito<br />pra você se…</h2>
      <div className="compare-grid reveal" ref={gridRef}>
        {CARDS.map(c => (
          <div className={`compare-card${c.winner ? ' winner' : ''}`} key={c.title}>
            <div className="compare-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
