import React, { useState } from 'react';
import logo from "../assets/logo/LOGO.png"
 



const ApplicOne = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleProceed = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <div className="bg-[url('/loan.png')]  bg-cover  bg-no-repeat h-screen ">
      <div className="max-w-2xl  bg-white shadow-lg rounded-lg overflow-hidden p-6 mx-auto ">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4">
        <div className="flex items-center gap-2">
           <img src={logo} alt="Logo" className="w-35 h-10"/>
        </div>
        <div className="text-lg font-medium text-[#85C226]">
          {step}/{totalSteps}
        </div>
      </header>

      {/* Form Content */}
      <div className="p-6">
        <h1 className="mb-6 text-center text-2xl font-medium text-[#3BB3C3]">Application Form</h1>

        {/* Personal Information Section */}
        <div className="mb-6">
          <h2 className="mb-4 text-sm font-medium">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <select className="bg-[#D9D9D9] p-2 rounded-lg lg:w-30">
              <option>Title</option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="dr">Dr.</option>
            </select>
            <select className="bg-[#D9D9D9] p-2 rounded-lg lg:w-30 lg:ml-40 ">
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
             <div className='lg:flex lg:space-x-5 grid grid-cols-1 gap-2'>
             <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-50" placeholder="First Name" />
            <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-40" placeholder="Middle Name" />
            <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-45 " placeholder="Last Name" />
             </div>
             <br />
            <div className='lg:flex space-x-5 grid grid-cols-1 gap-2'>
            <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-50 w-full" placeholder="Phone Number" type="tel" />
            <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-40 w-full" placeholder="Date of Birth" type="date" />
            <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-45" placeholder="Email" type="email" />
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6">
          <p className="text-sm text-[#ED590F]">
            <span className="font-medium ">Terms and Conditions:</span> I consent to MEGA CLASSIC obtaining information
            from request parties as may be necessary on my loan application, salary, employment verification, and other
            related information. I also authorize my employer to deduct the loan repayment amounts/installments from my
            salary monthly at source/before credit to my account. Any outstanding loan due to default should be
            recovered automatically from any source.
          </p>
        </div>

        {/* Checkbox */}
        <div className="mb-6 flex items-center gap-2">
          <input type="checkbox" id="terms" className="h-4 w-4 text-teal-500" />
          <label htmlFor="terms" className="text-sm">
            I have read and accept your terms and conditions
          </label>
        </div>

        {/* Proceed Button */}
        <button onClick={handleProceed} className="w-full bg-[#3BB3C3] hover:bg-teal-600 text-white p-2 rounded">
          Proceed
        </button>
      </div>
    </div>
    </div>
  )
}

export default ApplicOne