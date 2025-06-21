import React from "react";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Enoughtalks from "../Common/Enoughtalks";

export const dynamic = "force-static";

export const metadata = {
  title: "Our Clients - Trusted by Leading Brands | Cynor Media",
  description:
    "Discover how Cynor Media has helped leading brands like Tata, Maruti Suzuki, Hero, and John Deere achieve marketing success through innovative BTL campaigns and brand activations across India.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": 160,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Our Clients - Trusted by Leading Brands | Cynor Media",
    description:
      "Discover how Cynor Media has helped leading brands like Tata, Maruti Suzuki, Hero, and John Deere achieve marketing success through innovative BTL campaigns and brand activations across India.",
    url: "https://www.cynormedia.com/our-clients",
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
