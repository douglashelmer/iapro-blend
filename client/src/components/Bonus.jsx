import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { title: 'Pack de 400+ Assets 3D',     desc: 'Biblioteca completa de modelos 3D prontos para usar nos seus projetos. Economize horas de modelagem.', val: 'R$ 497' },
  { title: 'Agente DOUG',                desc: 'Agente pessoal que cria produtos — nome, conceito, storytelling, direção de arte até imagem final.', val: 'R$ 97/mês' },
  { title: 'Agente Prompt Maker',        desc: 'Criador de prompts profissionais para imagens de produto com resultados de alto nível em segundos.', val: 'R$ 97/mês' },
  { title: 'Agente Rafa',                desc: 'Criador de storyboard profissional para produção de vídeos com IA integrada.', val: 'R$ 97/mês' },
  { title: 'Addon Multi Câmera',         desc: 'Addon exclusivo criado especificamente para o fluxo IAPRO.BLEND no Blender.', val: 'R$ 97' },
  { title: 'Comunidade + Dashboard PRO', desc: 'Acesso à comunidade privada de alunos e dashboard Notion para acompanhar seus projetos.', val: 'R$ 344' },
]

export default function Bonus() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Bônus exclusivos</div>
      <h2 className="sec-title reveal" ref={titleRef}>Mais de R$ 1.188<br />em bônus incluídos.</h2>
      <div className="bonus-grid reveal" ref={gridRef}>
        {ITEMS.map(b => (
          <div className="bonus-card" key={b.title}>
            <div>
              <div className="bonus-title">{b.title}</div>
              <p className="bonus-desc">{b.desc}</p>
            </div>
            <div className="bonus-val">{b.val}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
