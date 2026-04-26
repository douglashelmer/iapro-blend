const ROW_A = [1,2,3,4,5,6,7,8]
const ROW_B = [9,10,11,12,13,14,15,16]

function Track({ nums, reverse }) {
  const doubled = [...nums, ...nums]
  return (
    <div className={`c-track${reverse ? ' rev' : ''}`}>
      {doubled.map((n, i) => (
        <img
          key={i}
          className="c-img"
          src={`/images/carousel-product-${n}.webp`}
          alt=""
          loading="lazy"
          width={280}
          height={200}
        />
      ))}
    </div>
  )
}

export default function Carousel() {
  return (
    <div className="carousel-wrap" aria-hidden="true">
      <div className="carousel-row"><Track nums={ROW_A} /></div>
      <div className="carousel-row"><Track nums={ROW_B} reverse /></div>
    </div>
  )
}
