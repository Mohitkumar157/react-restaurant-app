
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
        <Outlet />
        <Footer />
      </ConextProvider>
    </>
  )
}

export default Layout