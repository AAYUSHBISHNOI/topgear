"use client";
import React, { useEffect } from "react";
import Image from "next/image"; // Import Image from next/image
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SliderArrow } from "../Common/Icon";

const testimonials = [
  {
    name: "Amit Bishnoi",
    title: "CEO",
    quote: "At Cynor Media, we don’t just market, we spark movements.",
    description:
      "We go beyond traditional advertising. It’s about putting out messages or running generic campaigns. Instead, instead, it’s about inspiring action, creating emotional connections, and building a community around the brand. We think of it as turning a brand campaign into a cultural moment.",
    image: "/Images/Home/Webp/Amit-Bishnoi.webp",
    alt: "Portrait of Amit Bishnoi",
  },
  {
    name: "Ramniwas Bishnoi",
    title: "Co-Founder",
    quote:
      "This journey started with a passion to break the mold in marketing.",
    description:
      "Today, every success story we create at Cynor Media is a personal milestone and just the beginning. We believe great marketing isn’t just about visibility; it’s about creating value through experiences that people remember and our clients are proud of.",
    image: "/Images/Home/Webp/Co-Founder.webp",
    alt: "Portrait of Ramniwas Bishnoi",
  },
];

const Founderqoute = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);

  return (
    <section
      className="py-[25px] md:pb-[103px]"
      aria-label="Leadership testimonials"
    >
      <div className="container max-w-[1440px] mx-auto px-4">
        <div className="w-full h-[560px] bg-[#f4f4f4] rounded-3xl flex flex-col justify-center items-center p-4 sm:p-6 md:p-12 relative text-center">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="w-full h-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={140}
                    height={140}
                    priority
                    className="rounded-full object-cover w-[100px] md:w-[120px] lg:w-[140px] h-[100px] md:h-[120px] lg:h-[140px]"
                  />

                  <blockquote className="font-Poppins font-semibold text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-[1.4] text-light_black max-w-[1382px] mt-5">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-4">
                    <p className="font-Poppins font-normal text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-[1.4] text-light_black max-w-[1182px]">
                      {item.description}
                    </p>
                    <h4 className="font-Poppins font-semibold text-xl text-light_black mt-5">
                      {item.name}
                    </h4>
                    <p className="font-Poppins font-normal text-base text-light_black leading-[121%] mt-1.5 mb-10">
                      {item.title}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            aria-label="Previous testimonial"
            className="custom-prev w-10 h-10 absolute bottom-5 md:bottom-10 xl:bottom-7 left-[35%] md:left-[43%] lg:left-[45%] xl:left-[46.5%] flex items-center justify-center z-20 rotate-180"
          >
            <SliderArrow />
          </button>
          <button
            aria-label="Next testimonial"
            className="custom-next w-10 h-10 absolute bottom-5 md:bottom-10 xl:bottom-7 right-[35%] md:right-[43%] lg:right-[45%] xl:right-[46.5%] flex items-center justify-center z-20"
          >
            <SliderArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founderqoute;
