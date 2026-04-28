import { useState } from 'react'
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

function VideoFacade({ videoId, title }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        className="test-video"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&fs=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }

  return (
    <button className="test-facade" onClick={() => setActive(true)} aria-label={`Reproduzir vídeo de ${title}`}>
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="test-facade-thumb"
        loading="lazy"
      />
      <div className="test-facade-play">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.8 0 34 0 34 0S12.2 0 7.4 1.7c-2.9.8-5.1 3.1-5.9 6C0 12.5 0 24 0 24s0 11.5 1.5 16.3c.8 2.9 3 5.2 5.9 6C12.2 48 34 48 34 48s21.8 0 26.6-1.7c2.9-.8 5.1-3.1 5.9-6C68 35.5 68 24 68 24s0-11.5-1.5-16.3z" fill="#ff0000"/>
          <path d="M45 24L27 14v20" fill="white"/>
        </svg>
      </div>
    </button>
  )
}

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
              <VideoFacade videoId={t.videoId} title={t.name} />
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
