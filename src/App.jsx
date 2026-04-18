import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import Layout from "./components/outlet/Layout"
import AboutUs from "./components/pages/AboutUs"
import Blog from "./components/pages/Blog";
import OurMenu from "./components/pages/OurMenu";
import MenuDetails from "./components/OurMenu/MenuDetails";
import Contact from "./components/pages/Contact";
function App() {

  const routes = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <AboutUs />
        },
        {path : "/blog",
          element : <Blog />
        },
         {path : "/contact",
          element : <Contact />
        },
        {path : "/menu",
          element : <OurMenu />
        },
        {
          path : "/menu/:id",
          element : <MenuDetails />
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App