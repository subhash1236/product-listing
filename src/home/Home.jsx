import React from 'react'
import Navbar from '../components/Navbar'
import Plas from '../components/Plas'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <Navbar/> 
        <HeroSection  />
        <Plas />
        <Footer/>
    </div>
  )
}

export default Home