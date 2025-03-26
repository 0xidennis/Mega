import React from 'react'
import Header from '../Static/Header'
import Hero from '../Hero'
import CreditCardCarousel from '../Component/CreditCardCarousel'
import LoanService from '../Component/LoanService'
import About from '../Component/About'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <CreditCardCarousel/>
        <LoanService/>
        <About/>
    </div>
  )
}

export default Home