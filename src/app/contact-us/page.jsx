import React from "react";
import LetsTalkContactUs from "../Components/Letstalkcontactus";
import Mapcontactus from "../Components/Mapcontactus";



export const dynamic = "force-static";



export const metadata = {
  title: "Contact Us - Expert BTL Marketing & Event Management | Cynor Media  ",
  description:
    "Get in touch with Cynor Media for expert BTL marketing services and event management solutions across India. Let's elevate your brand together.",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Contact Us - Expert BTL Marketing & Event Management | Cynor Media  ",
    description:
      "Get in touch with Cynor Media for expert BTL marketing services and event management solutions across India. Let's elevate your brand together.",
    url: "https://www.cynormedia.com/service",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Cynor Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us - Expert BTL Marketing & Event Management | Cynor Media  ",
    description:
      "Cynor Media offers expert BTL marketing services and event management solutions across India and Australia. Elevate your brand with our promotional campaigns and branding expertise.",
    images: [
      {
        url: "/images/og-services.jpg",
        alt: "Cynor Media Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/service",
  },
};

const ContactUs = () => {
  return (
    <>
      <main className="bg-[#fbfbfb]">
        <LetsTalkContactUs />
        <Mapcontactus />
      </main>
    </>
  );
};

export default ContactUs;
