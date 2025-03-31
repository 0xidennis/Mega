import React, { useState } from 'react';
import logo from "../assets/logo/LOGO.png"

const ApplicThre = () => {
      const [step, setStep] = useState(2);
           const totalSteps = 3;
         
           const handleSubmit = () => {
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
       
              
           
                    
                    <div className='grid mt-2 gap-3'>
                    <h2 className=" text-sm font-medium">Employment Details</h2>
                    <div className='lg:flex space-x-5 grid grid-cols-1 gap-2'>
                   <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Name of Employer" type="Name of Employer" />
                   <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Address" type="Address" />
                   </div>
                    <div className='lg:flex space-x-5 grid grid-cols-1 gap-2'>
                    <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Position" type="Position" />
                   <input className="bg-[#D9D9D9] p-2 rounded-lg lg:w-71 w-full" placeholder="Work Address" type="Work Address" />
                   </div>
                    </div>
                
                 </div>
                    {/* Proceed Button */}
               <button onClick={handleSubmit} className="w-full bg-[#3BB3C3] hover:bg-teal-600 text-white p-2 rounded">
               Submit Application
               </button>
               </div>
               
       
              
             </div>
  )
}

export default ApplicThre