import React from "react";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Enoughtalks from "../Common/Enoughtalks";




export const dynamic = "force-static";




export const metadata = {
  title: "Our Clients - Trusted by Top Brands | Cynor Media",
  description:
    "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India",
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
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India",
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
