import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/I4hfK5lD?off=NzLncA'

const ITEMS = [
  'Acesso vitalício a todos os conteúdos',
  '+20h de conteúdo direto ao ponto',
  'Todos os bônus incluídos (R$ 1.929+ em valor)',
  'Comunidade exclusiva de alunos',
  'Certificado de conclusão',
  'Garantia de 30 dias — 100% do dinheiro de volta',
]

export default function Price() {
  const wrapRef = useReveal()

  return (
    <section className="sec" id="preco">
      <div className="price-wrap reveal" ref={wrapRef}>
        <div className="price-tag">77% OFF — Oferta especial</div>
        <p className="price-de">De R$ 2.997</p>
        <div className="price-main">12x <sup>R$</sup>69<span style={{ fontSize: '50%' }}>,73</span></div>
        <p className="price-or">ou à vista por</p>
        <div className="price-pix">R$ 697 no PIX</div>
        <ul className="price-list">
          {ITEMS.map(i => <li key={i}>{i}</li>)}
        </ul>
        <a href={CTA} className="btn-cta-big">Garantir meu acesso agora</a>
        <p className="price-secure">🔒 Pagamento 100% seguro · Garantia de 30 dias</p>
      </div>
    </section>
  )
}
