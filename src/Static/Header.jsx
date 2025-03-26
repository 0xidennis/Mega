import React from 'react'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo/LOGO.png"

const Header = () => {
    const [active, setActive] = useState("Home");

  return (
    <header className="w-full bg-white ">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 ml-12">
        <img src={logo} alt="" className='w-35 h-10' />
        {/* <div className="text-[#30b3c7] font-bold">
          <div className="text-lg leading-tight">MEGA CLASSIC</div>
          <div className="text-2xl leading-tight">CREDIT</div>
        </div> */}
      </div>

      <nav className="hidden lg:flex items-center justify-between p-4  bg-white mr-12">
      <div className="flex space-x-6 mr-10">
        {[
          { name: "Home" },
          { name: "Loans" },
          { name: "About" }
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`relative px-3 py-2 text-lg font-medium transition-colors ${
              active === item.name ? "bg-[#EBEBEB] text-[#3BB3C3]" : " text-[#3BB3C3]"
            }`}
          >
            {item.name}
            {active === item.name && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500"></span>
            )}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#3BB3C3] rounded-lg shadow hover:bg-teal-600">
        Get Started <FaArrowRight className='bg-white text-[#3BB3C3]' />
      </button>
      {/* <hr className='w-100 mt-20'/> */}
    </nav>
    
    </div>
  </header>
  )
}

export default Header