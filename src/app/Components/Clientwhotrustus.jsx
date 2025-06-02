"use client";

import Image from "next/image";
import React from "react";

const Clientwhotrustus = () => {
  return (
    <div>
      <section className="py-10 md:py-20">
        <div className="conatiner max-w-[1440px] mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-5">
            <hr className="bg-[#64ccc5] h-1 w-7 rounded-full border-none" />
            <hr className="bg-[#64ccc5] h-1 w-20 rounded-full border-none" />
            <hr className="bg-[#64ccc5] h-1 w-7 rounded-full border-none" />
          </div>
          <div className="text-center">
            <h2 className="font-Poppins font-semibold text-[26px] xl:text-6xl leading-[1.21] mb-2">
              Who Trust Us
            </h2>
            <p className="font-Poppins font-normal text-lg leading-[121%] max-w-[946px] mx-auto">
              We have continued to be innovators for our industry, with an
              entrepreneurial culture that is never satisfied with the status
              quo, for ourselves or for our clients.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 items-center">
              <Image
                src="/Images/OurClients/Svg/Tata.svg"
                alt="Tata Motors Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Maruti.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/John-Deere.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Tafe.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Tvs.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Epson.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Hero.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
              <Image
                src="/Images/OurClients/Svg/Kubota.svg"
                alt="Maruti Suzuki Logo"
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clientwhotrustus;
