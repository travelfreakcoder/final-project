
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Header from "./Layouts/Header"
import Home from "./Components/Home"
import Shop from "./Components/Shop"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import ProductDetails from "./Components/ProductDetails"
import { Toaster } from "sonner"
import PrivateRouter from "./utils/PrivateRouter"

function App() {


  const router=createBrowserRouter([
    {
      path:"/",
      element:<Header/>,
      children:[
        {
          path:"/signin",
          element:<Signin/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          element:<PrivateRouter/>,
          children:[
            {
              path:"/",
              element:<Home/>
            },
            {
              path:"/shop",
              element:<Shop/>
            },
            {
              path:"/blog",
              element:<Blog/>
            },
            {
              path:"/contact",
              element:<Contact/>
            },
            {
              path:"/cart",
              element:<Cart/>
            },
            
            {
              path:"/productdetails/:id",
              element:<ProductDetails/>
            }
          ]
        }
      ]
    }
  ])
  

  return (
    <>
    <Toaster position="top-right" richColors/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
