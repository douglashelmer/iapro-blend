const IMGS_A = [
  'photo-1571781926291-c477ebfd024b',
  'photo-1620916566398-39f1143ab7be',
  'photo-1585386959984-a4155224a1ad',
  'photo-1567721913486-6585f069b695',
  'photo-1612817288484-6f916006741a',
  'photo-1544716278-ca5e3f4abd8c',
  'photo-1481391319762-47dff72954d9',
  'photo-1556228578-8c89e6adf883',
]

const IMGS_B = [
  'photo-1608248543803-ba4f8c70ae0b',
  'photo-1596462502278-27bfdc403348',
  'photo-1631729371254-42c2892f0e6e',
  'photo-1523275335684-37898b6baf30',
  'photo-1602143407151-7111542de6e8',
  'photo-1541643600914-78b084683702',
  'photo-1616486338812-3dadae4b4ace',
  'photo-1590736969955-71cc94901144',
]

function Track({ ids, reverse }) {
  const doubled = [...ids, ...ids]
  return (
    <div className={`c-track${reverse ? ' rev' : ''}`}>
      {doubled.map((id, i) => (
        <img
          key={i}
          className="c-img"
          src={`https://images.unsplash.com/${id}?w=600&h=400&fit=crop`}
          alt=""
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default function Carousel() {
  return (
    <div className="carousel-wrap">
      <div className="carousel-row"><Track ids={IMGS_A} /></div>
      <div className="carousel-row"><Track ids={IMGS_B} reverse /></div>
    </div>
  )
}
