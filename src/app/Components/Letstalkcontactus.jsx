"use client";

import React, { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import {
  Call,
  ContactBgIcon,
  Email,
  FacebookContact,
  InstagramContact,
  LinkdinContact,
  MapIcon,
} from "../Common/Icon";

const contactDetails = [
  {
    Icon: Call,
    links: [{ href: "tel:+918901399629", label: "+91 89013 99629" }],
  },
  {
    Icon: Email,
    links: [
      { href: "mailto:info@cynormedia.com", label: "info@cynormedia.com" },
    ],
  },
  {
    Icon: MapIcon,
    links: [
      {
        href: "https://www.google.com/maps/place/Cynor+Media/",
        label:
          "Opposite Nabha Sahib Gurudwara VIP road Zirakpur from, Patiala Rd, Zirakpur, Punjab 140603",
        external: true,
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/cynormedia/",
    label: "Facebook",
    Icon: FacebookContact,
  },
  {
    href: "https://www.instagram.com/cynor.media/",
    label: "Instagram",
    Icon: InstagramContact,
  },
  {
    href: "https://in.linkedin.com/company/cynormedia",
    label: "LinkedIn",
    Icon: LinkdinContact,
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/; // Simple phone validation: digits only, length 7-15

const LetsTalkContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const subjects = [
    "General Inquiry",
    "Product Launch",
    "BTL Activity",
    "Exhibition Setup",
    "Float Van",
  ];

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For radio inputs, e.target.checked can be used but here it's unnecessary
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear messages on input change
    setSuccessMessage("");
    setErrorMessage("");
    if (name === "phone") setPhoneError("");
  };

  // Validate email and phone
  const validateInputs = useCallback(() => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) return false;
    if (!emailRegex.test(formData.email.trim())) return false;
    if (formData.phone && !phoneRegex.test(formData.phone.trim())) return false;
    if (!formData.message.trim()) return false;
    return true;
  }, [formData]);

  // Enable submit button only when validation passes
  useEffect(() => {
    setIsSubmitDisabled(!validateInputs());
  }, [formData, validateInputs]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setPhoneError("");

    // Validate phone again
    if (formData.phone && !phoneRegex.test(formData.phone.trim())) {
      setPhoneError(
        "Please enter a valid phone number (digits only, 7-15 characters)."
      );
      return;
    }

    if (!validateInputs()) {
      setErrorMessage(
        "Please fill in all required fields with valid information."
      );
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
      };
      // Replace these with your EmailJS service ID, template ID, and public key
      const serviceId = "service_nxiai8h";
      const templateId = "template_76hdynp";
      const publicKey = "IvqQP1G2d8gxS6Zdz";

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="py-10 lg:pt-14 xl:pt-24 lg:pb-[105px]"
    >
      <div className=" container max-w-[1440px] mx-auto px-4">
        <h2 className="text-center font-bold text-5xl ont-Montserrat leading-[121%]">
          Contact Us
        </h2>
        <p className="text-center mt-4 font-Poppins text-lg text-[#c9c9c9]">
          Any question or remarks? Just write us a message!
        </p>
        <div className="flex flex-wrap justify-between items-center gap-8 p-4 rounded-xl shadow-contact-form mt-10">
          {/* Left Panel */}
          <aside className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start bg-black text-white p-4 xl:p-10 rounded-xl relative">
            <ContactBgIcon />
            <h1
              id="contact-heading"
              className="font-Poppins font-semibold text-xl md:text-[22px] lg:text-2xl xl:text-[32px] text-white leading-[1.21]"
            >
              Contact Information
            </h1>
            <p className="font-Poppins text-[#c9c9c9] text-sm md:text-lg mt-2 text-center md:text-left">
              Say something to start a live chat!
            </p>

            <div className="mt-4 lg:mt-24 space-y-5 xl:space-y-[40px]">
              {contactDetails.map(({ Icon, links }, i) => (
                <div
                  key={i}
                  className="flex flex-wrap gap-3 md:gap-6 items-start"
                >
                  <Icon aria-hidden="true" />
                  <div className=" lg:w-[250px] xl:w-[390px]">
                    <ul>
                      {links.map(({ href, label, external }) => (
                        <li
                          key={href}
                          className="max-w-[182px] lg:max-w-[250px] xl:max-w-[390px]"
                        >
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="hover:text-gray-300 text-[14px] md:text-base font-Poppins font-medium text-[#c9c9c9] transition duration-300 max-w-[180px]"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <nav
              className="flex gap-10 mt-5 xl:mt-36 mb-24 xl:mb-0"
              aria-label="Social links"
            >
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </nav>
          </aside>

          <div className="w-full md:w-[55%] flex flex-col">
            {/* Right Panel - Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              aria-label="Contact form"
              noValidate
            >
              <div className="flex flex-wrap gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="w-full xl:w-[48%] border-b border-gray-300 bg-transparent p-2 font-Poppins font-medium text-base focus-visible:outline-none focus-visible:ring-0"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                  className="w-full xl:w-[48%] border-b border-gray-300 bg-transparent p-2 font-Poppins font-medium text-base focus-visible:outline-none focus-visible:ring-0"
                />
              </div>

              <div className="flex flex-wrap gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full xl:w-[48%] border-b border-gray-300 bg-transparent p-2 font-Poppins font-medium text-base focus-visible:outline-none focus-visible:ring-0"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => {
                    let value = e.target.value;

                    // Allow '+' only at start and max 10 digits after
                    if (/^\+?\d*$/.test(value)) {
                      const digitsOnly = value.startsWith("+")
                        ? value.slice(1)
                        : value;

                      if (digitsOnly.length <= 10) {
                        handleChange(e);
                      }
                    }
                  }}
                  autoComplete="tel"
                  className="w-full xl:w-[48%] border-b border-gray-300 bg-transparent p-2 font-Poppins font-medium text-base focus:outline-none focus:ring-0"
                />
              </div>

              {/* Custom Subject Radio Buttons */}
              <div className="mb-4">
                <label className="block font-Poppins font-medium text-base mb-2">
                  Select Services ?
                </label>
                <div className="flex flex-wrap gap-3 lg:gap-6">
                  {subjects.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer font-Poppins font-medium text-base"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={item}
                        checked={formData.subject === item}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.subject === item
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.subject === item && (
                          <span className="w-2 h-2 bg-black rounded-full" />
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          formData.subject === item
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="1"
                required
                className="w-full border-b border-gray-300 bg-transparent p-2 font-Poppins font-medium text-base focus-visible:outline-none focus-visible:ring-0 resize-none"
              />

              {successMessage && (
                <p className="text-green-600 text-sm">
                  {successMessage} <br />{" "}
                  <span className="text-xs text-gray-400">
                    Submitted at: {time}
                  </span>
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}
              {phoneError && (
                <p className="text-red-600 text-sm">{phoneError}</p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitDisabled || isSending}
                  className={`mt-4 bg-black text-white font-Poppins font-medium text-base px-10 py-3 rounded-lg transition ${
                    isSubmitDisabled || isSending
                      ? "cursor-not-allowed"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {isSending ? "Sending..." : "Submit Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LetsTalkContactUs;
