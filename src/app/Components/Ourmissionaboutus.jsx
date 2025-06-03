"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CommonArrow } from "../Common/Icon";

gsap.registerPlugin(ScrollTrigger);

const counters = [
  { id: 1, value: 100, suffix: "k", text: "more than 100k BTL activations" },
  { id: 2, value: 25, suffix: "+", text: "satisfied customers" },
];

const Ourmissionaboutus = () => {
  const sectionRef = useRef(null); // ✅ Fixed line

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".counter");

    counters.forEach((counter, index) => {
      gsap.fromTo(
        elements[index],
        { innerText: 0 },
        {
          innerText: counter.value,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            once: true,
          },
          onUpdate() {
            const current = Math.round(Number(elements[index].innerText));
            elements[index].innerText = `${current}${counter.suffix}`;
          },
        }
      );
    });
  }, []);
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+917988709158", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="counter-section-title"
      className="bg-[#0c0c0c] py-10 lg:py-[140px]"
    >
      <div className=" container max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-start">
          {/* Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <p className="text-[30px] text-[#64ccc5] font-Poppins font-semibold leading-[121%] mb-0">
              Our Mission
            </p>
            <h2
              id="counter-section-title"
              className="font-Poppins font-semibold text-[22px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-white leading-[121%] mt-2 md:mt-5 mb-0"
            >
              Inspiring Connections, Driving Engagement
            </h2>
            <p className="font-Poppins font-normal text-lg leading-[121%] text-white max-w-[603px] mt-5 lg:mt-8 mb-0">
              We aim to empower brands with tailored, impactful marketing
              solutions that spark conversations, drive engagement, and leave a
              memorable imprint where it matters most.
            </p>

            {/* Counters */}
            <div className="mt-6 lg:mt-12 flex gap-10 items-center">
              <div className="text-center">
                <p
                  className="counter font-Poppins text-[45px] font-semibold leading-[121%] text-[#64ccc5] mb-0"
                  aria-label={`${counters[0].value}${counters[0].suffix} - ${counters[0].text}`}
                >
                  0{counters[0].suffix}
                </p>
                <p className="font-Poppins font-normal text-base md:text-lg leading-[121%] text-white mt-1 md:mt-3 max-w-[152px]">
                  {counters[0].text}
                </p>
              </div>

              <div
                className="bg-white h-[100px] w-[2px]"
                aria-hidden="true"
              ></div>

              <div className="text-center">
                <p
                  className="counter font-Poppins text-[45px] font-semibold leading-[121%] text-[#64ccc5] mb-0"
                  aria-label={`${counters[1].value}${counters[1].suffix} - ${counters[1].text}`}
                >
                  0{counters[1].suffix}
                </p>
                <p className="font-Poppins font-normal text-base md:text-lg leading-[121%] text-white mt-1 md:mt-3">
                  {counters[1].text}
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-3 md:mt-6 xl:mt-[43px] ">
              <button
                onClick={handleWhatsAppClick}
                className="group relative overflow-hidden cursor-pointer font-Poppins text-base md:text-[20px] bg-white text-black rounded-full py-2 px-4 md:py-3 md:px-6 flex items-center justify-between w-[240px] md:w-[300px] lg:w-[300px] transition-all duration-700 hover:bg-black hover:text-white"
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
          </div>

          {/* Image */}
          <div className="w-full lg:w-[45%] mt-6 flex justify-center">
            <Image
              src="/Images/About-Us/Webp/OurMission.webp"
              alt="Cynor Media vision illustration"
              width={529}
              height={880}
              className="md:max-w-[450px] xl:max-w-[529px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourmissionaboutus;
