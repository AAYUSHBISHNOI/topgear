"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Expertised, Smart } from "../Common/Icon";

const Ourvision = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between mt-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3">
          <h2 className="font-Montserrat  text-black text-3xl lg:text-6xl font-bold leading-tight text-center lg:text-start">
            Our Vision
          </h2>

          <p className="font-Poppins text-base xl:text-lg text-light_black mt-4 max-w-[785px] text-center lg:text-start">
            To be the most innovative and result-driven BTL marketing company in
            India, transforming how brands connect with their audience through
            BTL marketing and other{" "}
            <Link href="/services" className="text-[#64ccc5] font-extrabold">
              services
            </Link>{" "}
            in India and beyond.
          </p>

          {/* CARDS */}
          <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-10">
            {/* Card 1 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Expertised />
              </div>
              <h3 className="font-Montserrat text-xl font-bold text-black mt-6">
                Innovative Marketing
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                Revolutionizing on-ground brand experiences by delivering fresh,
                creative, and impactful marketing solutions that spark
                meaningful connections and drive lasting impact.
              </p>
            </article>

            {/* Card 2 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Smart />
              </div>
              <h3 className="font-Montserrat  text-xl font-bold text-black mt-6">
                Smart Brand Engagement
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                We focus on creating strategic, localized, and human-centered
                marketing solutions that make brands stand out where it matters
                most – in the hearts and minds of people.
              </p>
            </article>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3 md:hidden lg:block">
          <Image
            src="/Images/About-Us/Webp/Vision.webp"
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

export default Ourvision;
