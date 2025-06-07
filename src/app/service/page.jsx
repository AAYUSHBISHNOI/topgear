// src/app/service/page.jsx

import OurService from "../../Components/Ourservices";
import Campaigncards from "../../Components/Campaigncards";

export const metadata = {
  title: "Services - BTL Marketing & Event Management | Cynor Media",
  description:
    "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.",
  keywords: [
    "BTL Marketing Services",
    "Event Management Services",
    "Float Van Promotions",
    "Exhibitions",
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
        url: "https://thumbs2.imgbox.com/0f/ae/YDLVGZso_t.png",
        width: 1200,
        height: 630,
        alt: "Services - Cynor Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - BTL Marketing & Event Management | Cynor Media",
    description:
      "Explore Cynor Media's expert services for impactful BTL campaigns and professional event execution.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/0f/ae/YDLVGZso_t.png",
        alt: "Services - Cynor Media",
      },
    ],
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
