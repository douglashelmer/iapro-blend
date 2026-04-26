import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { title: 'Pack de 400+ Assets 3D',     desc: 'Biblioteca completa de modelos 3D prontos para usar nos seus projetos. Economize horas de modelagem.',                  val: 'R$ 497' },
  { title: 'Agente Auren.exe',           desc: 'Agente de IA treinado no fluxo IAPRO.BLEND — gera conceito, direção de arte e prompts otimizados para cada projeto.',   val: 'R$ 197/mês' },
  { title: 'nexIA Image',                desc: 'Gerador de imagens de produto com IA nativa integrado ao fluxo 3D — resultados profissionais com um clique.',            val: 'R$ 297' },
  { title: 'nexIA Video Studio',         desc: 'Studio de vídeo com IA para animar seus packshots 3D e criar conteúdo de produto em movimento.',                        val: 'R$ 397' },
  { title: 'Agente Prompt Maker',        desc: 'Criador de prompts profissionais para imagens de produto com resultados de alto nível em segundos.',                     val: 'R$ 97/mês' },
  { title: 'Dashboard PRO',              desc: 'Dashboard Notion para gerenciar projetos, clientes e entregas como um estúdio profissional.',                             val: 'R$ 147' },
  { title: 'Comunidade Exclusiva',       desc: 'Acesso à comunidade privada de alunos para trocar projetos, tirar dúvidas e fechar parcerias.',                         val: 'R$ 197/mês' },
  { title: 'Addon Multi Câmera',         desc: 'Addon exclusivo criado especificamente para o fluxo IAPRO.BLEND no Blender — troca de ângulos em segundos.',            val: 'R$ 97' },
]

export default function Bonus() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Bônus exclusivos</div>
      <h2 className="sec-title reveal" ref={titleRef}>Mais de R$ 1.929<br />em bônus incluídos.</h2>
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
