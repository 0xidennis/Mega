import React, { useState } from 'react';
import logo from "../assets/logo/LOGO.png"

const ApplicTwo = () => {
      const [step, setStep] = useState(2);
        const totalSteps = 3;
      
        const handleProceed = () => {
          if (step < totalSteps) {
            setStep(step + 2);
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
              <h2 className="mb-2 text-sm font-medium">Loan Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <select className="bg-[#D9D9D9] p-2 rounded-lg lg:w-50">
                  <option>Purpose</option>
                  <option value="mr">Basic needs</option>
                  <option value="mrs">Education</option>
                  <option value="ms">Business</option>
                  <option value="dr">Emergency</option>
                </select>
                <select className="bg-[#D9D9D9] p-2 rounded-lg lg:w-50 lg:ml-25 ">
                  <option>Tenure</option>
                  <option value="male">0-1year</option>
                  <option value="female">1-2year</option>
                  <option value="other">2-3year</option>
                </select>
                 <div className='lg:flex lg:space-x-5 grid grid-cols-1 gap-2'>
                 <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-50" placeholder="Loan Amount" />
                 </div>
                 <br />
                 
                 <div className='grid mt-2 gap-3'>
                 <h2 className=" text-sm font-medium">Salary Account Details</h2>
                 <div className='lg:flex space-x-5 grid grid-cols-1 gap-2'>
                <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Account Number" type="Account Number" />
                <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Account Name" type="account name" />
                </div>
                 <div className='lg:flex space-x-5 grid grid-cols-1 gap-2'>
                 <select className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71">
                  <option>Bank Name</option>
                  <option value="mr">first bank</option>
                  <option value="mrs">access bank</option>
                  <option value="ms">united bank of africa</option>
                  <option value="dr">unity bank</option>
                </select>
                <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="BVN" type="BVN" />
                </div>
                 </div>
               
              </div>
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

export default ApplicTwo