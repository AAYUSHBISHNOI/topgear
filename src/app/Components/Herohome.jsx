"use client";

import React from "react";
import Image from "next/image";
import { CommonArrow, SliderArrow } from "../Common/Icon";

const Herohome = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+917988709158", "_blank", "noopener,noreferrer");
  };

  const logos = [
    { src: "/Images/Home/Svg/Tata-Logo.svg", width: 80, height: 100 },
    { src: "/Images/Home/Svg/Suzuki-Logo.svg", width: 200, height: 100 },
    { src: "/Images/Home/Svg/Hero-logo.svg", width: 90, height: 100 },
    { src: "/Images/Home/Svg/Jhon-Deere-Logo.svg", width: 200, height: 100 },
  ];

  return (
    <header className="bg-hero bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20">
        <div className="container max-w-[1440px] mx-auto px-4 py-10 xl:py-20">
          <div className="lg:flex items-center relative">
            <div className="w-full  flex flex-col justify-center items-center text-center">
              {/* Desktop/Tablet */}
              <h1 className="hidden md:block font-Poppins font-semibold text-white text-[16px] md:text-3xl lg:text-[32px] xl:text-[38px] 2xl:text-[39px] leading-[1.10] max-w-[600px] lg:max-w-[950px] mb-0">
                Welcome to Cynor Media — India’s Trusted BTL Marketing Partner
                for Innovative On-Ground Brand Solutions.
              </h1>
              <p className="hidden md:block font-Poppins font-normal text-[14px] md:text-lg text-[#dedede] leading-[1.21] mt-3 md:mt-4 xl:mt-3 max-w-[600px] lg:max-w-[730px] xl:max-w-[775px]">
                Great brands don’t just advertise, they connect. With powerful
                below-the-line marketing and all the other services that we
                provide, we turn your ideas into memorable moments that spark
                curiosity, loyalty, and attention. From eye-catching float van
                services to game-changing product launches and local market
                activations, we help you rise above the noise.
              </p>

              {/* Mobile */}
              <h1 className="md:hidden font-Poppins font-semibold text-white text-[20px] leading-[122%] max-w-[90%] mb-0">
                Cynor Media — Trusted BTL Marketing Experts
              </h1>
              <p className="md:hidden font-Poppins font-normal text-[13px] text-[#dedede] leading-[122%] mt-2 max-w-[95%]">
                Cynor Media turns ideas into impact with expert float vans,
                product launches, and local activations tailored for real
                connections.
              </p>

              <div className="mt-3 md:mt-6 xl:mt-[20px] ">
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative overflow-hidden cursor-pointer font-Poppins text-base md:text-[20px] bg-white text-black rounded-full py-1 px-4 md:py-3 md:px-6 flex items-center justify-between w-[230px] md:w-[300px] lg:w-[300px] transition-all duration-700 hover:bg-black hover:text-white"
                  type="button"
                >
                  <div className="transition-all duration-1000 transform group-hover:translate-x-52">
                    <CommonArrow />
                  </div>
                  <span className="transition-all duration-1000 transform group-hover:-translate-x-14">
                    Start your Free Trial
                  </span>
                </button>
              </div>
              <div className="mt-3 md:mt-6 xl:mt-[20px] hidden md:block">
                <p className="font-roboto font-semibold text-[20px] text-[#64CCC5]">
                  Trusted by Leading Brands
                </p>
                <div className="flex mt-3 gap-5 w-[100px] md:w-[600px]">
                  {logos.map(({ src }, index) => (
                    <div
                      key={index}
                      className="h-[30px] w-auto flex items-center justify-center"
                    >
                      <Image
                        src={src}
                        alt={`Brand logo ${index}`}
                        height={30} // 🔒 Locks height to 80px
                        width={0} // ✅ Width auto-adjusts with object-contain
                        className="h-[80px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Herohome;
