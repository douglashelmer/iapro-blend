import { useReveal } from '../hooks/useReveal'

const ITENS = [
  {
    n: '01',
    titulo: 'Método de Briefing',
    desc: 'Framework completo para extrair tudo que o cliente precisa em uma única reunião — sem retrabalho e sem revisões infinitas.',
  },
  {
    n: '02',
    titulo: 'Swipe File de Portfólio',
    desc: 'Referências de mercado curadas para montar um portfólio que convence antes de você abrir a boca.',
  },
  {
    n: '03',
    titulo: 'Modelo 3D Base',
    desc: 'Arquivo Blender configurado com iluminação, câmera e materiais — pronto para receber qualquer produto e renderizar em 30 segundos.',
  },
  {
    n: '04',
    titulo: 'Fluxo 3D+IA Documentado',
    desc: 'O pipeline completo: Blender → Nano Banana → Claude Code, documentado passo a passo para você replicar em qualquer projeto.',
  },
  {
    n: '05',
    titulo: 'Estratégia do Primeiro Trabalho',
    desc: 'Roteiro exato para prospectar marcas no Instagram, montar proposta e fechar o primeiro job em até 30 dias.',
  },
  {
    n: '06',
    titulo: 'Tabela de Precificação',
    desc: 'Planilha com faixas de preço por tipo de projeto, complexidade e prazo — nunca mais cobra barato por não saber quanto vale.',
  },
]

export default function OQueLeva() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O que você leva</div>
      <h2 className="sec-title reveal" ref={titleRef}>Tudo que você precisa<br />para sair do zero.</h2>
      <div className="leva-grid reveal" ref={gridRef}>
        {ITENS.map(item => (
          <div className="leva-card" key={item.n}>
            <div className="leva-num">{item.n}</div>
            <div className="leva-titulo">{item.titulo}</div>
            <p className="leva-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
