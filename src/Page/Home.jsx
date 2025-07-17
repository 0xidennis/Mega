import React from 'react'
import Header from '../Static/Header'
import Hero from '../Hero'
import CreditCardCarousel from '../Component/CreditCardCarousel'
import LoanService from '../Component/LoanService'
import About from '../Component/About'
import Footer from '../Static/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-20'>
        
        <Hero/>
        <CreditCardCarousel/>
        {/* <LoanService/>
        <About/> */}
        
    </div>
  )
}

export default Home