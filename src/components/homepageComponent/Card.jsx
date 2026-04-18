
function Card({ref, img, className, title, para, children }) {
  return (
    <div ref={ref} className='sec-card card p-4! flex flex-col justify-center items-center gap-2 relative'>
      {children}
      <img src={img} alt={title} className='mb-8!' loading="lazy" />
      <h4 className={` ${className || ""} text-[24px]! luckiest-guy mb-3!`}>{title}</h4>
      <p className="text-center">{para}</p>

    </div>
  )
}

export default Card