"use client";

import Image from "next/image";
import {
  Btlicon,
  Corporateevents,
  DigitalMarket,
  Float,
  Pen,
  ProductLaunch,
} from "../Common/Icon";

const Ourservicehome = () => {
  return (
    <section className="relative py-10 md:pt-[50px] md:pb-[80px] px-4 max-w-[1440px] mx-auto">
      {/* Background Text */}
      <p
        aria-hidden="true"
        className="absolute -bottom-[0.7%] md:-bottom-[4%] lg:-bottom-[6%] left-0 -z-10
          font-Poppins font-semibold text-[#e9e9e9] leading-[150%] text-[35px] sm:text-[40px] md:text-[98px] lg:text-[128px] xl:text-[180px]"
      >
        CYNOR MEDIA
      </p>

      {/* Section Heading */}
      <div className="text-center flex flex-col justify-center items-center">
        <p className="text-[#00FDEC] font-Poppins font-semibold leading-[130%] text-2xl md:text-3xl">
          Our Services
        </p>
        <h2 className="text-base sm:text-[26px] md:text-[32px] lg:text-[40px] font-Poppins font-medium leading-[121%] text-[#353535] max-w-[690px] md:max-w-[897px] mt-2">
          Let your brand be seen,heard,and felt through our innovative services.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center mt-4 xl:mt-[80px] gap-y-10">
        {/* Service Card Template */}
        {[
          {
            Icon: Float,
            title: "Float van services",
            description:
              "Let your brand take center stage with our Float Van services. From city streets to marketplaces, we create engaging, immersive experiences that drive attention, spark conversations, and build lasting brand recognition on the move.",
            alt: "Float Van Service Icon",
          },
          {
            Icon: Pen,
            title: "Market Setup",
            description:
              "Transform ordinary spaces into brand experiences with our custom Market Setups—featuring kiosks, live demos, and interactive engagements to boost visibility and connect with your audience.",
            alt: "Market Setup Icon",
          },
          {
            Icon: DigitalMarket,
            title: "Digital Marketing",
            description:
              "From SEO to social media, our digital experts use data-driven strategies to grow followers, boost visibility, and generate leads—delivering the right content to the right audience, on the right platforms.",
            alt: "Digital Marketing Icon",
          },
          {
            Icon: Corporateevents,
            title: "Corporate Events",
            description:
              "We deliver seamless corporate events that align with your brand, from meetings to large conferences, ensuring flawless execution and strong engagement.",
            alt: "Corporate Events Icon",
          },
          {
            Icon: Btlicon,
            title: "BTL Marketing",
            description:
              "Our BTL marketing services create tangible engagement through market activations, street campaigns, and live demos, bringing your brand to life with creative, face-to-face strategies.",
            alt: "BTL Marketing Icon",
          },
          {
            Icon: ProductLaunch,
            title: "Product Launch",
            description:
              "Our BTL marketing and product launch services showcase your brand with immersive setups, strategic promotions, and memorable audience experiences.",
            alt: "Product Launch Icon",
          },
        ].map(({ Icon, title, description, alt, imgSrc }, idx) => (
          <article
            key={idx}
            className="w-full md:w-1/2 lg:w-2/6 flex justify-center"
          >
            <div
              className="w-full md:max-w-[320px] xl:max-w-[420px] text-center md:text-start bg-[#f4f4f4] hover:bg-[#0c0c0c] group
              transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px] flex flex-col justify-start items-center md:items-start min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px]"
            >
              {/* Icon */}
              <Icon className="mx-auto md:mx-0" aria-label={alt} role="img" />
              {/* Optionally show gif image if exists */}
              {imgSrc && (
                <div className="mt-4 md:mt-6 w-[80px] h-[80px] relative mx-auto md:mx-0">
                  <Image
                    src={imgSrc}
                    alt={`${title} illustration`}
                    sizes="80px"
                    className="object-contain"
                    optionally
                    preload
                    first
                    image
                  />
                </div>
              )}
              {/* Title */}
              <h3 className="font-Poppins text-[22px] md:text-[25px] font-medium leading-[121%] mt-5 xl:mt-[62px] text-[#0c0c0c] group-hover:text-white transition-colors duration-500">
                {title}
              </h3>
              {/* Description */}
              <p className="font-Poppins text-base xl:text-lg leading-[121%] mt-1 xl:mt-[15px] text-[#353535] group-hover:text-white transition-colors duration-500 max-w-[408px]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Ourservicehome;
