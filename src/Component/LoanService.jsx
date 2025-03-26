import React from 'react'
import man from "../assets/image/man.png"
import lady from "../assets/image/lady.png"
import woman from "../assets/image/woman.png"
import girl from "../assets/image/girl.png"

const LoanService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-60">
    <h1 className="text-2xl font-bold text-center text-cyan-500 mb-8">LOAN SERVICES</h1>

    {/* Personal Loans */}
    <div className="bg-slate-50 rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center gap-4">
      <div className="md:w-1/6">
        {/* <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Person with glasses"
          width={150}
          height={150}
          className="rounded-full"
        /> */}
        <img src={man} alt="" height={150}/>
      </div>
      <div className="md:w-3/4">
        <h2 className="text-lg font-bold mb-2">Personal Loans</h2>
        <p className="text-sm text-gray-700">
          We provide quick and accessible loans to individuals. Our personal loan makes it easy for your quick
          investment opportunities, house rent, school fees, purchase of household items, and other personal expenses.
          We have disbursement within 24 hours, flexible interest rates on a reducing balance. Flexible repayment plan
          of UPTO 24 MONTHS and we also trust that you have your back at all times.
        </p>
      </div>
    </div>

    {/* Small Business Loans */}
    <div className="bg-slate-50 rounded-lg p-6 mb-6 flex flex-col md:flex-row-reverse items-center gap-4">
      <div className="md:w-1/4">
        {/* <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Woman with tablet"
          width={150}
          height={150}
          className="rounded-full"
        /> */}
        <img src={lady} alt="" />
      </div>
      <div className="md:w-3/4">
        <h2 className="text-lg font-bold mb-2">Small Business Loans</h2>
        <p className="text-sm text-gray-700">
          MEGA CLASSIC business loan build the ladder for entrepreneur to climb with our low interest rate and
          flexible repayment plan loan design to suit entrepreneur
        </p>
      </div>
    </div>

    {/* Federal and States Employees Loans */}
    <div className="bg-slate-50 rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center gap-4">
      <div className="md:w-1/4">
        {/* <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Woman in red"
          width={150}
          height={150}
          className="rounded-full"
        /> */}
        <img src={woman} alt=""height={30}/>
      </div>
      <div className="md:w-3/4">
        <h2 className="text-lg font-bold mb-2">Federal and States Employees Loans</h2>
        <p className="text-sm text-gray-700">
          MEGA CLASSIC business loan build the ladder for entrepreneur to climb with our low interest rate and
          flexible repayment plan loan design to suit entrepreneur
        </p>
      </div>
    </div>

    {/* Asset Financing */}
    <div className="bg-slate-50 rounded-lg p-6 mb-6 flex flex-col md:flex-row-reverse items-center gap-4">
      <div className="md:w-1/4">
        {/* <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Person in corner"
          width={150}
          height={150}
          className="rounded-full"
        /> */}
        <img src={girl} alt="" />
      </div>
      <div className="md:w-3/4">
        <h2 className="text-lg font-bold mb-2">Asset Financing</h2>
        <p className="text-sm text-gray-700">
          Mega classic asset financing is tailored and ready to make customers own a period of time. We help you
          acquire your dream car, office equipment, office and house appliances, workshop machine with our low
          interest rate on a reducing balance loan.
        </p>
      </div>
    </div>

    {/* Apply Button */}
    <div className="text-center mt-8">
      <button className="bg-[#3BB3C3] hover:bg-cyan-600 text-white px-8 py-2 rounded-md">Apply for Loan Now</button>
    </div>
  </div>
  )
}

export default LoanService