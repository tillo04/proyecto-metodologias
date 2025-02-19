import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componentes/layouts/pages/tienda/Home.jsx"

let router =  createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
