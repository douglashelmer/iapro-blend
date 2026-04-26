import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  {
    videoId: 'BB7TMDOewTE',
    quote: '"Projetos que antes levavam várias horas, hoje executo em muito menos tempo graças à IA — e isso fez aumentar meu faturamento."',
    name: 'Jonathan Rodrigues',
    role: '3D Product Visualization',
    result: '↑ Faturamento\nSem perder qualidade',
  },
  {
    videoId: 'lD2SlP_JQ-o',
    quote: '"A IA me dá um direcionamento criativo mais acertado pra entregar melhores projetos. Parei de quebrar a cabeça e sou mais assertivo."',
    name: 'Jhosuã Lima',
    role: '3D Artist · Blender',
    result: '↑ Fluxo 80% mais rápido\nF1 à Champions League',
  },
  {
    videoId: 'zrRT6gptwwo',
    quote: '"Se você não adotar a IA nos seus projetos e na sua direção criativa, fica muito difícil conseguir trabalhos com maior valor agregado."',
    name: 'Alisson Borges',
    role: 'Motion Designer / 3D',
    result: '↑ Mais projetos\nContratado XP',
  },
]

export default function Testimonials() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Transformações reais</div>
      <h2 className="sec-title reveal" ref={titleRef}>O que os alunos<br />estão dizendo.</h2>
      <div className="test-grid reveal" ref={gridRef}>
        {ITEMS.map(t => (
          <div className="test-card" key={t.name}>
            <div className="test-video-wrap">
              <iframe
                className="test-video"
                src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1`}
                title={t.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="test-body">
              <p className="test-quote">{t.quote}</p>
              <div className="test-footer">
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
                <div className="test-result">{t.result}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
