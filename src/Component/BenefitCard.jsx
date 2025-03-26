import React from 'react'

const BenefitCard = ({ title, color, image, alt }) => {
  return (
    <div
    className={`relative flex flex-col items-center justify-end p-6 rounded-lg h-44 md:h-52 lg:h-64 w-full max-w-xs ${color} text-white overflow-hidden`}
  >
    <div className="z-10 text-center font-medium text-lg md:text-xl">{title}</div>
    <div className="absolute inset-0 w-full h-full">
      <img src={image} alt={alt} className="object-cover object-center w-full h-full" />
    </div>
  </div>
  )
}

export default BenefitCard