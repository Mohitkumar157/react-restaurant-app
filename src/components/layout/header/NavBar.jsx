import { useGSAP } from "@gsap/react";
import arrow from "../../../assets/images/arrow.svg";
import DropDownMenu from "../../Menu/DropDownMenu";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
function NavBar() {
    const navRef = useRef();
    const dropDownRef = useRef();
    const sectionRef = useRef()
    useGSAP(() => {

        gsap.set(".drop-down-menu", {
            height: 0,
            
        });
        const tl = gsap.timeline({ paused: true });
        tl.to(dropDownRef.current, {
            height: "auto",
            opacity: 1,
            duration: .4,
           
        });

        const handlerPlay = () => {
            tl.play();
        };
        const handlerPaused = () => {
            tl.reverse();
        }
        navRef?.current.addEventListener("mouseenter" , handlerPlay);
        navRef?.current.addEventListener("mouseleave" , handlerPaused);
        dropDownRef?.current.addEventListener("click" , handlerPaused);
        return () =>{
            navRef?.current.removeEventListener("mouseenter" , handlerPlay);
            navRef?.current.removeEventListener("mouseleave" , handlerPaused);
            dropDownRef?.current.removeEventListener("click" , handlerPaused)

        }
    }, {scope : sectionRef.current})
    return (
        <>
            <div className=' w-[.5px] h-28 bg-[#b92c2d]'></div>
            <div ref={sectionRef} className='navbar h-[-webkit-fill-available] items-center flex gap-11 luckiest-guy text-[18px] uppercase tracking-[.95px]'>
                <Link to="" >Home</Link>
                <Link to="/about">About</Link>

                <div ref={navRef}  className="our-menu-wraper h-full flex group">
                    <h5 className="flex items-center gap-2 hovr-item">
                        Our Menu
                        <img src={arrow} alt="down-arrow" loading="lazy"
                        className="group-hover:rotate-180 transition-all duration-500" />
                    </h5>
                    <div ref={dropDownRef} className="drop-down-menu absolute z-40 top-full left-0 w-full overflow-hidden   ">
                        <DropDownMenu />
                    </div>
                </div>

                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className=' w-[.5px] h-28 bg-[#b92c2d]'></div>
        </>
    )
}

export default NavBar