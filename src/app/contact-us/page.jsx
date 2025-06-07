"use client";

import React from "react";
import Head from "next/head";
import LetsTalkContactUs from "../Components/Letstalkcontactus";
import Mapcontactus from "../Components/Mapcontactus";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact BTL Marketing Experts India | Cynor Media</title>
        <meta
          name="description"
          content="Get in touch with Cynor Media for event management, BTL marketing, and promotional campaigns across India and Australia."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynor Media" />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Contact BTL Marketing Experts India | Cynor Media"
        />
        <meta
          property="og:description"
          content="Contact Cynor Media for expert event planning, marketing, and branding solutions."
        />
        <meta property="og:image" content="/images/og-contact.jpg" />{" "}
        {/* Replace with your real image path */}
        <meta
          property="og:url"
          content="https://www.cynormedia.com/contact-us"
        />{" "}
        {/* Update to real URL */}
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact BTL Marketing Experts India | Cynor Media"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Cynor Media for your next marketing or event campaign."
        />
        <meta name="twitter:image" content="/images/og-contact.jpg" />{" "}
        {/* Same as above */}
        <link rel="canonical" href="https://www.cynormedia.com/contact-us" />
      </Head>

      <main className="bg-[#fbfbfb]">
        <LetsTalkContactUs />
        <Mapcontactus />
      </main>
    </>
  );
};

export default ContactUs;
