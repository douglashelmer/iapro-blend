import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/I4hfK5lD?off=NzLncA'

export default function Guarantee() {
  const wrapRef = useReveal()

  return (
    <section className="sec sec-dark">
      <div className="garantia-wrap reveal" ref={wrapRef}>
        <div className="garantia-badge" aria-hidden="true">30</div>
        <div className="garantia-eyebrow">Garantia incondicional</div>
        <h2 className="garantia-title">30 dias.<br />Risco zero.</h2>
        <p className="garantia-desc">
          Acesse o curso, assista todas as aulas, execute os projetos. Se em 30 dias você não estiver 100% satisfeito — por qualquer motivo — devolvemos cada centavo sem perguntas. Você não tem nada a perder.
        </p>
        <a href={CTA} className="btn-solid">Garantir meu acesso agora</a>
      </div>
    </section>
  )
}
