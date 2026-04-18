import freeShiping from "../../assets/images/free-shiping.svg";
import Specialdiscounts from "../../assets/images/special-discount.svg";
import Buyersprotection from "../../assets/images/buyers-protuction.svg";
import Customerservice from "../../assets/images/castumer-service.svg";
import star from "../../assets/images/star.svg";
import { useParams } from "react-router-dom";
import allMenuData from "../../data/menuData";
import { Toaster } from "react-hot-toast";
import Button from "../ui/Button";
import { useState } from "react";
import useCart from "../context/hooks/useCart";
const custumerService = [
    {
        img : freeShiping,
        title  : "Free shipping",
        subTitle : "Standard shipping"
    },
     {
        img : Specialdiscounts,
        title  : "Special discounts",
        subTitle : "Guaranteed saving"
    },
      {
        img : Buyersprotection,
        title  : "Buyers protection",
        subTitle : "Secure payment"
    },
      {
        img : Customerservice,
        title  : "Customer service",
        subTitle : "Give us feedback"
    }
]




function MenuDetails() {
    const [quantity , setQuantity] = useState(1);
    const {custumQuantity} = useCart();
    const params = useParams();
    const currentItem = allMenuData.find((item) => item.id === parseInt(params.id));
    const { img, name, price, rating } = currentItem;
    const tastyPicks = allMenuData.filter((item) => currentItem.tastyPicks.includes(item.id));


   
    return (

        
        <div className='menu-detail'>
            {<Toaster position="top-right"
                toastOptions={{
                    style: {
                        background: "#f8eed8",
                        color: "#fff",
                        border: "1px solid #dc2626",
                        boxShadow: "none", 
                    },
                    duration: 3000, 
                }}
            />}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 py-16!">
                {!currentItem ? <p>Item not found</p> :
                    <>
                        <div className="left rounded-lg overflow-hidden">
                            <img src={img} alt={name} className="w-full h-full" loading="lazy" />
                        </div>

                        <div className="right flex flex-col justify-between rounded-lg border border-[#f1d1c7]">
                            <div className="p-6!">
                                <h5 className="text-[40px]">{name}</h5>
                                <div className="quantity-weight flex gap-7 mb-10!">
                                    <p>Net Qty : 500g</p>
                                    <p className="flex items-center gap-1"><span className="rating flex bg-[#b92e2d] py-0.5! px-3! text-white rounded-[5px]"><img src={star} alt="star" />{rating}</span> Rating</p>
                                </div>
                                <h5 className="text-[32px] mb-5!">₹{price}</h5>
                                <p className='related-para'>
                                    {currentItem.highlights}
                                </p>
                                <div className="quantity flex items-center gap-4 my-6! text-[18px]">
                                    <h5>Quantity</h5>
                                    <input 
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    type="number" 
                                    id="qty" 
                                    name="qty" 
                                    min="1" 
                                    max="10" 
                                    step="1" 
                                    value={quantity}
                                        className="p-2! w-15 outline-0 border border-[#f1d1c7] rounded-sm  text-[#b92e2d]" />
                                </div>
                                <div className="order-now-btn mb-6!">
                                    <button 
                                    onClick={() =>{
                                         custumQuantity(currentItem , quantity)
                                         setQuantity(1);
                                    }}
                                    className="luckiest-guy text-[#b92e2d] border py-2! px-4! rounded-lg tracking-wide uppercase cursor-pointer" >Order Now</button>
                                </div>
                            </div>
                            <div className="calories-fiber flex border-t border-[#ccc]">
                                <div className="calories  p-9! text-center ">
                                    <h5>Calories</h5>
                                    <p>{currentItem?.nutrition?.calories}</p>
                                </div>
                                <div className="fiber border-l border-r border-[#ccc] p-9! text-center">
                                    <h5>Dietary fiber</h5>
                                    <p>{currentItem?.nutrition?.dietaryFiber}</p>
                                </div>
                                <div className="fiber  p-9! text-center">
                                    <h5>Protein</h5>
                                    <p>{currentItem?.nutrition?.protein}</p>
                                </div>

                            </div>
                        </div>
                    </>}
            </div>

            <div className="castumer-service py-16!">
                <div className="container grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1">
                  {custumerService.map((service , i) => <CastumerService  service = {service} key={i}/>)}
                </div>
            </div>
            <div className="Tasty-Picks py-16!">
                <div className="container pt-16! grid lg:grid-cols-3 gap-4 md:grid-col-2 sm:grid-cols-1">
                 {tastyPicks.map((item) => <RecomandedItem cardData = {item} key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default MenuDetails;



function CastumerService({service}){

    return (
        <div className="service flex gap-4">
            <img src={service.img} alt={service.name} loading="lazy"/>
            <div className="service-content">
                <h5 className="text-[18px]">{service.title}</h5>
                <span>{service.subTitle}</span>
            </div>
        </div>
    )
};



function RecomandedItem({cardData}){
    return(
        <div className='card relative p-6! border border-[#b92e2d33] rounded-xl'>
      <div className="img-wraper w-37.5 h-37.5 absolute -top-[24%] left-[12%] rounded-lg overflow-hidden">
        <img src={cardData.img} alt={cardData.name} loading="lazy" className="w-full h-full"/>
      </div>
      <div className="card-body pt-16!">
      <div className="rating-section flex gap-2.5 mb-2.5!">
        <img src={cardData.ratingImg} alt="rating" loading="lazy"/> <span className="text-[18px] luckiest-guy">{cardData.rating}</span>
      </div>
      <div className="related-content">
        <h2 className="text-[24px]">{cardData.name}</h2>
        <p className="py-6!">{cardData.highlights}</p>
        <div className="btn-wraper">
          <Button>Start Order</Button>
        </div>
      </div>
      </div>
    </div>
    )
}