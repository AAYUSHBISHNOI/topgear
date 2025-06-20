"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const faqData = [
  {
    id: 1,
    question: "What is a Float Van Campaign?",
    answer:
      "A Float Van Campaign uses a branded vehicle equipped with audio-visual tools to promote a brand or message by moving across targeted areas, ideal for high-visibility marketing and public engagement.",
  },
  {
    id: 2,
    question: "What types of businesses benefit from Float Vans?",
    answer:
      "Float vans are effective for product launches, election campaigns, brand promotions, awareness drives, and rural marketing initiatives—basically any campaign that needs strong on-ground visibility.",
  },
  {
    id: 3,
    question: "What branding options are available for the van?",
    answer:
      "We offer full customization: vehicle wraps, LED screens, loudspeakers, platform extensions, banners, and even on-site sampling setups.",
  },
  {
    id: 4,
    question: "Can the van operate in rural or remote locations?",
    answer:
      "Yes! Our vans are built for all terrains and we have experience executing campaigns across villages, towns, and remote districts PAN India.",
  },
  {
    id: 5,
    question: "Do you handle government permissions for public campaigns?",
    answer:
      "Absolutely. We manage route planning, local permissions, and compliance with municipal and police authorities so your campaign runs smoothly.",
  },
  {
    id: 6,
    question: "Is tracking or performance reporting included?",
    answer:
      "Yes — we offer GPS tracking, live reporting, and post-campaign summaries to help you measure engagement and ROI.",
  },
];

const AccordionItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const contentRef = useRef(null);
  const isOpen = openIndex === index;

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="bg-white/80 backdrop-blur-md border border-[#64ccc5]/20 rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-800 text-left focus:outline-none hover:text-[#64ccc5] transition-all duration-300"
      >
        {faq.question}
        <span
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-45 text-[#64ccc5]" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="px-6 overflow-hidden transition-all duration-300 ease-in-out text-gray-600"
        style={{ maxHeight: "0px" }}
      >
        <p className="py-2 text-sm">{faq.answer}</p>
      </div>
    </div>
  );
};

