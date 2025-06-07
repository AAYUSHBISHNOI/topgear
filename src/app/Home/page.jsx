import React from "react";
import Herohome from "../Components/Herohome";
import Ourservicehome from "../Components/Ourservicehome";
import Aboutushome from "../Components/Aboutushome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Recentshowcasehome from "../Components/Recentshowcasehome";
import Founderqoute from "../Components/Founderquote";

export const metadata = {
  title: "Cynor Media - Expert BTL Marketing & Event Management Services",
  description:
    "Cynor Media offers expert BTL marketing services and event management solutions across India. Elevate your brand with our promotional campaigns and branding expertise.",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cynor Media - Expert BTL Marketing & Event Management Services",
    description:
      "Cynor Media offers expert BTL marketing services and event management solutions across India. Elevate your brand with our promotional campaigns and branding expertise.",
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
    title: "Cynor Media - Expert BTL Marketing & Event Management Services",
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

const Home = () => {
  return (
    <>
      <main>
        <Herohome />
        <Ourservicehome />
        <Aboutushome />
        <Ourprocesshome />
        <Recentshowcasehome />
        <Founderqoute />
      </main>
    </>
  );
};

export default Home;
