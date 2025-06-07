"use client";

import React from "react";
import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";

export const metadata = {
  title: "Services - BTL Marketing & Event Management | Cynor Media",
  description:
    "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.",
  keywords: [
    "BTL Marketing Services",
    "Event Management India",
    "Float Van Promotions",
    "Portable Displays",
    "Cynor Media Services",
  ],
  robots: "index, follow",
  authors: [{ name: "Cynor Media", url: "https://www.cynormedia.com" }],
  alternates: {
    canonical: "https://www.cynormedia.com/service",
  },
  openGraph: {
    title: "Services - BTL Marketing & Event Management | Cynor Media",
    description:
      "Cynor Media delivers expert event management and BTL services that drive impact, awareness, and engagement for top brands.",
    url: "https://www.cynormedia.com/service",
    type: "website",
    images: [
      {
        url: "https://www.cynormedia.com/images/og-services.jpg", // Make sure this exists
        width: 1200,
        height: 630,
        alt: "Cynor Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - BTL Marketing & Event Management | Cynor Media",
    description:
      "Explore Cynor Media's expert services for impactful BTL campaigns and professional event execution.",
    images: ["https://www.cynormedia.com/images/og-services.jpg"],
  },
};

export default function service() {
  return (
    <main>
      <OurService />
      <Campaigncards />
    </main>
  );
}
