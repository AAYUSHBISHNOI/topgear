"use client";

import React from "react";
import Head from "next/head";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Enoughtalks from "../Common/Enoughtalks";



export const metadata = {
  title: "Our Clients - Trusted by Top Brands | Cynor Media",
  description:
    "Explore the clients who trust Cynor Media for exceptional event management and BTL marketing services across India.",
  keywords: [
    "BTL marketing",
    "event management",
    "trusted clients",
    "Cynor Media clients",
    "branding solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "Cynor Media proudly serves top brands with impactful event management and BTL marketing solutions tailored to their business goals.",
    type: "website",
    url: "https://www.cynormedia.com/our-clients",
    images: ["/images/og-our-client.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "See the organizations that count on Cynor Media to elevate their brand through expert event execution and marketing.",
    images: ["/images/og-our-client.jpg"],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/our-clients",
  },
};

const OurClient = () => {
  return (
    <> 

      <main>
        <Heroourclients />
        <Clientwhotrustus />
        <Paraourclients />
        <Wallofreviews />
        <Accordion />
        <Enoughtalks />
      </main>
    </>
  );
};

export default OurClient;
