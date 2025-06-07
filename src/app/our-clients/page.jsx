// src/app/OurClients/page.jsx  (or .tsx)

import Heroourclients from "../../Components/Heroourclients";
import Clientwhotrustus from "../../Components/Clientwhotrustus";
import Paraourclients from "../../Components/Paraourclients";
import Wallofreviews from "../../Components/Wallofreviews";
import Accordion from "../../Components/Accordion";
import Enoughtalks from "../../Common/Enoughtalks";

export const metadata = {
  title: "Our Clients - Trusted by Top Brands | Cynor Media",
  description:
    "Explore the clients who trust Cynor Media for exceptional event management and BTL marketing services across India.",
  keywords: [
    "Our Clients",
    "Event Management Clients",
    "BTL Marketing Clients",
    "Cynor Media Clients",
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
        url: "https://thumbs2.imgbox.com/b7/c7/hqKfoHR2_t.png",
        width: 1200,
        height: 630,
        alt: "Our Clients - Cynor Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Trusted by Top Brands | Cynor Media",
    description:
      "See the organizations that count on Cynor Media to elevate their brand through expert event execution and marketing.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/b7/c7/hqKfoHR2_t.png",
        alt: "Our Clients - Cynor Media",
      },
    ],
  },
};

export default function ourclients() {
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
