import React from 'react'

const Section = ({ title, content }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-700 text-sm">{content}</p>
    <span className="absolute top-2 right-2 bg-green-400 w-4 h-4 rounded-full"></span>
  </div>
  )
}

export default Section