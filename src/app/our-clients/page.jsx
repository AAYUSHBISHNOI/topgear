"use client";

import React from "react";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Enoughtalks from "../Common/Enoughtalks";
import SEO from "../Components/SEO";

const OurClient = () => {
  return (
    <>
      <SEO
        title="Our Clients - Trusted by Top Brands | Cynor Media"
        description="Explore the clients who trust Cynor Media for exceptional event management and BTL marketing services across India."
        url="https://www.cynormedia.com/our-clients"
        image="/images/og-our-client.jpg"
      />

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
