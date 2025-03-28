import React from 'react'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#666666] text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>declan4success@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>08060186266</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>311 Gren Road, Uyo, Akwa Ibom state</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm border border-white p-2 mb-10">Like and Follow us on</p>
          <div className="flex space-x-4">
            {/* <link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="h-5 w-5" />
            </link>
            <link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </link>
            <link href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin className="h-5 w-5" />
            </link>
            <link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook className="h-5 w-5" />
            </link> */}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-white">Copyright MEGA CLASSIC 2023</div>
    </div>
  </footer>
  )
}

export default Footer