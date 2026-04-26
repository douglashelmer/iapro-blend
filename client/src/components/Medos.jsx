import { useReveal } from '../hooks/useReveal'

const MEDOS = [
  {
    n: '01',
    titulo: '"Eu não sou artista."',
    crenca: '"Preciso saber desenhar, entender de luz, ter bagagem de belas artes antes de mexer em 3D."',
    realidade: '3D comercial hoje é 80% execução técnica e 20% gosto visual. A IA cobre parte da composição — você opera o fluxo, o cliente paga pelo entregável, não pelo talento.',
  },
  {
    n: '02',
    titulo: '"É caro e complexo demais."',
    crenca: '"Preciso de PC top, Cinema 4D, Redshift, licença de mil coisas. Sem isso nem começo."',
    realidade: 'Blender é gratuito e open source. Nano Banana gera imagens dentro do fluxo. Claude controla as ferramentas pra você. Roda em notebook intermediário.',
  },
  {
    n: '03',
    titulo: '"A IA vai me substituir."',
    crenca: '"Se a IA já faz imagem sozinha, o cliente não vai mais precisar de mim."',
    realidade: 'IA pura não entrega consistência: rótulo muda, forma muda, cor muda. Marca não aceita isso. 3D+IA é o único fluxo que garante 99% de fidelidade — e quem domina cobra por isso.',
  },
  {
    n: '04',
    titulo: '"Comecei tarde demais."',
    crenca: '"Tem gente fazendo 3D desde os 15 anos. Não dá mais pra me encaixar."',
    realidade: 'A IA zerou a largada. Em 2 dias de workshop você sai com o mesmo fluxo que um artista de 10 anos leva semanas pra montar. Cliente não pergunta sua idade — pergunta prazo.',
  },
  {
    n: '05',
    titulo: '"E se eu não conseguir cliente?"',
    crenca: '"Aprendo, monto portfólio, e depois? De onde vem o primeiro trabalho?"',
    realidade: 'Marcas pequenas no Instagram via DM direto. Agências locais precisam de freelancer fixo. Fiverr / Workana para estrangeiro em USD. Portfólio IA-nativo já te separa dos 95%.',
  },
]

export default function Medos() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O que trava quem começa</div>
      <h2 className="sec-title reveal" ref={titleRef}>Os 5&nbsp;medos de quem<br />ainda não começou.</h2>
      <div className="medos-grid reveal" ref={gridRef}>
        {MEDOS.map(m => (
          <div className="medo-card" key={m.n}>
            <div className="medo-num">MEDO {m.n}</div>
            <div className="medo-title">{m.titulo}</div>
            <div className="medo-divider" aria-hidden="true" />
            <div className="medo-label">A crença</div>
            <div className="medo-crenca">{m.crenca}</div>
            <div className="medo-label">A realidade</div>
            <p className="medo-realidade">{m.realidade}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
