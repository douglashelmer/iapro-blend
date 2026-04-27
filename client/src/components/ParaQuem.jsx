import { useReveal } from '../hooks/useReveal'

const CARDS = [
  {
    icon: '🎯',
    title: 'Designers 3D',
    desc: 'Você quer entregar projetos de qualidade premium em tempo recorde e parar de perder horas em renders manuais.',
    highlight: true,
  },
  {
    icon: '📊',
    title: 'Profissionais de Marketing',
    desc: 'Você precisa de imagens de produto de alta qualidade sem depender de fotógrafo ou estúdio para cada campanha.',
    highlight: false,
  },
  {
    icon: '🚀',
    title: 'Empreendedores',
    desc: 'Você vende produtos e quer imagens que vendem — sem gastar R$ 2.500 em um estúdio fotográfico toda vez.',
    highlight: false,
  },
  {
    icon: '💡',
    title: 'Criativos Visionários',
    desc: 'Você entende que quem domina 3D + IA agora vai dominar o mercado criativo nos próximos anos.',
    highlight: false,
  },
]

export default function ParaQuem() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const cardsRef = useReveal()

  return (
    <section className="sec pq-sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Para quem é o IAPRO.BLEND</div>
      <h2 className="sec-title pq-title reveal" ref={titleRef}>
        Isso foi feito<br />pra você se...
      </h2>
      <div className="pq-grid reveal" ref={cardsRef}>
        {CARDS.map(c => (
          <div key={c.title} className={`pq-card ${c.highlight ? 'pq-card--hl' : ''}`}>
            <div className={`pq-icon-wrap ${c.highlight ? 'pq-icon-wrap--hl' : ''}`}>
              {c.icon}
            </div>
            <h3 className="pq-card-title">{c.title}</h3>
            <p className="pq-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
