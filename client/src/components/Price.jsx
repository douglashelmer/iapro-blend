import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/CjKXd5Oo?off=bNgTEM'

const ITEMS = [
  'Acesso Vitalício',
  '+20h de conteúdo direto ao ponto',
  'Suporte da comunidade exclusiva',
  'Certificado de conclusão',
  'Garantia de 7 dias',
]

export default function Price() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="sec price-sec" id="preco">

      {/* Cabeçalho */}
      <h2 className="sec-title price-sec-title">Invista no futuro<br />da sua carreira</h2>
      <p className="sec-eyebrow price-sec-sub">
        Domine o workflow 3D + IA e multiplique seus resultados em tempo recorde
      </p>

      {/* Colunas */}
      <div className="price-cols">

        {/* ── Esquerda: Comparação de tempo ── */}
        <div className="price-compare reveal" ref={leftRef}>
          <div className="pc-head">
            <span className="pc-head-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </span>
            <div>
              <div className="pc-head-title">Economia de Tempo</div>
              <div className="pc-head-sub">Compare os resultados</div>
            </div>
          </div>

          <div className="pc-bars">
            {/* Barra Tradicional */}
            <div className="pc-bar-row">
              <div className="pc-bar-meta">
                <span className="pc-bar-label">Fluxo Tradicional</span>
                <span className="pc-bar-hours pc-bar-hours--red">23H</span>
              </div>
              <div className="pc-bar-track">
                <div className="pc-bar pc-bar--red" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Divisor ⚡ */}
            <div className="pc-lightning" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>

            {/* Barra 3D + IA */}
            <div className="pc-bar-row">
              <div className="pc-bar-meta">
                <span className="pc-bar-label">Fluxo 3D + IA</span>
                <span className="pc-bar-hours pc-bar-hours--orange">2H</span>
              </div>
              <div className="pc-bar-track">
                <div className="pc-bar pc-bar--orange" style={{ width: '9%' }} />
              </div>
            </div>
          </div>

          <div className="pc-footer">
            Entregue projetos <strong>91% mais rápido</strong>
          </div>
        </div>

        {/* ── Direita: Card de preço ── */}
        <div className="price-card reveal" ref={rightRef}>
          <div className="pcard-badge">75% OFF</div>

          <div className="pcard-formacao">Formação</div>
          <div className="pcard-logo">
            <span className="pcard-ia">IA</span><span className="pcard-pro">PRO</span><span className="pcard-dot">.</span><span className="pcard-blend">BLEND</span>
          </div>

          <p className="pcard-de">De R$ 2.997</p>
          <p className="pcard-por">Por apenas 12x de</p>
          <div className="pcard-price"><sup>R$</sup>69<span className="pcard-cents">,73</span></div>
          <p className="pcard-vista">ou R$697 à vista</p>

          <ul className="pcard-list">
            {ITEMS.map(i => (
              <li key={i}>
                <span className="pcard-check" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {i}
              </li>
            ))}
          </ul>

          <a href={CTA} className="btn-cta-big">
            Garantir Minha Vaga Agora <span aria-hidden="true">✦</span>
          </a>
          <p className="pcard-secure">🔒 Pagamento 100% seguro • Garantia de 7 dias</p>
        </div>

      </div>
    </section>
  )
}
