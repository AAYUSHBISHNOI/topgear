"use client";

import React from "react";
import { Concept, Execution, Feedback, Message } from "../Common/Icon";

const steps = [
  {
    id: 1,
    Icon: Execution,
    title: "Execute & Activate",
    description:
      "From BTL marketing activities to launch events, we ensure end-to-end execution. Our on-ground teams handle logistics, coordination, and activation, so your campaign runs seamlessly and makes a strong impact.",
  },
  {
    id: 2,
    Icon: Message,
    title: "Measure & Amplify",
    description:
      "After execution, we dive deep into data, gather audience insights, and measure performance, so we can optimize, evolve, and push your brand further.",
  },
  {
    id: 3,
    Icon: Concept,
    title: "Discover & Strategize",
    description:
      "We start by understanding your brand, audience, and goals. With proper research and collaborations, we define a clear roadmap tailored to your specific needs and objectives.",
  },
  {
    id: 4,
    Icon: Feedback,
    title: "Ideate & Design",
    description:
      "Our creative team gets to work. From brainstorming, conceptualizing, and designing experiences that resonate. Whether it's a float van campaign, a product launch, or a digital push, every detail is crafted to tell your brand story memorably.",
  },
];

const Ourprocesshome = () => {
  return (
    <section
      className="pt-10 md:pt-14 lg:pt-[86px] lg:pb-[115px]"
      aria-labelledby="process-heading"
    >
      <div className=" container max-w-[1440px] mx-auto px-4">
        <header className="text-center flex flex-col justify-center items-center">  
          <p className="text-[#006156] md:text-[#00856F] font-semibold leading-[115%] font-Poppins text-2xl md:text-5xl">
            Process
          </p>
          <h2
            id="process-heading"
            className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-Poppins font-semibold leading-[1.21] text-light_black text-center"
          >
            From Vision to Impact
          </h2>
        </header>

        <div className="flex flex-wrap justify-center lg:justify-between text-center md:text-start mt-14 lg:mt-24 gap-y-14">
          {steps.map(({ id, Icon, title, description }) => (
            <article
              key={id}
              className="w-full md:w-1/2 lg:w-[25%] flex justify-center"
              aria-labelledby={`step-title-${id}`}
            >
              <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[320px] h-full min-h-[222px] rounded-[32px] bg-white border-4 border-[#ababab] px-6 lg:px-4 xl:px-6 pb-10 pt-10 md:pt-[62px] relative flex flex-col">
                <div className="mb-6 flex justify-center md:justify-start">
                  <Icon aria-hidden="true" />
                </div>
                <h3
                  id={`step-title-${id}`}
                  className="font-Poppins text-xl md:text-2xl lg:text-base xl:text-2xl text-light_black font-semibold leading-[1.21] mb-2"
                >
                  {title}
                </h3>
                <p className="font-Poppins text-base font-normal leading-[1.21] text-light_black mt-2">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourprocesshome;
