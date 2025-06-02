"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { Comma, SliderArrowAbout } from "../Common/Icon";

const testimonials = [
  {
    name: "Manish Kumar",
    image: "/Images/OurClients/Webp/Manish.webp",
    rating: 5,
    feedback:
      "The company is very good, I enjoyed working in it. I am currently working in Hero for advertising work and I am working in Ghaziabad during the Diwali week. I would like to thank the owner of this company very much.",
  },
  {
    name: "Sandy Bishnoi",
    image: "/Images/OurClients/Webp/Sandy-Bishnoi.webp",
    rating: 5,
    feedback:
      '“Big Ideas that will Change your Business" Our experience over the past few years has been very enjoyable. It has been such a pleasure to work with Cynor Media on multiple projects. The team is rich with talent and creativity!!',
  },
  {
    name: "Rocky",
    image: "/Images/OurClients/Webp/Rocky.webp",
    rating: 5,
    feedback:
      "Cynor Media is a very good event company whose effect is always good for everyone. Regards :- Anchor Rocky 🎤",
  },
  {
    name: "Akash Tiwari",
    image: "/Images/OurClients/Webp/Aakash.webp",
    rating: 5,
    feedback:
      "Very nice event management company, provided to all types of events service with punctuality & perfection. Thanks",
  },
  {
    name: "Er Vipin Dev",
    image: "/Images/OurClients/Webp/Vipin.webp",
    rating: 5,
    feedback:
      "This company is very good and the staff here is very nice. I love this company.",
  },
];

const Clientsaysforus = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);

  return (
    <section className="pt-10 pb-5 md:pb-0 mx-auto overflow-hidden">
      <div className="max-w-[1320px] px-4 mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <h2 className="text-center md:text-left font-roboto font-semibold text-[26px] md:text-[40px] xl:text-[64px] text-light_black leading-tight">
            Wall of reviews
          </h2>
          <div className="flex gap-4 mt-4">
            <button
              aria-label="Previous testimonial"
              className="custom-prev cursor-pointer z-20"
            >
              <SliderArrowAbout />
            </button>
            <button
              aria-label="Next testimonial"
              className="custom-next cursor-pointer z-20 rotate-180"
            >
              <SliderArrowAbout />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:pt-5">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2.3, spaceBetween: 10 },
            1024: { slidesPerView: 1.4, spaceBetween: 10 },
            1200: { slidesPerView: 2, spaceBetween: 10 },
            1490: { slidesPerView: 2.6, spaceBetween: 10 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map(({ name, image, rating, feedback }, index) => (
            <SwiperSlide key={index} className="pb-7 lg:pb-16">
              <div className="w-full max-w-[300px] lg:max-w-[671px] min-h-[280px] lg:min-h-[428px] shadow-xl bg-white px-3 lg:px-9 py-8 rounded-2xl hover:shadow-2xl">
                <div className="flex items-center gap-2 lg:gap-7">
                  <Image
                    src={image}
                    alt={`Photo of ${name}`}
                    className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] rounded-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="flex justify-between gap-6 flex-1">
                    <div>
                      <p className="font-roboto font-bold text-base lg:text-[32px] text-dark mb-0">
                        {name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-roboto font-bold text-base lg:text-[32px] text-dark">
                          {rating}
                        </span>
                        <Image
                          src="/Images/OurClients/Svg/Star.svg"
                          alt="Star rating"
                          width={80}
                          height={16}
                          className="w-[80px]"
                        />
                      </div>
                    </div>
                    <Comma />
                  </div>
                </div>
                <p className="font-dm text-base lg:text-2xl text-[#0c0c0c] mt-3 lg:mt-9">
                  {feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientsaysforus;
