import React from 'react'
import finac from './assets/image/finac.png'

const Hero = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-4 md:p-8">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-50">
      {/* Left side - Circular image */}
      <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
        <div className="relative w-full aspect-square rounded-full  ">
          {/* <image
            src={finac}
            alt="Financial items including calculator, percentage symbol, and currency"
            fill
            className="object-cover"
            priority
          /> */}
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

        <button className="w-full md:w-auto bg-[#3BB3C3] hover:bg-teal-600 text-white py-2 px-30 rounded-md text-lg">
          Apply for loan Now
        </button>
      </div>
    </div>
  </main>
  )
}

export default Hero