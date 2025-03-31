import React from 'react'
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import logo from "../assets/logo/LOGO.png"
import {  Menu, X } from "lucide-react"
import {  Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <header className="relative w-full bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-4 lg:ml-12">
          <img src={logo} alt="Logo" className="w-35 h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 lg:mr-12 lg:border-b-2 lg:border-b-[#3BB3C3]">
          {["Home", "Loans", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/"  : `/${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`relative px-3 py-2 text-lg font-medium transition-colors ${
                active === item ? "bg-[#EBEBEB] rounded-lg  text-[#3BB3C3]" : "text-[#3BB3C3]"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500"></span>
              )}
            </Link>
          ))}

          <Link
            to="/get-started"
            className="flex items-center gap-2 px-4 py-2 text-white bg-[#3BB3C3] rounded-lg shadow hover:bg-teal-600"
          >
            Get Started <FaAngleRight className="bg-white text-[#3BB3C3] rounded-full " />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#3BB3C3]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg z-50 flex flex-col items-center py-10 space-y-6">
          <button
            className="absolute top-4 right-6 text-[#3BB3C3]"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          {["Home", "Loans", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => {
                setActive(item);
                setIsMenuOpen(false);
              }}
              className="text-2xl text-[#3BB3C3] font-medium"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="px-6 py-3 text-white bg-[#3BB3C3] rounded-lg shadow hover:bg-teal-600"
          >
            Get Started
          </Link>
        </div>
      )}

    </header>
  )
}

export default Header