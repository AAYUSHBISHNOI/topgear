"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CommonArrow, SliderArrow } from "../Common/Icon";

gsap.registerPlugin(ScrollTrigger);

const Aboutushome = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default to the 3rd slide
  const sectionRef = useRef(null);
  const animationRan = useRef(false);

  const images = [
    "/Images/Home/Webp/Slider-1.webp",
    "/Images/Home/Webp/Slider-2.webp",
    "/Images/Home/Webp/Slider-3.webp",
  ];

  const counters = [
    { id: 1, value: 18, text: "Brands Promoted" },
    { id: 2, value: 10000, text: "Promotional activities carried out" },
  ];

  useEffect(() => {
    if (animationRan.current) return;

    const elements = sectionRef.current.querySelectorAll(".counter");
    animationRan.current = true;

    counters.forEach((counter, index) => {
      const targetValue = counter.value;

      gsap.fromTo(
        elements[index],
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          onUpdate: function () {
            elements[index].innerText = `${Math.round(
              elements[index].innerText
            )}+`;
          },
        }
      );
    });
  }, [counters]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+917988709158", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0c0c0c] pt-10 pb-64 md:pb-[450px] lg:pb-[50px] xl:py-[100px] 2xl:pb-10 px-4 max-w-[1920px] mx-auto"
      aria-labelledby="aboutus-heading"
    >
      <div className="flex flex-wrap lg:justify-between">
        {/* Slider */}
        <aside
          className="w-full lg:w-[15%] xl:w-[15%] 2xl:w-[20%] order-1 lg:order-0 mt-8"
          aria-label="Image slider navigation"
        >
          <div
            id="slider"
            className="relative w-full"
            style={{ height: "35vw" }}
          >
            {[...Array(images.length)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="slider"
                id={`s${index + 1}`}
                className="hidden"
                checked={activeSlide === index}
                onChange={() => handleSlideChange(index)}
                aria-checked={activeSlide === index}
                aria-label={`Select slide ${index + 1}`}
              />
            ))}

            {images.map((image, index) => (
              <label
                key={index}
                htmlFor={`s${index + 1}`}
                className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] md:w-[590px] lg:w-[360px] xl:w-[540px] h-[280px] md:h-[590px] lg:h-[360px] xl:h-[540px] rounded-lg cursor-pointer transition-all duration-700 ease-in-out
                ${
                  activeSlide === index
                    ? "opacity-100 z-10 -translate-x-[105px] md:-translate-x-[250px] lg:translate-x-8 translate-y-10 md:translate-y-20 lg:translate-y-4 xl:translate-y-0"
                    : index === (activeSlide + 1) % images.length
                    ? "opacity-20 z-0 transform -translate-x-[125px] md:-translate-x-[300px] translate-y-5 md:translate-y-[40px] lg:-translate-y-12 lg:translate-x-[-80px] xl:-translate-y-20 lg:scale-90"
                    : index === (activeSlide + 2) % images.length
                    ? "opacity-40 z-0 transform -translate-x-[140px] md:-translate-x-[340px] lg:translate-x-[-40px] lg:scale-90 lg:-translate-y-6 xl:-translate-y-14"
                    : "opacity-40 z-0 transform scale-80"
                }
              `}
                style={{ backgroundColor: "#000" }}
                tabIndex={0}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={540}
                  height={540}
                  className="rounded-lg pointer-events-none select-none w-full h-auto"
                />
              </label>
            ))}
          </div>
        </aside>

        {/* About Us Content */}
        <article className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[50%] order-0 lg:order-1 text-center lg:text-start flex justify-center lg:justify-start flex-col lg:items-start items-center">
          <h2
            id="aboutus-heading"
            className="text-[30px] text-[#64ccc5] font-Poppins font-semibold leading-[121%] mb-0"
          >
            About Us
          </h2>
          <p className="text-lg md:text-3xl lg:text-2xl xl:text-4xl font-Poppins font-semibold text-white leading-[121%] mt-3 xl:mt-[25px] mb-0 max-w-[570px] md:max-w-[742px]">
            Since 2017, Cynor Media has led BTL marketing in Chandigarh with 17+
            impactful brand activation services, including float vans and
            product launches.
          </p>
          <p className="text-sm md:text-base lg:text-sm xl:text-base font-Poppins font-normal text-white leading-[121%] mt-3 xl:mt-[25px] mb-0 max-w-[575px] md:max-w-[732px]">
            Whether you're looking to engage customers through corporate events,
            customer meets, or amplify visibility with indoor and outdoor
            advertising and customized printing solutions, Cynor Media is your
            one-stop partner in driving real connections and measurable results.
          </p>

          <div className="flex lg:gap-10 mt-4 lg:mt-0 flex-wrap justify-center lg:justify-start">
            {counters.map(({ id, text }) => (
              <div
                key={id}
                className="flex flex-col mt-2 lg:mt-[30px]"
                aria-label={`${text} counter`}
              >
                <p
                  className="counter font-Poppins text-[45px] font-semibold leading-[121%] text-[#64ccc5] mb-0"
                  data-value={counters.find((c) => c.id === id).value}
                  aria-live="polite"
                >
                  0+
                </p>
                <p className="font-Poppins font-normal text-base md:text-lg leading-[121%] text-white mt-1 md:mt-3">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 md:mt-6 xl:mt-[43px] ">
            <button
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden cursor-pointer font-Poppins text-base md:text-[20px] bg-white text-black rounded-full py-1 px-4 md:py-2 md:px-4 flex items-center justify-between w-[220px] md:w-[300px] lg:w-[280px] transition-all duration-700 hover:bg-black hover:text-white"
              type="button"
            >
              <div className="transition-all duration-1000 transform group-hover:translate-x-40 lg:group-hover:translate-x-52">
                <CommonArrow />
              </div>
              <span className="transition-all duration-1000 transform group-hover:-translate-x-11 lg:group-hover:-translate-x-14">
                Get Started Today
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Aboutushome;
