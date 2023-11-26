import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
import ContactFooter from './ContactFooter'

const Home = () => {
  return (
    <div className='bg-[#000300]'>
        <Navbar />
        <LandingPage />
        <About />
        <ContactFooter />
    </div>
  )
}

export default Home