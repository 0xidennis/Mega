import React from 'react'
import man from "../assets/image/man.png"
import lady from "../assets/image/lady.png"
import woman from "../assets/image/woman.png"
import girl from "../assets/image/girl.png"
import {  Link } from "react-router-dom";

const LoanService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-60 items-center overflow-hidden justify-center">
    <h1 className="text-2xl font-bold text-center text-cyan-500 mb-8">LOAN SERVICES</h1>

    {/* Personal Loans */}
    <div className=" rounded-lg  mb-6 flex flex-col md:flex-row items-center gap-4">
      <div className="md:w-1/6">
       
        <img src={man} alt="" height={150}  className='h-55 lg:ml-[80px] relative z-10 lg:mb-4'/>
      </div>
      <div className="md:w-3/4 bg-[#F1F6FF] p-6">
        <h2 className="text-lg font-bold mb-2 text-center">Personal Loans</h2>
        <p className="text-sm text-gray-700 lg:ml-12">
          We provide quick and accessible loans to individuals. Our personal loan makes it easy for your quick
          investment opportunities, house rent, school fees, purchase of household items, and other personal expenses.
          We have disbursement within 24 hours, flexible interest rates on a reducing balance. Flexible repayment plan
          of UPTO 24 MONTHS and we also trust that you have your back at all times.
        </p>
      </div>
    </div>

    {/* Small Business Loans */}
    <div className=" rounded-lg  mb-6 flex flex-col md:flex-row-reverse items-center gap-4 lg:w-200 lg:ml-20">
      <div className="md:w-1/4">
       
        <img src={lady} alt="" className='lg:ml-[-55px]'/>
      </div>
      <div className="md:w-3/4 bg-[#F1F6FF] p-10">
        <h2 className="text-lg font-bold mb-2 text-center">Small Business Loans</h2>
        <p className="text-sm text-gray-700">
          MEGA CLASSIC business loan build the ladder for entrepreneur to climb with our low interest rate and
          flexible repayment plan loan design to suit entrepreneur
        </p>
      </div>
    </div>

    {/* Federal and States Employees Loans */}
    <div className=" rounded-lg  mb-6 flex flex-col md:flex-row items-center lg:w-200  gap-4">
      <div className="md:w-1/4">
       
        <img src={woman} alt=""height={5} className='h-45 lg:ml-[169px] relative z-10 '/>
      </div>
      <div className="md:w-3/4 bg-[#F1F6FF] p-10  ">
        <h2 className="text-lg font-bold mb-2 text-center">Federal and States Employees Loans</h2>
        <p className="text-sm text-gray-700 lg:ml-12">
          MEGA CLASSIC business loan build the ladder for entrepreneur to climb with our low interest rate and
          flexible repayment plan loan design to suit entrepreneur
        </p>
      </div>
    </div>

    {/* Asset Financing */}
    <div className=" rounded-lg mb-6 flex flex-col md:flex-row-reverse items-center gap-4 lg:w-200 lg:ml-20">
      <div className="md:w-1/4">
       
        <img src={girl} alt="" className='lg:ml-[-55px]' />
      </div>
      <div className="md:w-3/4 bg-[#F1F6FF] p-10">
        <h2 className="text-lg font-bold mb-2 text-center">Asset Financing</h2>
        <p className="text-sm text-gray-700">
          Mega classic asset financing is tailored and ready to make customers own a period of time. We help you
          acquire your dream car, office equipment, office and house appliances, workshop machine with our low
          interest rate on a reducing balance loan.
        </p>
      </div>
    </div>

    {/* Apply Button */}
    <div className="text-center mt-8">
      <Link to="/get-started">
      <button className="bg-[#3BB3C3] hover:bg-cyan-600 text-white px-20 py-4 rounded-md shadow-lg item-center  justify-center">Apply for Loan Now</button>
      </Link>
    </div>
  </div>
  )
}

export default LoanService