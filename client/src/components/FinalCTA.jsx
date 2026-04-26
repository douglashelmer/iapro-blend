const CTA = 'https://pay.onprofit.com.br/I4hfK5lD?off=NzLncA'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="sec-eyebrow">Pronto para começar?</div>
      <h2 className="final-title">Seu produto merece<br /><span className="hl">IAPRO.BLEND</span></h2>
      <p className="final-sub">Junte-se a designers que já criam produtos premium em tempo recorde com 3D + IA.</p>
      <a href={CTA} className="btn-final">Garantir meu acesso agora</a>
    </section>
  )
}
