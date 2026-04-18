import Logo from "./Logo"
import NavBar from "./NavBar"
import Cart from "./Cart"
import HumburgerMenu from "./HumburgerMenu"



function Header() {
  return (
    <>
      <div className="header relative z-50 border-b border-[#b92c2d] max-[950px]:hidden">
        <div className="container flex justify-between items-center">
          <Logo />
          <NavBar />
          <Cart />
        </div>
      </div>
      <HumburgerMenu />
    </>
  )
}

export default Header