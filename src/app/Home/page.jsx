import React from "react";
import Herohome from "../Components/Herohome";
import Ourservicehome from "../Components/Ourservicehome";
import Aboutushome from "../Components/Aboutushome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Recentshowcasehome from "../Components/Recentshowcasehome";
import Founderqoute from "../Components/Founderquote";

export const dynamic = "force-static";

export const metadata = {
  title: "Cynor Media - Expert BTL Marketing & Event Management Services",
  description:
    "Take your brand directly to your audience with Cynor Media’s expert BTL marketing. We plan and execute roadshows, activations, and unforgettable brand events across India.",
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
      "Take your brand directly to your audience with Cynor Media’s expert BTL marketing. We plan and execute roadshows, activations, and unforgettable brand events across India.",
    url: "https://www.cynormedia.com",
    images: [
      {
        url: "https://thumbs2.imgbox.com/65/84/3OyMvm5A_t.png",
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
      "Take your brand directly to your audience with Cynor Media’s expert BTL marketing. We plan and execute roadshows, activations, and unforgettable brand events across India.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/65/84/3OyMvm5A_t.png",
        alt: "Cynor Media Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com",
  },
};

const Home = () => {
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
};

export default Home;
