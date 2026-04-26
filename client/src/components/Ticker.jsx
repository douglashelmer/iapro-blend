const ITEMS = ['BLENDER 3D','NANO BANANA','GOOGLE VEO','CLAUDE IA','PRODUCT RENDERING','AI VIDEO','PACKSHOTS HIPER-REALISTAS','3D + INTELIGÊNCIA ARTIFICIAL']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker">
      <div className="t-track">
        {doubled.map((item, i) => (
          <span className="t-item" key={i}>
            <span className="t-dot" />{item}
          </span>
        ))}
      </div>
    </div>
  )
}
