"use client";


import Aboutushome from "../Components/Aboutushome";
import Founderqoute from "../Components/Founderquote";
import Herohome from "../Components/Herohome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Ourservicehome from "../Components/Ourservicehome";
import Recentshowcasehome from "../Components/Recentshowcasehome";

export const metadata = {
  title: "Event Management & BTL Marketing Company | Cynor Media",
  description:
    "Cynor Media is a leading event management and BTL marketing agency in India, offering float vans, product launch services, exhibitions, portable displays, and more.",
  keywords: [
    "Event Management",
    "BTL Marketing India",
    "Float Van Services",
    "Product Launch Events",
    "Exhibitions",
    "Portable Displays",
    "Cynor Media",
  ],
  robots: "index, follow",
  authors: [{ name: "Cynor Media", url: "https://www.cynormedia.com" }],
  alternates: {
    canonical: "https://www.cynormedia.com/",
  },
  openGraph: {
    title: "Event Management & BTL Marketing Company | Cynor Media",
    description:
      "Explore Cynor Media's innovative event management and marketing services tailored for impactful brand activations across India.",
    url: "https://www.cynormedia.com/",
    type: "website",
    images: [
      {
        url: "https://www.cynormedia.com/images/og-home.jpg", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Cynor Media Event Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Management & BTL Marketing Company | Cynor Media",
    description:
      "Get in touch with Cynor Media for expert marketing, float vans, and promotional event solutions.",
    images: ["https://www.cynormedia.com/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Herohome />
      <Ourservicehome />
      <Aboutushome />
      <Ourprocesshome />
      <Recentshowcasehome />
      <Founderqoute />
    </main>
  );
}
