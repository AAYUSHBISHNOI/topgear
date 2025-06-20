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
    "Leading BTL marketing agency in India. Cynor Media specializes in activations, product launches, float vans, and direct-to-consumer branding solutions.",
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
      "Leading BTL marketing agency in India. Cynor Media specializes in activations, product launches, float vans, and direct-to-consumer branding solutions.",
    url: "https://www.cynormedia.com/our-clients",
    images: [
      {
        url: "https://thumbs2.imgbox.com/30/71/dcC19Jcc_t.jpg",
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
      "Leading BTL marketing agency in India. Cynor Media specializes in activations, product launches, float vans, and direct-to-consumer branding solutions.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/30/71/dcC19Jcc_t.jpg",
        alt: "Cynor Media Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/our-clients",
  },
};

const OurClient = () => {
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
};

export default OurClient;
