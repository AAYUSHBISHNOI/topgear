"use client";


import Heroaboutus from "../../Components/Heroaboutus";
import Ourvision from "../../Components/Ourvision";
import Experienceaboutus from "../../Components/Experinceaboutus";
import Customeraboutus from "../../Components/Customeraboutus";
import WhyChooseUs from "../../Components/Whychooseusaboutus";
import Ourmissionaboutus from "../../Components/Ourmissionaboutus";
import Enoughtalks from "../../Common/Enoughtalks";

export const metadata = {
  title: "About Us - BTL Marketing Experts in India | Cynor Media",
  description:
    "Get to know Cynor Media — India’s leading event management and BTL marketing company with a proven track record in product launches, float vans, exhibitions, and portable displays.",
  keywords: [
    "Cynor Media",
    "About Cynor",
    "Event Management India",
    "BTL Marketing Experts",
    "Brand Promotions",
  ],
  authors: [{ name: "Cynor Media", url: "https://www.cynormedia.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cynormedia.com/about-us",
  },
  openGraph: {
    title: "About Us - BTL Marketing Experts in India | Cynor Media",
    description:
      "Learn more about Cynor Media — your trusted partner for innovative and impactful marketing and event solutions.",
    url: "https://www.cynormedia.com/about-us",
    type: "website",
    images: [
      {
        url: "https://www.cynormedia.com/images/og-about.jpg", // Make sure this image exists or use correct one
        width: 1200,
        height: 630,
        alt: "About Cynor Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - BTL Marketing Experts in India | Cynor Media",
    description:
      "Explore Cynor Media’s journey, mission, and values that drive success in event management and BTL marketing.",
    images: ["https://www.cynormedia.com/images/og-about.jpg"],
  },
};

export default function aboutus() {
  return (
    <main>
      <Heroaboutus />
      <Ourvision />
      <Experienceaboutus />
      <Customeraboutus />
      <WhyChooseUs />
      <Ourmissionaboutus />
      <Enoughtalks />
    </main>
  );
}
