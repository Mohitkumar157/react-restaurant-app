import closeIcon from "../../assets/images/close-icon.svg";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import useCart from "../context/hooks/useCart";



function CartItem({ data }) {
  const { removeToCart, addToCart, dicreaseQuantity ,updateQuantity } = useCart();


  return (
    <div className="cart-item flex items-center gap-4  py-4!">
      <div className="img-wraper max-w-20 overflow-hidden rounded-md"><img src={data.img} alt={data.name} loading="lazy" /></div>
      <div className="related-content w-full">
        <h5>{data.name}</h5>
        <h5>₹{data.price}</h5>
        <p
          onClick={(e) => {
            e.stopPropagation()
            removeToCart(data)
          }}
          className="hover:text-[#b92e2d] transition-colors duration-300 cursor-pointer w-fit">remove</p>
      </div>
      <div className="quantity flex items-center border border-[#acabab] ">
        <button
          onClick={(e) => {
            e.stopPropagation()
            dicreaseQuantity(data)
          }}
          className=" py-0! px-4!  h-10 flex justify-center items-center">
          <FiMinus />
        </button>

        <span className="border-l border-r w-12.5 flex justify-center items-center border-[#acabab] px-6! py-2.5!">{data.quantity}</span>

        <button
          onClick={(e) => {
            e.stopPropagation()
            updateQuantity(data)
          }}
          className=" py-0! px-4! h-10 flex justify-center items-center">
          <FaPlus />
        </button>
      </div>
    </div>
  )
}


function UserCart({ setIsOpen }) {
  const { allData } = useCart();
  const total = allData.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0)
  return (
    <div className='w-full lg:w-135 md:w-135 z-9999 sm:w-auto user-cart bg-[#f8efd8] rounded-lg p-7! fixed top-[6.2%] md:top-[0%] left-[50%] -translate-x-1/2 translate-y-1/8'>
      <div className="cart-head flex justify-between pb-4!">
        <h5 className="text-[24px]">Your Cart</h5>
        <img src={closeIcon} alt="Close-icon" className="cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      {!allData.length ? <p className="py-16! text-center">Your cart is empty</p>
        :
        <div className="wraper-001">
          <div className="cart-items-wraper border-t border-b border-[#00292233] max-h-60 overflow-y-scroll">

            {allData.map((item) => <CartItem data={item} key={item.id} />)}

          </div>
          <div className="cart-footer py-4!">
            <div className="subtotal flex justify-between py-6!">
              <h5 className="text-[24px]">Subtotal</h5>
              <h5 className="total text-[24px]">₹{total}</h5>
            </div>
            <div className="checkout-btn">
              <button className="luckiest-guy py-3! w-full rounded-lg bg-[#b92e2d] text-[white]">Continue to Checkout</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default UserCart;