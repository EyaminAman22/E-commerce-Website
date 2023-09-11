import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Searchbar from './layouts/Searchbar'
import Footer from './layouts/Footer'

const RootLayouts = () => {
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <Outlet/>
    <Footer/> 
    </>
  )
}

export default RootLayouts