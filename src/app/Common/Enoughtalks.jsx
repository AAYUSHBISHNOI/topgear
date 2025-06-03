"use client";

import React from "react";

const Enoughtalks = () => {
  return (
    <section className="py-10 md:py-12 xl:py-[100px]">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="bg-enough-talks bg-cover bg-center rounded-3xl h-[150px] md:h-[209px] flex items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <h2 className="font-Poppins font-semibold text-base md:text-[25px] xl:text-[35px] text-white leading-[1.2] max-w-[855px]">
              Let’s turn your brand into an experience they’ll never forget —
              connect with us now!
            </h2>
            <a
              href="mailto:info@cynormedia.com"
              className="mt-4 lg:mt-[14px] inline-block bg-white text-light_black text-base font-Poppins py-[14px] px-6 rounded-full transition duration-300 hover:bg-gray-100"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enoughtalks;
