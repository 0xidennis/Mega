import React from 'react'
import Section from './Section'

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6 bg-[url('/mancoat.png')] bg-cover bg-center bg-no-repeat">
    <h2 className="text-2xl font-bold mb-6">About us</h2>
    <div className="flex flex-col md:flex-row items-center max-w-4xl bg-white shadow-lg rounded-lg p-6">
      <img
        src="/businessman.png" // Replace with actual image path
        alt="Businessman"
        className="w-1/3 rounded-lg hidden md:block"
      />
      <div className="flex flex-col w-full md:w-2/3 space-y-4">
        <Section
          title="WHO WE ARE"
          content="MEGA CLASSIC WORLD is a company registered in Nigeria since 2007. Mega Classic is a growing financing organization with deep roots in financing. In MEGA CLASSIC WORLD, we are committed to meet our clients' needs in terms of satisfaction, accountability, and on-time delivery of our service."
        />
        <Section
          title="OUR VISION"
          content="VISION: To be a leading financial solution in Nigeria and Africa at large whilst making the company an ever-increasing service provider."
        />
        <Section
          title="OUR MISSION"
          content="To meet the expectations of our various clients and stakeholders at a reasonable value of money whilst providing continuity and accountability to our client and stakeholder."
        />
      </div>
    </div>
  </div>
  )
}

export default About