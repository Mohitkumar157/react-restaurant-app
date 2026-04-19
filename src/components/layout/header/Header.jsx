import Logo from "./Logo"
import NavBar from "./NavBar"
import Cart from "./Cart"
import HumburgerMenu from "./HumburgerMenu"
import { useEffect, useState } from "react"



function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      setScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    }
  }, []);
  console.log(window.scrollY);
  console.log(scroll);

  return (
    <>
      <div className={`header fixed top-0 left-0 w-full  z-50 border-b border-[#b92c2d] max-[950px]:hidden transition-all duration-500 ease-in-out
       ${scroll ? "bg-[#f8efd8] shadow-md translate-y-0 py-3"
          : "bg-transparent -translate-y-1 py-5"} `}>
        <div className="container flex justify-between items-center">
          <Logo />
          <NavBar />
          <Cart />
        </div>
      </div>
      <HumburgerMenu scroll={scroll} />
    </>
  )
}

export default Header