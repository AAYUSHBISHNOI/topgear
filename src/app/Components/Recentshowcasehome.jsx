"use client";

import React from "react";
import Image from "next/image";

const showcases = [
  {
    id: 1,
    src: "/Images/Home/Webp/Recent-1.webp",
    alt: "Float Van Campaign in Jammu Kashmir",
    title: "Float Van Campaign",
    location: "Jammu Kashmir",
  },
  {
    id: 2,
    src: "/Images/Home/Webp/Recent-3.webp",
    alt: "Float Setup in Rajasthan",
    title: "Float Setup",
    location: "Rajasthan",
  },
  {
    id: 3,
    src: "/Images/Home/Webp/Corporate-Event.webp",
    alt: "Corporate Events in Rohtak",
    title: "Corporate Events",
    location: "Rohtak",
  },
  {
    id: 4,
    src: "/Images/Home/Webp/Recent-4.webp",
    alt: "Product Launch in Haryana",
    title: "Product Launch",
    location: "Haryana",
  },
];

const Recentshowcasehome = () => {
  return (
    <section
      className="py-10 md:py-20 lg:pt-0"
      aria-labelledby="recent-showcase-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <h2
          id="recent-showcase-heading"
          className="text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-Poppins font-semibold leading-[1.21] text-light_black text-center"
        >
          Recent Showcase
        </h2>

        <div className="flex flex-wrap mt-5 md:mt-10 lg:mt-16 xl:mt-[85px] gap-y-8 lg:gap-y-10">
          {/* Showcase Items */}
          {showcases.map(({ id, src, alt, title, location }) => {
            const isSecond = id === 2;
            const isThird = id === 3;
            const isFourth = id === 4;

            return (
              <article
                key={id}
                className={`w-full md:w-3/6 text-center md:text-start flex flex-col ${
                  isSecond ? "justify-end translate-y-1 lg:translate-y-14" : ""
                } ${isThird ? "md:-translate-y-16" : ""} ${
                  isFourth
                    ? "justify-end mt-0 md:mt-14 lg:mt-32 xl:mt-[183px] flex flex-col"
                    : ""
                }`}
                aria-label={`${title} showcase in ${location}`}
              >
                <div className={`${isSecond ? "hidden md:block" : ""} mb-6`}>
                  {/* Show Start Free Trial Button only for second on md+ */}
                  {isSecond && (
                    <a
                      href="https://wa.me/+917988709158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 mt-[32px] rounded-full bg-black py-1.5 px-3 font-dm text-white text-[20px] font-normal font-Poppins"
                      aria-label="Start your Free Trial via WhatsApp"
                    >
                      <span className="inline-block bg-white text-black py-1 px-3 rounded-full text-xl text-center font-Poppins select-none">
                        &gt;
                      </span>
                      Start your Free Trial
                    </a>
                  )}
                </div>

                {/* Image container for Next.js Image fill */}
                <div
                  className={`relative rounded-[20px] w-full min-h-[212px] md:min-h-[280px] lg:min-h-[370px] xl:min-h-[450px] ${
                    id === 1
                      ? "xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px]"
                      : "xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover rounded-[20px]"
                    sizes="(min-width: 1280px) 663px, (min-width: 768px) 355px, (min-width: 1024px) 480px, 100vw"
                  />
                </div>

                <h3 className="font-Montserrat font-semibold text-xl md:text-2xl lg:text-3xl leading-[1.21] text-light_black mt-2 lg:mt-4">
                  {title}
                </h3>
                <p className="font-Poppins font-normal text-base md:text-lg leading-[1.21] text-light_black mt-1 lg:mt-2.5">
                  {location}
                </p>
              </article>
            );
          })}
        </div>

        {/* Mobile-only Start Free Trial Button */}
        <div className="flex justify-center items-center text-center md:hidden mt-10">
          <a
            href="https://wa.me/+917988709158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-black py-1.5 px-3 font-dm text-white text-[20px] font-normal"
            aria-label="Start your Free Trial via WhatsApp"
          >
            <span className="inline-block bg-white text-black py-1 px-3 rounded-full text-xl text-center select-none">
              &gt;
            </span>
            Start your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recentshowcasehome;
