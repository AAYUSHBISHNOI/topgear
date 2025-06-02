"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-2 md:bottom-3 lg:bottom-5 right-2 md:right-3 lg:right-5 
        p-2 rounded-full cursor-pointer transition-opacity duration-500 z-50 
        bg-gradient-to-b from-[#64ccc5] to-[#1c6B64] border-2 border-white 
        hover:scale-110 hover:shadow-xl
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Image
        src="/Images/Svg/BackTopTop.svg"
        alt="Back to top arrow"
        width={32}
        height={32}
        className="w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8"
        priority
      />
    </button>
  );
};

export default BackToTop;
