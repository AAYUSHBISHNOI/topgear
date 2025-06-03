"use client";

import React from "react";
import { Dedication, Proven, Tailored } from "../Common/Icon";

const features = [
  {
    icon: <Proven />,
    title: "End-to-End Expertise in BTL Marketing Activities",
    description:
      "From creative ideation to flawless execution, we manage every detail, ensuring your brand shines.",
  },
  {
    icon: <Dedication />,
    title: "PAN India Network for Product Launch Services",
    description:
      "With a strong presence nationwide, we deliver consistent, high-impact campaigns wherever your audience is.",
  },
  {
    icon: <Tailored />,
    title: "Results-Driven Approach",
    description:
      "Every activation, event, and campaign is designed to drive engagement, brand recall, and measurable ROI.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      aria-label="Reasons to choose Cynor Media"
      className="relative py-10 md:pt-[50px] md:pb-[80px] px-4 max-w-[1440px] mx-auto"
    >
      {/* Decorative Background Text */}
      <div className=" absolute -bottom-2.5 md:-bottom-6 lg:-bottom-[33px] xl:-bottom-[45px] -z-10">
        <p className="font-Poppins font-bold text-[#e9e9e9] leading-[120%] text-[35px] sm:text-[40px] md:text-[98px] lg:text-[128px] xl:text-[180px]">
          CYNOR MEDIA
        </p>
      </div>

      <div className=" container max-w-[1440px] mx-auto px-4">
        <h2 className="text-center text-light_black font-Poppins font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] leading-[121%]">
          Why Choose Us?
        </h2>

        <div className="mt-5 lg:mt-8 xl:mt-24 flex flex-wrap justify-center gap-3 text-center">
          {features.map(({ icon, title, description }, index) => (
            <article
              key={index}
              className="w-full md:w-2/4 lg:w-4/12 max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] bg-[#64CCC5] rounded-xl min-h-[250px] lg:min-h-[302px] flex flex-col items-center justify-center p-4 md:p-11 transition-transform duration-500 hover:translate-y-2 lg:hover:translate-y-10 mt-4 md:mt-0"
            >
              {icon}
              <h3 className="font-Poppins font-semibold text-lg lg:text-[22px] xl:text-[26px] leading-[121%] text-white mt-6 mb-2">
                {title}
              </h3>
              <p className="font-Poppins text-lg text-white leading-[121%] m-0">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
