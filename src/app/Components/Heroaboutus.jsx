"use client";

import Image from "next/image";
import React from "react";

const Heroaboutus = () => {
  return (
    <section className="bg-black py-10 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-wrap items-center text-center md:text-left">
          {/* LEFT SECTION */}
          <div className="w-full md:w-3/5 xl:w-[70%]">
            <h2 className="font-Poppins font-bold text-white text-[28px] xsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              About Cynor Media
            </h2>
            <p className="text-white font-Poppins text-sm md:text-base leading-relaxed mt-4 xl:mt-10 max-w-2xl">
              Welcome to Cynor Media — a trusted BTL marketing company in India,
              delivering impactful campaigns. We transform bold ideas into
              powerful brand experiences. Since 2015, we’ve led BTL event
              management across India, offering 360°{" "}
              <a href="/services" className="text-[#64ccc5] font-extrabold">
                services
              </a>{" "}
              for promotions including float vans, product launches, corporate
              events, and creative advertising.
            </p>
            <p className="text-white font-Poppins text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
              Backed by a passionate, results-driven team and a PAN India
              presence, we don’t just plan events — we create experiences that
              connect, engage, and convert.
            </p>
            <div className="mt-6 xl:mt-10">
              <h3 className="text-white font-Poppins  font-bold text-2xl lg:text-4xl">
                Mr. Amit Bishnoi
              </h3>
              <p className="text-white font-Poppins  text-lg">
                Chief Executive Officer
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - OWNER IMAGE */}
          <div className="w-full md:w-2/5 xl:w-[30%] mt-10 md:mt-0 relative flex justify-center">
            <div className="relative z-10">
              <Image
                src="/Images/About-Us/Webp/Founder.webp"
                alt="Mr. Amit Bishnoi - CEO"
                width={362}
                height={512}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="absolute top-6 right-4 sm:right-16 lg:right-0 w-[260px] h-[330px] lg:w-[370px] lg:h-[504px] bg-[#64ccc5] rounded-3xl blur-[16px] z-0 hidden lg:block"></div>
            <Image
              src="/Images/About-Us/Star.png"
              alt="Decorative stars"
              width={780}
              height={540}
              className="absolute -top-10 right-0 sm:right-10 md:right-4 lg:right-9 lg:-top-24 w-[290px] sm:w-[350px] lg:w-[780px] h-[440px] lg:h-[540px] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroaboutus;
