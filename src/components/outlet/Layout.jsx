
import Header from '../layout/header/Header'
import Footer from "../layout/footer/Footer";
import { Outlet } from 'react-router-dom'
import ConextProvider from '../context/ConextProvider'
import ScrollToTop from '../scrollTop/ScrolltoTop'

function Layout() {
  return (
    <>
       <ScrollToTop />
      <ConextProvider>
        <Header />
        <div className="main mt-25!">
          <Outlet />
        </div>
        <Footer />
      </ConextProvider>
    </>
  )
}

export default Layout