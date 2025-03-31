import React from 'react'
import finac from './assets/image/finac.png'
import {  Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="min-h-screen  flex items-center justify-center p-4 md:p-8 z-0">
        <div className="absolute top-0 right-0 w-40 h-60 bg-gradient-to-br from-sky-500 to-sky-300 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-50">
      {/* Left side - Circular image */}
      <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
        <div className="relative w-full aspect-square rounded-full  ">
         
          <img src={finac} alt="" />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-25">
          DO YOU NEED <span className="text-[#85C226]">FINANCIAL RELIEF</span>?
        </h1>

        <h2 className="text-xl md:text-2xl font-bold lg:text-2xl">DON'T LET MONEY BE AN ISSUE!</h2>

        <p className="text-gray-600 text-base md:text-lg lg:text-2xl">
          At mega classic we understand that <br />managing finances can be challenging. <br /> Mega classic credit is here for you
          with <br />a suitable and flexible financial solution <br />to help you achieve your goals.
        </p>
        <Link to="/get-started">
        <button className="w-full md:w-auto bg-[#3BB3C3] hover:bg-teal-600 text-white py-2 px-30 rounded-md text-lg">
          Apply for loan Now
        </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-70 h-120 bg-gradient-to-br from-sky-500 to-sky-300 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
  </main>
  )
}

export default Hero