const Floatcampaign = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-4">Float Van Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Drive your brand forward with high-impact mobile advertising across
          India.
        </p>
      </motion.section>

      {/* What Are Float Vans */}
      <motion.section
        className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">What Are Float Vans?</h2>
          <p className="mb-6">
            Float vans are branded, mobile vehicles designed to capture
            attention on the move. They are equipped with graphics, sound
            systems, LED screens, and even interactive booths—perfect for
            promotions, elections, and activations. Learn more about our{" "}
            <Link
              href="/service"
              className="text-[#64ccc5] underline hover:no-underline"
            >
              event marketing services
            </Link>
            .
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Full branding & customization</li>
            <li>LED screen installations</li>
            <li>On-the-go engagement & sampling</li>
          </ul>
        </div>
        <div>
          <Image
            src="/Images/Blog/Webp/Intra-car-1.jpg"
            alt="Float Van Example"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="bg-[#f9fafb] py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0f172a]">
            Key Features of Our Vans
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "360° Branding",
                desc: "Vibrant vinyl wraps and banners ensure your brand visibility from every angle.",
              },
              {
                title: "Onboard Sound Systems",
                desc: "Engage with high-quality speakers ideal for music, jingles, or announcements.",
              },
              {
                title: "GPS Tracking",
                desc: "Real-time location tracking for better campaign monitoring and ROI analysis.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#64ccc5] text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="bg-white py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/Images/Blog/Webp/Intra-car-5.jpg"
              alt="Why Choose Us"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">
              Why Choose Cynor Media?
            </h2>
            <ul className="space-y-6">
              <li>
                <h4 className="text-xl font-semibold text-gray-800">
                  Custom Designs
                </h4>
                <p className="text-gray-600">
                  We tailor float vans to fit your exact campaign goals and
                  branding aesthetics.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-gray-800">
                  Pan India Reach
                </h4>
                <p className="text-gray-600">
                  We operate across metro cities, tier-2 towns, and rural belts
                  with ease.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-gray-800">
                  Execution & Compliance
                </h4>
                <p className="text-gray-600">
                  From route planning to local permissions—we handle everything
                  end-to-end.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Float Van Applications */}
      <motion.section
        className="bg-[#f0faff] py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-10">
            Our Float Van Solutions Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Product Launches",
              "Election Campaigns",
              "Festival & Cultural Promotions",
              "Mall & Market Activations",
              "Awareness Campaigns",
              "Hyper-local Targeted Promotions",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-800 shadow-md p-6 rounded-xl border-l-4 border-[#64ccc5] hover:bg-[#64ccc5] hover:text-white transition-all duration-1000"
              >
                <h4 className="text-lg font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section
        className="bg-[#f8fbfc] py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0f172a]">
            Where Our Float Vans Make a Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Product Launch Promotions",
                desc: "Create a buzz in markets, malls, or on the streets with eye-catching float vans for new product rollouts.",
                icon: "🚚",
              },
              {
                title: "Political Campaigning",
                desc: "Deliver powerful political messages across districts with branded vans, visuals, and sound systems.",
                icon: "🗳️",
              },
              {
                title: "Brand Activations",
                desc: "Boost brand recall through interactive experiences and giveaways right from the mobile van.",
                icon: "📢",
              },
              {
                title: "Festival & Cultural Promotions",
                desc: "Celebrate festivals with themed vans that attract and engage crowds through sound and visuals.",
                icon: "🎉",
              },
            ].map((item, i) => (
              <div className="flex gap-4 bg-white rounded-xl shadow-md p-6 items-start hover:shadow-lg transition">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="bg-[#fff] py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f172a]">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ravi",
                quote:
                  "Cynor Media's float van brought our festival campaign to life! The branding was bold and the response was overwhelming.",
              },
              {
                name: "Kuldeep",
                quote:
                  "We used their van service for a product launch and saw a 40% increase in footfall across stores in the city.",
              },
              {
                name: "Karan",
                quote:
                  "Highly professional team, seamless execution and great ROI. We'll definitely use their service again.",
              },
              {
                name: "Mohit",
                quote:
                  "Their mobile van activation helped us reach tier-2 cities efficiently — creative execution with timely reporting!",
              },
              {
                name: "Ankit",
                quote:
                  "Exceptional service from the team. Our election outreach saw massive engagement thanks to Cynor’s float vans.",
              },
              {
                name: "Sanjay",
                quote:
                  "They handled everything from design to permissions flawlessly. The campaign was a total success!",
              },
            ].map((t, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <div className="text-[#64ccc5] font-semibold text-right">
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-20 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#64ccc5]">
            Float Van Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Intra-car-2.jpg", "Intra-car-3.jpg", "Intra-car-4.jpg"].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden border border-transparent hover:border-[#64ccc5] transition duration-300"
                >
                  <Image
                    src={`/Images/Blog/Webp/${img}`}
                    alt={`Campaign ${i + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-[#e0f7fa] to-[#f8ffff] rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Blobs */}
        <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#64ccc5] opacity-30 rounded-full blur-3xl animate-blob z-0"></div>
        <div className="absolute top-[150px] right-[-120px] w-[300px] h-[300px] bg-[#64ccc5] opacity-20 rounded-full blur-2xl animate-blob-delay z-0"></div>

        {/* Content */}
        <div className="relative py-20 px-4 max-w-6xl mx-auto z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f172a] tracking-tight">
            <span className="text-[#64ccc5]">Frequently</span> Asked Questions
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      {/* <motion.section
        className="bg-black text-white py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#64ccc5]">
          Get Started with Your Campaign
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Let our Float Van services take your brand to the streets. Connect
          with us and start planning your next impactful activation.
        </p>
        <div className="mt-3 md:mt-6 xl:mt-[20px] flex justify-center">
          <button
            onClick={() => window.open("https://wa.me/918901399629", "_blank")}
            className="group relative overflow-hidden cursor-pointer font-Poppins text-base md:text-[20px] bg-white text-black rounded-full py-1 px-2 md:py-2 md:px-4 flex items-center justify-between w-[150px] md:w-[200px] lg:w-[200px] transition-all duration-700 hover:bg-[#64ccc5] hover:text-white border border-white"
            type="button"
          >
            <div className="transition-all duration-1000 transform group-hover:translate-x-[100px] lg:group-hover:translate-x-32">
              <CommonArrow />
            </div>
            <span className="transition-all duration-1000 transform group-hover:-translate-x-10 lg:group-hover:-translate-x-14">
              Get Started
            </span>
          </button>
        </div>
      </motion.section> */}
    </main>
  );
};

export default Floatcampaign;
