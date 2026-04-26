import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Ir para o conteúdo</a>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
          <span className="ia">IA</span><span className="pro">PRO</span><span className="dot">.</span><span className="blend">BLEND</span>
        </div>
        <a href="#preco" className="nav-pill">Garantir vaga →</a>
      </nav>
    </>
  )
}
