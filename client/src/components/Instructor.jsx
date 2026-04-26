import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/I4hfK5lD?off=NzLncA'

export default function Instructor() {
  const eyebrowRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec sec-alt">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>Seu instrutor</div>
      <div className="inst-grid reveal" ref={gridRef}>
        <div>
          <div className="inst-eyebrow">Designer 3D & Especialista em IA</div>
          <div className="inst-name">DOUGLAS<br />HELMER</div>
          <p className="inst-bio">Especialista em design de produtos 3D com mais de uma década de experiência. Pioneiro na integração de IA com workflows 3D no Brasil. Já treinou milhares de designers e ajudou centenas a transformar suas carreiras, reduzindo tempo de produção em até 10x.</p>
          <a href={CTA} className="btn-solid">Quero aprender com Douglas</a>
        </div>
        <div>
          <p className="inst-quote">"Minha missão é democratizar o acesso às ferramentas que transformam ideias em produtos de sucesso."</p>
          <div className="inst-stats">
            {[
              { n: '10+',    l: 'Anos em design 3D' },
              { n: '1.500+', l: 'Alunos formados' },
              { n: '150+',   l: 'Projetos para marcas' },
              { n: '95%',    l: 'Taxa de satisfação' },
            ].map(s => (
              <div className="inst-stat" key={s.l}>
                <div className="inst-stat-n">{s.n}</div>
                <div className="inst-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
