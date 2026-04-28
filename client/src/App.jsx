import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

// Carregamento lazy — não bloqueiam o render inicial
const Receber       = lazy(() => import('./components/Receber'))
const ParaQuem      = lazy(() => import('./components/ParaQuem'))
const Fidelidade    = lazy(() => import('./components/Fidelidade'))
const Fluxo         = lazy(() => import('./components/Fluxo'))
const WorkflowDemo  = lazy(() => import('./components/WorkflowDemo'))
const CompareSlides = lazy(() => import('./components/CompareSlides'))
const BeforeAfter   = lazy(() => import('./components/BeforeAfter'))
const Medos         = lazy(() => import('./components/Medos'))
const Modules       = lazy(() => import('./components/Modules'))
const Benefits      = lazy(() => import('./components/Benefits'))
const Monetizacao   = lazy(() => import('./components/Monetizacao'))
const ResultadosReais = lazy(() => import('./components/ResultadosReais'))
const Bonus         = lazy(() => import('./components/Bonus'))
const Testimonials  = lazy(() => import('./components/Testimonials'))
const Price         = lazy(() => import('./components/Price'))
const Guarantee     = lazy(() => import('./components/Guarantee'))
const Instructor    = lazy(() => import('./components/Instructor'))
const FAQ           = lazy(() => import('./components/FAQ'))
const FinalCTA      = lazy(() => import('./components/FinalCTA'))
const Footer        = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={null}>
        <Receber />
        <ParaQuem />
        <Fidelidade />
        <Fluxo />
        <WorkflowDemo />
        <CompareSlides />
        <BeforeAfter />
        <Medos />
        <Modules />
        <Benefits />
        <Monetizacao />
        <ResultadosReais />
        <Bonus />
        <Testimonials />
        <Price />
        <Guarantee />
        <Instructor />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </>
  )
}
