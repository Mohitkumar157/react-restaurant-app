import { useEffect, useRef, useState } from 'react';
import cartImg from '../../../assets/images/cart.svg';
import UserCart from '../../cart/UserCart';
import Button from '../../ui/Button';
import useCart from '../../context/hooks/useCart';
function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const cartRef = useRef();
    const {allData} = useCart();

    useEffect(() => {
         if(!isOpen) return ;
        function handlerClickOutside(e){
            if(cartRef.current && !cartRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handlerClickOutside)
        return () =>{
            document.removeEventListener("click" , handlerClickOutside);
        }
    } , [isOpen])

    function handlerCart() {
        setIsOpen((pre => !pre ));
    }



    return (
        <div className='add-to-cart flex items-center gap-7' ref={cartRef}>
            <div className="cart relative cursor-pointer" onClick={handlerCart}>
                <div className="flex items-center justify-center item-count absolute bg-[#b92c2d] text-white left-3 bottom-3.75 w-5 h-5 rounded-[20px] text-[12px] font-bold">
                    {allData ? allData.length : 0}
                </div>
                <img src={cartImg} alt="cart-logo" loading='lazy'/>
            </div>
            <div className='hidden md:block add-to-cart-line w-px h-12.5 bg-[#b92c2d] rounded-xs'></div>
            <div className="start-order-btn hidden md:block" >
                <Button>Start Order</Button>
            </div>
            {isOpen && <UserCart setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Cart