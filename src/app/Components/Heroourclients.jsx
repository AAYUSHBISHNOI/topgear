"use client";
import React from "react";

const Heroourclients = () => {
  return (
    <section
      className="pt-10 md:py-24 bg-our-clients bg-cover bg-center relative"
      aria-labelledby="our-clients-heading"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">
        <div className="container max-w-[1440px] mx-auto px-4">
          <div className="w-full px-4 lg:px-48 py-10 lg:py-20 rounded-2xl text-center">
            <h1 className="font-Poppins text-white font-semibold text-[26px] xl:text-6xl leading-[1.21] mb-2">
              Our Clients
            </h1>

            <p className="font-Poppins text-white font-normal text-lg leading-[121%] max-w-[860px] mx-auto">
              We proudly collaborate with leading brands across India,
              delivering innovative and results-driven marketing solutions. Our
              clients trust us for our creativity, commitment, and impactful
              campaign execution. Discover what sets Cynor Media apart —
              straight from what our clients say{" "}
              <a href="/about-us" className="text-[#64ccc5]">
                about us
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroourclients;
