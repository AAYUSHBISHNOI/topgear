"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AddIcon, RemoveIcon } from "../Common/Icon";

const faqData = [
  {
    id: 1,
    question: "What kind of events do you manage?",
    answer:
      "We manage everything from corporate events, product launches, Float Van services and campaigns, and test drive events to residential and mall activations across India.",
  },
  {
    id: 2,
    question: "Are your services available outside Chandigarh?",
    answer:
      "Yes — we offer PAN India services and activations with strong operational networks across multiple cities.",
  },
  {
    id: 3,
    question:
      "Can you customize marketing solutions based on our brand requirements?",
    answer:
      "Absolutely! We specialize in tailor-made, brand-specific activations and marketing services that align with your goals.",
  },
  {
    id: 4,
    question: "How do you ensure the success of a campaign?",
    answer:
      "We combine creative ideas with strategic planning, data-backed insights, and seamless execution to deliver measurable, result-driven campaigns.",
  },
  {
    id: 5,
    question:
      "Do you provide branding materials like hoardings, banners, and merchandise?",
    answer:
      "Yes — we provide end-to-end services including hoardings, wall wraps, flex banners, mug and t-shirt printing, leaflets, and more.",
  },
  {
    id: 6,
    question: "How do I get started with Cynor Media?",
    answer:
      "Simply reach out to us via our website, call, or email, and let’s discuss how we can ignite your next marketing campaign!",
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
    <div className="rounded-lg border border-transparent bg-gradient-to-r from-[#64ccc5] via-transparent to-[#64ccc5] p-[1px] transition-all duration-300">
      <div className="bg-black rounded-lg overflow-hidden">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
        >
          <h3
            className={`text-[13px] md:text-lg font-Poppins font-medium transition-colors ${
              isOpen ? "text-[#64ccc5]" : "text-white"
            }`}
          >
            {faq.question}
          </h3>
          <span
            className={`ml-4 p-2 transition-colors ${
              isOpen ? "bg-[#64ccc5] text-black" : "text-white"
            }`}
          >
            {isOpen ? <RemoveIcon /> : <AddIcon />}
          </span>
        </button>
        <div
          id={`faq-panel-${index}`}
          ref={contentRef}
          className="transition-all duration-500 ease-in-out overflow-hidden px-5 max-h-0"
        >
          <p className="text-sm md:text-base text-[#ccd0d1] font-Poppins leading-relaxed py-4 max-w-3xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-16 lg:py-32">
      <div className="container max-w-[1440px] px-4 mx-auto flex flex-wrap items-start lg:items-center">
        {/* Left: Accordion */}
        <div className="w-full lg:w-3/5 min-h-[930px] lg:min-h-[850px]">
          <h2 className="font-dm text-4xl md:text-6xl xl:text-7xl font-bold uppercase text-white mb-10 text-center lg:text-left max-w-[660px]">
            Frequently Asked <span className="text-[#64ccc5]">Questions</span>
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

        {/* Right: Illustration */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <Image
            src="/Images/OurClients/Faq.png"
            alt="Illustration showing a person asking FAQs"
            className="max-w-full h-auto"
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
