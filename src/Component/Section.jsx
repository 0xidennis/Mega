import React from 'react'
import classic from '../assets/image/classic.png'

const Section = ({ title, content }) => {
  return (
    <div className=" p-6   relative lg:ml-60 w-full">
    <h3 className="font-semibold text-lg mb-2 shadow-lg bg-[#FFFFFF] py-2 px-2 text-center z-0 rounded-t-lg opacity-50">{title}</h3>
    <p className="text-gray-700 text-md shadow-md bg-[#FFFFFF] p-2 z-1 rounded-t-lg opacity-50">{content}</p>
    <span className="absolute top-6 right-8 "> <img src={classic} alt="" width={30} /></span>
  </div>
  )
}

export default Section