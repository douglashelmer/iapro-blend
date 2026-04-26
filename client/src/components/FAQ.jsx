import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { q: 'Preciso saber modelagem ou design?', a: 'Não precisa saber nada. Abordaremos todos os conceitos e técnicas no curso para você desenvolver as habilidades do zero.' },
  { q: 'Tem algum pré-requisito?', a: 'Somente ter um computador. O resto será ensinado no curso, passo a passo.' },
  { q: 'Quais softwares serão utilizados?', a: 'Blender 3D (gratuito), Nano Banana, Claude Code, Photoshop, Illustrator, DaVinci Resolve e After Effects. Ensinaremos a usar todas as ferramentas dentro do curso.' },
  { q: 'Por quanto tempo terei acesso?', a: 'Acesso vitalício a todos os conteúdos e atualizações. Assista quantas vezes quiser, no seu ritmo.' },
  { q: 'Quais são as formas de pagamento?', a: 'PIX, 1 cartão, 2 cartões e PayPal. Parcelamento em até 12x no cartão de crédito.' },
  { q: 'E se eu não gostar?', a: 'Garantia de 30 dias. Basta solicitar o reembolso na plataforma — devolvemos 100% do valor, sem perguntas.' },
  { q: 'Tem certificado de conclusão?', a: 'Sim. Ao concluir, você recebe um certificado digital verificável para adicionar ao LinkedIn e portfólio.' },
  { q: 'O curso é online ou presencial?', a: '100% online. Assista de onde estiver, no horário que preferir. As aulas ficam gravadas na plataforma.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ justifyContent: 'center' }}>Tire suas dúvidas</div>
      <h2 className="sec-title reveal" ref={titleRef} style={{ textAlign: 'center', margin: '0 auto 48px' }}>Perguntas<br />frequentes.</h2>
      <div className="faq-list reveal" ref={listRef}>
        {ITEMS.map((item, i) => (
          <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
