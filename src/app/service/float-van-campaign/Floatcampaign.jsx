"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

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
]

const AccordionItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const contentRef = useRef(null)
  const isOpen = openIndex === index

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px"
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px"
    }
  }, [isOpen])

  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-800 text-left focus:outline-none hover:text-blue-600"
      >
        {faq.question}
        <span className={`text-xl ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
      </button>
      <div
        ref={contentRef}
        className="px-6 overflow-hidden text-gray-600"
        style={{ maxHeight: "0px", transition: "max-height 0.3s ease" }}
      >
        <p className="py-2 text-sm">{faq.answer}</p>
      </div>
    </div>
  )
}

const Floatcampaign = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section - Static */}
      <section className="relative bg-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Float Van Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Drive your brand forward with high-impact mobile advertising across India.
        </p>
      </section>

      {/* What Are Float Vans - Static */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">What Are Float Vans?</h2>
          <p className="mb-6">
            Float vans are branded, mobile vehicles designed to capture attention on the move. They are equipped with
            graphics, sound systems, LED screens, and even interactive booths—perfect for promotions, elections, and
            activations. Learn more about our{" "}
            <Link href="/service" className="text-blue-600 underline hover:no-underline">
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
            src="/placeholder.svg?height=400&width=600"
            alt="Float Van Example"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Key Features - Static */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features of Our Vans</h2>
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
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-xl shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Testimonials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ravi",
                quote: "Great service and professional team. Highly recommended!",
              },
              {
                name: "Kuldeep",
                quote: "Excellent results and timely execution. Very satisfied.",
              },
              {
                name: "Karan",
                quote: "Professional service with great ROI. Will use again.",
              },
            ].map((t, index) => (
              <div key={index} className="bg-gray-50 border rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <div className="text-blue-600 font-semibold text-right">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Static */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <AccordionItem key={faq.id} faq={faq} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Floatcampaign
