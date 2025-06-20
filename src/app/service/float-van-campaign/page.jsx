import React from "react";
import Floatcampaign from "./Floatcampaign";


export const dynamic = "force-static";


export const metadata = {
  title: "Float Van Campaign - Powerful On-Ground Branding | Cynor Media",
  description:
    "Launch high-impact Float Van campaigns with Cynor Media. From LED vans to rural activation, we bring your brand to the streets across India.",
  keywords: [
    "Float Van",
    "Float Van Campaign",
    "BTL marketing",
    "LED van branding",
    "rural activations",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Float Van Campaign - Powerful On-Ground Branding | Cynor Media",
    description:
      "Discover Cynor Media’s Float Van campaigns — mobile marketing with LED screens, loud branding, and real engagement across India.",
    url: "https://www.cynormedia.com/float-van-campaign",
    images: [
      {
        url: "/images/og-float-van.jpg",
        width: 1200,
        height: 630,
        alt: "Cynor Media Float Van Campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Float Van Campaign - Powerful On-Ground Branding | Cynor Media",
    description:
      "Float Van campaigns designed to create visibility and connect your brand with people across India. Partner with Cynor Media.",
    images: [
      {
        url: "/images/og-float-van.jpg",
        alt: "Float Van by Cynor Media",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/float-van-campaign",
  },
};


const FloatVanCampaign = () => {
  return (
    <main>
      <Floatcampaign />
    </main>
  );
};

export default FloatVanCampaign;
