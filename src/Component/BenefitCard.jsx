import React from 'react'

const BenefitCard = ({ title, color, image, alt }) => {
  return (
    <div
    className={`relative flex flex-col items-center justify-end p-6 rounded-lg h-44 md:h-52 lg:h-64 w-full max-w-xs ${color} text-white overflow-hidden`}
  >
  <div className='flex'>
  <div className="z-10  font-medium text-lg md:text-xl mt-10">{title}</div>
    <div className="flex inset-0 w-full h-full">
      <img src={image} alt={alt} className=" ml-auto w-35 h-45" />
    </div>
  </div>
  </div>
  )
}

export default BenefitCard