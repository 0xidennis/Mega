import React from 'react'
import Header from '../Static/Header'
import Hero from '../Hero'
import CreditCardCarousel from '../Component/CreditCardCarousel'
import LoanService from '../Component/LoanService'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <CreditCardCarousel/>
        <LoanService/>
    </div>
  )
}

export default Home