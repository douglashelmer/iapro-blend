import { useEffect, useRef } from 'react'
import Carousel from './Carousel'
import Ticker from './Ticker'

const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`

const FRAG = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
  }
  O=vec4(col,1);
}`

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl2')
    if (!gl) return

    function compile(type, src) {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s
    }
    const prog = gl.createProgram()
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog); gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(prog, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'resolution')
    const uTime = gl.getUniformLocation(prog, 'time')
    const uTouch = gl.getUniformLocation(prog, 'touch')

    let touch = [0, 0]
    const onPointer = e => { touch = [e.clientX, canvas.clientHeight - e.clientY] }
    canvas.addEventListener('pointermove', onPointer)

    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio * 0.75)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    let rafId
    function loop(now) {
      gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(prog)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, now * 1e-3)
      gl.uniform2f(uTouch, ...touch)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-canvas-wrap">
        <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="hero-overlay">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            O futuro da criação já começou
          </div>
          <h1>
            <span className="h-ia">IA</span><span className="h-pro">PRO</span><span className="h-dot">.</span><br />
            <span className="h-blend">BLEND</span>
          </h1>
          <p className="hero-tagline">3D + Nano Banana + Claude Code</p>
          <p className="hero-sub">O novo fluxo para criar projetos 3D de R$&nbsp;15k em minutos — sem gastar 1 real.</p>
          <p className="hero-sub2">Do zero ao profissional usando ferramentas 100% gratuitas.</p>
          <div className="hero-btns">
            <a href="#preco" className="btn-solid">Garantir minha vaga</a>
            <a href="#fluxo" className="btn-ghost">Ver o fluxo</a>
          </div>
        </div>
        <div className="hero-stats" role="list" aria-label="Métricas do curso">
          {[
            { num: '90%',    label: 'Menos tempo' },
            { num: '10x',    label: 'Mais produtivo' },
            { num: '100%',   label: 'Consistente' },
            { num: '1.500+', label: 'Alunos formados' },
          ].map(s => (
            <div className="hero-stat" key={s.label} role="listitem">
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Carousel />
      <Ticker />
    </section>
  )
}
