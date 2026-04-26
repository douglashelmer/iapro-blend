import { useReveal } from '../hooks/useReveal'

const CURSOS = [
  {
    img: '/images/module-3dpro.webp',
    badge: 'Curso 01',
    title: 'Formação 3D PRO',
    desc: 'Chegou sua vez de Dominar o 3D + e colocar grana no bolso criando Imagens e Vídeos Profissionais. Único curso da área certificado pelo MEC do Brasil.',
    price: 'R$ 1.297',
    color: '#5B2D8E',
  },
  {
    img: '/images/module-freela3dpro.webp',
    badge: 'Curso 02',
    title: 'Freela 3D PRO',
    desc: 'Descubra Como Conquistar Seus Primeiros Clientes em 3D e Dar o Primeiro Passo no Mercado como Freelancer.',
    price: 'R$ 497',
    color: '#4A5C1A',
  },
  {
    img: '/images/module-iapro.webp',
    badge: 'Curso 03',
    title: 'Formação IA.PRO 1.0',
    desc: 'Crie imagens Incríveis de qualquer produto em menos de 5 minutos. Um processo à prova de falhas, onde você tem controle total de cada etapa.',
    price: 'R$ 897',
    color: '#0A6E6E',
  },
]

const BONUS = [
  {
    img: '/images/bonus-nexia-image.webp',
    badge: 'Bônus 01',
    title: 'Addon nexIA Image',
    desc: 'Renderize qualquer projeto dentro do Blender utilizando o poder da Inteligência Artificial.',
    price: 'R$ 297',
    color: '#0A4A6E',
  },
  {
    img: '/images/bonus-nexia-video.webp',
    badge: 'Bônus 02',
    title: 'Addon nexIA Video Studio',
    desc: 'Renderizar Vídeos com veo3 diretamente dentro do Blender. Formatos 16:9 e 9:16, com 4, 6 ou 8 segundos. Full HD e HD. Tudo sem sair do programa.',
    price: 'R$ 397',
    color: '#4A0A0A',
  },
  {
    img: '/images/bonus-modelos-3d.jpg',
    badge: 'Bônus 03',
    title: '+400 Modelos 3D Prontos',
    desc: 'Uma coleção com mais de 400 modelos de frascos, válvulas e embalagens para produtos prontos para utilizar nos seus projetos. Todos já contam com mapa UV aberto para aplicação das texturas de maneira profissional.',
    price: 'R$ 397',
    color: '#CC4400',
  },
]

function CourseCard({ item }) {
  return (
    <div className="rcb-card" style={{ '--card-color': item.color }}>
      <div className="rcb-img-wrap">
        <img className="rcb-img" src={item.img} alt={item.title} loading="lazy" />
      </div>
      <div className="rcb-body">
        <span className="rcb-badge">{item.badge}</span>
        <h3 className="rcb-title">{item.title}</h3>
        <p className="rcb-desc">{item.desc}</p>
        <span className="rcb-price">{item.price}</span>
      </div>
    </div>
  )
}

export default function Receber() {
  const headRef = useReveal()
  const cursosRef = useReveal()
  const bonusRef = useReveal()

  return (
    <section className="sec rcb-sec">
      <div className="rcb-header reveal" ref={headRef}>
        <p className="rcb-eyebrow">Veja tudo que você vai receber</p>
        <p className="rcb-sub">adquirindo ainda hoje.</p>
      </div>

      <div className="rcb-grid reveal" ref={cursosRef}>
        {CURSOS.map(c => <CourseCard key={c.title} item={c} />)}
      </div>

      <div className="rcb-bonus reveal" ref={bonusRef}>
        {BONUS.map(b => <CourseCard key={b.title} item={b} />)}
      </div>
    </section>
  )
}
