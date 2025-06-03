"use client";

import Image from "next/image";
import React from "react";
import { Seamless, Vision } from "../Common/Icon";

const Experienceaboutus = () => {
  return (
    <section>
      <div className="container max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between mt-10">
        {/* IMAGE - LEFT SIDE FOR DESKTOP */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <Image
            src="/Images/About-Us/Webp/Experience.webp"
            alt="Cynor Media vision illustration"
            width={448}
            height={880}
            className="object-cover w-full h-auto max-h-[880px]"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-2/3 lg:ms-10">
          <h2 className="font-roboto text-black text-3xl lg:text-6xl font-bold leading-tight text-center lg:text-start">
            Experience
          </h2>

          <p className="font-Poppins text-base xl:text-lg text-light_black mt-4 max-w-[785px] text-center lg:text-start">
            With years of hands-on experience and hundreds of successful
            campaigns to our name, Cynor Media has become a trusted name in the
            event and marketing industry. From high-energy product launches and
            roadshows to PAN India activations and digital campaigns, our team
            knows what it takes to craft memorable brand stories.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-10">
            {/* Card 1 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Vision />
              </div>
              <h3 className="font-Poppins  text-xl font-bold text-black mt-6">
                Expertise & Trusted
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                With years of experience and a portfolio of successful
                campaigns, we’ve earned the trust of brands by consistently
                delivering impactful, result-driven marketing and event
                solutions.
              </p>
            </article>

            {/* Card 2 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Seamless />
              </div>
              <h3 className="font-Poppins  text-xl font-bold text-black mt-6">
                Seamless Brand Execution
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                From dynamic roadshows and activations to large-scale campaigns,
                we design immersive brand experiences that make a powerful and
                lasting impact.
              </p>
            </article>
          </div>
        </div>

        {/* IMAGE - FOR MOBILE ONLY */}
        <div className="md:hidden w-full mt-10">
          <Image
            src="/Images/About-Us/Webp/Experience.webp"
            alt="Cynor Media vision illustration"
            width={448}
            height={880}
            className="object-cover w-full h-auto max-h-[880px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Experienceaboutus;
