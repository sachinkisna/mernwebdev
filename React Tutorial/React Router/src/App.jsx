import { useState } from 'react'

import './App.css'
import Nav from '../src/compnonents/Nav.jsx'
import Home from '../src/compnonents/Home.jsx'
import Footer from '../src/compnonents/Footer.jsx'
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
    <Nav />
    <Outlet></Outlet>
    <Footer />
      
    </>
  )
}

export default App
