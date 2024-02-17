import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'
import Product from './Product'
import Newsletter from './Newsletter'
import MyFooter from './Footer'
import { Footer } from 'flowbite-react'
const Hero = () => {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Services></Services>
    <About></About>
    <Product></Product>
    <Newsletter></Newsletter>
    <MyFooter></MyFooter>



    </>

  )
}

export default Hero