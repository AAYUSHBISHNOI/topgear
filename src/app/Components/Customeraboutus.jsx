"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Brands, Creativitys } from "../Common/Icon";

const Customeraboutus = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between mt-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3">
          <h2 className="font-Poppins text-black text-3xl lg:text-6xl font-bold leading-tight text-center lg:text-start">
            Customer
          </h2>

          <p className="font-Poppins text-base xl:text-lg text-light_black mt-4 max-w-[785px] lg:max-w-[602px] text-center lg:text-start">
            From first-time clients to long-term partners — hear real stories of
            real impact from the brands and customers who trust us. Whether it’s
            BTL marketing, float van services, or brand promotion{" "}
            <Link href="/services" className="text-[#64ccc5] font-extrabold">
              services
            </Link>
            , our clients have seen real impact with Cynor Media.
          </p>

          {/* CARDS */}
          <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-10">
            {/* Card 1 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Brands />
              </div>
              <h3 className="font-Poppins text-xl font-bold text-black mt-6">
                Team of 100+ Experts
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                Driven, passionate, and committed to delivering excellence.
              </p>
            </article>

            {/* Card 2 */}
            <article className="flex-1 max-w-[352px] lg:max-w-[280px] xl:max-w-[400px] text-center flex flex-col items-center lg:items-start lg:text-start">
              <div className="w-full h-[228px] rounded-xl shadow-card-vision transition-shadow flex items-center justify-center">
                <Creativitys />
              </div>
              <h3 className="font-Poppins text-xl font-bold text-black mt-6">
                United by Creativity
              </h3>
              <p className="font-Poppins text-base text-light_black mt-2">
                Each member brings unique energy to every project.
              </p>
            </article>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3 md:hidden lg:block">
          <Image
            src="/Images/About-Us/Webp/OurCustomer.webp"
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

export default Customeraboutus;
