import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Components/RootLayout.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Products from './Components/Products.jsx'
import HeroForm from './Components/HeroForm.jsx'
import Visite from './Components/Visite.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout, Home,
    children: [
      {
        path: '/About',
        Component: About
      },
      {
        path: '/Home',
        Component : Home
      },
      {
        path: '/Products',
        Component: Products
      },
      {
        path: '/HeroForm',
        Component: HeroForm
      },
      {
        path: '/Visite',
        Component: Visite
      }
    ]
  },
  {

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
