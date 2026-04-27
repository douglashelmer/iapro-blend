import { useReveal } from '../hooks/useReveal'

const RESULTADOS = [
  {
    platform: 'WhatsApp',
    value: '"O 3D mudou minha vida"',
    desc: 'Financeiramente e na satisfação de trabalho',
    name: 'Tiago Ramos — Aluno',
    quote: 'Por isso que todo conteúdo que vc lançar eu to dentro.',
    img: '/images/corte2.webp',
  },
  {
    platform: 'Discord',
    value: 'R$ 15k',
    desc: 'Cliente fechado com o NexIA',
    name: 'Aluno — via Discord',
    quote: 'Teu conteúdo é o melhor da internet, não tem ninguém com algo tão relevante. Desde quando lançou o primeiro curso de blender eu comprei.',
    img: '/images/corte3.webp',
  },
  {
    platform: 'WhatsApp',
    value: 'R$ 4k',
    desc: 'Projeto de packshots 3D',
    name: 'Rafa — Aluna',
    quote: 'Douglas, peguei um projeto de 4mil de packshots 3D. Tô bem feliz pq sei que vai abrir portas. 🙏',
    img: '/images/corte1.webp',
  },
]

const GALERIA = [
  '01.avif',
  '4XkjW3OhnXx0G5ycWdGk83cY2I.avif',
  'Bp7FzdEUKybdKLqqLQLZKSoQKk.avif',
  'JyERon5fmrOYMiE7QbUOXJHZErE.avif',
  'N2tS39r1FoHN2yb4GhAjK69K4.avif',
  'PQKQVfpkLtpUzCqQ9ClI841AwBY.avif',
  'Pj95rrhX81H1m6lniPsjh8q11AY.avif',
  'Xqgn2jkS9g1XHD6mJfvBKFdlimk.avif',
  'bGqgpaGjRT9VPp4Rc8zxR4jMvg.avif',
  'dAeteoPbKMcff5ffQGcGxelBHE.avif',
  'ePHhWHU9oLN6RI51ZW1tmHP3Po.avif',
  'hm4q6h2UuxSwSZDrFOnkHU6WarQ.avif',
  'iInf55MCR07jYUpvNzvn0j1QoM.avif',
  'iTobifQ0OVVLbujzzSGlaP9VI.avif',
  'kNVEdj7V0zIAbNampZDhIMgXG3A.avif',
  'l5UzfttP0HjYynvaZTjbbgW7uA.avif',
  'qSTKVkcAhsbblHJ39ZBZrP6zGi0.avif',
  'vY6dqIt3zGXlnD3uakGSDipsI.avif',
]

export default function ResultadosReais() {
  const eyebrowRef = useReveal()
  const titleRef   = useReveal()
  const gridRef    = useReveal()
  const galeriaRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Quem já está no caminho</div>
      <h2 className="sec-title reveal" ref={titleRef}>
        Resultados reais.<br />Sem experiência prévia em 3D.
      </h2>

      {/* ── Destaques ── */}
      <div className="resultados-grid reveal" ref={gridRef}>
        {RESULTADOS.map(r => (
          <div className="resultado-card" key={r.name}>
            <div className="resultado-tag">
              <span aria-hidden="true">●</span>{r.platform}
            </div>
            <div className="resultado-value">{r.value}</div>
            <div className="resultado-desc">{r.desc}</div>
            <div className="resultado-meta">{r.name}</div>
            <p className="resultado-quote">"{r.quote}"</p>
            <div className="resultado-img-wrap">
              <img src={r.img} alt="" className="resultado-img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Galeria masonry ── */}
      <div className="galeria-masonry reveal" ref={galeriaRef}>
        {GALERIA.map(img => (
          <div className="galeria-item" key={img}>
            <img
              src={`/images/galeria/${img}`}
              alt=""
              loading="lazy"
              className="galeria-img"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
