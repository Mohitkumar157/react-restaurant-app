
import Button from "./Button";
function MenuCard({cardData}) {
  return (
    <div className='card relative p-6! border border-[#b92e2d33] rounded-xl hover:bg-[#f8efd8] transition-all duration-500 ease-in group'>
      <div className="img-wraper w-37.5 h-37.5 lg:absolute -top-[24%] left-[12%] rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 ease-in">
        <img src={cardData.menuImage} alt={cardData.heading} className="w-full" loading="lazy"/>
      </div>
      <div className="card-body pt-16!">
      <div className="rating-section flex gap-2.5 mb-2.5!">
        <img src={cardData.rating[0]} alt="rating-image" loading="lazy"/> 
        <span className="text-[18px] luckiest-guy">{cardData.rating[1]}</span>
      </div>
      <div className="related-content">
        <h2 className="text-[24px]">{cardData.heading}</h2>
        <p className="py-6!">{cardData.para}</p>
        <div className="btn-wraper">
          <Button>Start Order</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MenuCard;