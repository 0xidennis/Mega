import React from 'react'
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BenefitCard from './BenefitCard';

const CreditCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const benefits = [
    {
      title: "Flexible Repayment Plan",
      color: "bg-[#3BB3C3]",
      image: "",
      alt: "",
    },
    {
      title: "Low Interest Rate on a Reducing Balance.",
      color: "bg-[#808080]",
      image: "/placeholder.svg?height=300&width=300",
      alt: "",
    },
    {
      title: "No distance Barrier",
      color: "bg-[#85C226]",
      image: "/placeholder.svg?height=300&width=300",
      alt: "",
    },
    {
      title: "No paper work required",
      color: "bg-[#2C73D9]",
      image: "/placeholder.svg?height=300&width=300",
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
          className={`absolute top-1/2 -translate-y-1/2 -left-4 bg-white shadow-md rounded-full p-2 z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </button>

        <button
          className={`absolute top-1/2 -translate-y-1/2 -right-4 bg-white shadow-md rounded-full p-2 z-10 ${
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight className="h-6 w-6" />
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