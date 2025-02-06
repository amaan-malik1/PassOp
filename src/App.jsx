import { useState } from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import About from './components/About'
import Contact from './components/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar />
        <Manager />

      </div>
  },
  {
    path: '/about',
    element:
      <div>
        <Navbar />
        <About />
      </div>
  },
  {
    path: '/contact',
    element:
      <div>
        <Navbar />
        <Contact />
      </div>
  },


])

function App() {

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
