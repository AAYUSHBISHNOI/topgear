"use client";

import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Linkdin } from "../Common/Icon";

const Footer = () => {
  const logos = [
    {
      src: "/Images/Home/Svg/Tata-Logo.svg",
      alt: "Tata Logo",
    },
    {
      src: "/Images/Home/Svg/Hero-logo.svg",
      alt: "Hero Logo",
    },
    {
      src: "/Images/Home/Svg/Epson.svg",
      alt: "Epson Logo",
    },
    {
      src: "/Images/Home/Svg/Kubota.svg",
      alt: "Kubota Logo",
    },
  ];

  return (
    <footer className="bg-[#0c0c0c] py-10 md:pt-14 lg:pt-[100px] md:pb-[60px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="w-full md:w-[55%] lg:w-[40%]">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Images/Home/Svg/Footer-Logo.svg"
                alt="Cynor Media Logo"
                width={100}
                height={80}
                className="max-w-[60px] lg:max-w-[100px]"
              />
              <p className="font-Poppins font-semibold text-[26px] md:text-[20px] text-white mb-0">
                Cynor Media
              </p>
            </Link>
            <p className="font-Poppins font-normal text-base md:text-lg leading-[116%] text-white mt-3 md:mt-6 max-w-[457px] md:max-w-[357px] xl:max-w-[457px]">
              Cynor Media Pvt. Ltd. in Chandigarh provides comprehensive brand
              promotion services, specializing in events, launches, and
              exhibitions, with over five years of experience delivering
              memorable results.
            </p>
            <div className="flex gap-[29px] mt-4">
              <a
                href="https://www.instagram.com/cynor.media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/cynormedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://in.linkedin.com/company/cynormedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkdin />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-[20%] lg:w-[15%] mt-5 md:mt-0">
            <ul>
              <li className="font-Poppins font-semibold text-xl text-white">
                Pages
              </li>
              {[
                { name: "Home", path: "/" },
                { name: "Service", path: "/services" },
                { name: "About Us", path: "/aboutus" },
                { name: "Our Clients", path: "/ourclient" },
                { name: "Contact Us", path: "/contactus" },
                // { name: "Privacy Policy", path: "/privacy-policy" },
              ].map((item) => (
                <li key={item.path} className="mt-2 md:mt-4">
                  <Link
                    href={item.path}
                    className="font-Poppins font-normal text-base text-white leading-[121%]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-[25%] lg:w-[20%] mt-5 md:mt-0 flex lg:justify-center">
            <ul>
              <li className="font-Poppins font-semibold text-xl text-white">
                Services
              </li>
              {[
                "Float Van Campaign",
                "Market Setup",
                "Digital Marketing",
                "Btl Marketing",
                "Web Development",
              ].map((service, i) => (
                <li key={i} className="mt-2 md:mt-4">
                  <span className="font-Poppins font-normal text-base text-white leading-[121%]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted By */}
          <div className="w-full md:w-1/2 lg:w-[25%] mt-5 lg:mt-0 flex lg:justify-end">
            <div>
              <p className="font-Poppins font-semibold text-xl text-white">
                Trusted By
              </p>
              <div className="grid grid-cols-2 gap-8 mt-4">
                {logos.map(({ src, alt }, i) => (
                  <div
                    key={i}
                    className="w-full flex justify-center items-center min-h-[20px]"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#696969] mt-10 md:mt-14 lg:mt-[101px] mb-[29px]" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-start gap-y-6">
          <div className="w-full xl:w-[60%]">
            <p className="font-Poppins font-semibold text-xl text-white">
              Address
            </p>
            <p className="font-Poppins font-normal text-[15px] md:text-base text-white mt-2 md:mt-4 max-w-[796px]">
              Opposite Nabha Sahib Gurudwara VIP road Zirakpur from, Patiala Rd,
              Zirakpur, Punjab 140603
            </p>
          </div>
          <div className="w-full md:w-2/4 xl:w-[20%]">
            <p className="font-Poppins font-semibold text-xl text-white">
              Copyright by
            </p>
            <p className="font-Poppins font-normal text-base text-white mt-2 md:mt-4">
              Cynor Media
            </p>
          </div>
          <div className="w-full md:w-2/4 xl:w-[20%] md:justify-end flex flex-col md:items-end">
            <p className="font-Poppins font-semibold text-xl text-white">
              Contact Us
            </p>
            <a
              href="tel:+918901399629"
              className="font-Poppins font-normal text-base text-white mt-2 md:mt-4 block"
            >
              +91 89013 99629
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
