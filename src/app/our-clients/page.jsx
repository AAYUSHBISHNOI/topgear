"use client";


import Enoughtalks from "../Common/Enoughtalks";
import Accordion from "../Components/Accordion";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Heroourclients from "../Components/Heroourclients";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";

export const metadata = {
  title: "Our Clients - Trusted by Top Brands | Cynor Media",
  description:
    "Explore the clients who trust Cynor Media for exceptional event management and BTL marketing services across India.",
  keywords: [
    "Cynor Media Clients",
    "Trusted by Brands",
    "Event Marketing Partners",
    "BTL Marketing Clients",
    "Top Event Management India",
  ],
  robots: "index, follow",
  authors: [{ name: "Cynor Media", url: "https://www.cynormedia.com" }],
  alternates: {
    canonical: "https://www.cynormedia.com/our-clients",
  },
  openGraph: {
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "Cynor Media proudly serves top brands with impactful event management and BTL marketing solutions tailored to their business goals.",
    url: "https://www.cynormedia.com/our-clients",
    type: "website",
    images: [
      {
        url: "https://www.cynormedia.com/images/og-our-client.jpg", // Ensure this path is valid
        width: 1200,
        height: 630,
        alt: "Cynor Media Clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "See the organizations that count on Cynor Media to elevate their brand through expert event execution and marketing.",
    images: ["https://www.cynormedia.com/images/og-our-client.jpg"],
  },
};

export default function ourclient() {
  return (
    <main>
      <Heroourclients />
      <Clientwhotrustus />
      <Paraourclients />
      <Wallofreviews />
      <Accordion />
      <Enoughtalks />
    </main>
  );
}
