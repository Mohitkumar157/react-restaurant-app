import { FaShoppingCart } from "react-icons/fa";
import useCart from "../context/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function MenuCard({ data }) {
    const { addToCart, loadingId } = useCart();
    const navigate = useNavigate();



    return (
        <div
            onClick={() => navigate(`/menu/${data.id}`)}
            className="card relative flex flex-col md:flex-row items-center cursor-pointer"
        >

            <div className="img-wraper w-full md:w-[40%] rounded-lg overflow-hidden">
                <img src={data.img} alt={data.name} className="w-full h-auto" loading="lazy"/>
            </div>
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
            <div className="hover:bg-[#f8eed8] transition-colors duration-300 content w-full md:w-[60%] md:border border-[#b92e2d33] p-4! rounded-lg rounded-l-none!">
                <div className="item-name">
                    <div className="rating flex gap-4">
                        <img src={data.ratingImg} alt={data.ratingImg} className="w-20" loading="lazy"/>
                        <h5 className="text-[#002922]">{data.rating}</h5>
                    </div>
                    <h5 className="text-[24px] text-[#002922] my-2.5! ">{data.name}</h5>
                    <h5 className="text-[24px] text-[#002922] mb-2.5!"><span className="font-bold">₹</span> {data.price}</h5>
                </div>
                <div className="add-toCard-btn inline-block">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(data)
                        }}
                        className=" hover:bg-[#b92e2d] hover:text-[white] hover:border-[#b92e2d] transition-colors duration-300 cursor-pointer flex justify-center items-center gap-1 luckiest-guy text-[#b92e2d] font-bold border border-[#b92e2d] rounded-lg py-2! px-6! relative"
                        disabled={data.id === loadingId}
                    >
                        {data.id === loadingId && <span className="absolute w-full h-full flex justify-center items-center  backdrop-blur-[1px]"><ClipLoader size={30} color="#fff" /></span>}
                        Add to Cart <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;