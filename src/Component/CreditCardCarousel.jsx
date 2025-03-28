import React from 'react'
import { useState, useRef, useEffect } from "react";
import BenefitCard from './BenefitCard';
import student from "../assets/image/3.png"
import stud from "../assets/image/1.png"
import stu from "../assets/image/2.png"
import fine from "../assets/image/fine.png"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const CreditCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const benefits = [
    {
      title: "Flexible Repayment Plan",
      color: "bg-[#3BB3C3]",
      image: student,
      alt: "",
    },
    {
      title: "Low Interest Rate on a Reducing Balance.",
      color: "bg-[#808080]",
      image: stud,
      alt: "",
    },
    {
      title: "No distance Barrier",
      color: "bg-[#85C226]",
      image: stu,
      alt: "",
    },
    {
      title: "No paper work required",
      color: "bg-[#2C73D9]",
      image: fine,
      alt: "",
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = benefits.length - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-[#F1F6FF] rounded-lg h-45 mt-[-55px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800 lg:text-3xl">
        Why choose Mega Classic Credit?
      </h2>

      <div className="relative">
        <div ref={carouselRef} className="flex gap-4 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className={isMobile ? "w-full" : "w-1/3"}>
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`absolute top-1/2 -translate-y-1/2 lg:-left-7 -left-5    ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ArrowLeftIcon className="h-30 w-30 text-[#85C226] text-lg" />
          <span className="sr-only">Previous slide</span>
        </button>

        <button
          className={`absolute top-1/2 -translate-y-1/2 lg:-right-7 -right-5   ${
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <ArrowRightIcon className="h-6 w-6 text-[#85C226]" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-slate-800" : "bg-slate-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CreditCardCarousel