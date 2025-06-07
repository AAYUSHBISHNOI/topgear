"use client";

import React from "react";
import Head from "next/head";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Enoughtalks from "../Common/Enoughtalks";

const OurClient = () => {
  return (
    <>
      <Head>
        <title>Our Clients - Trusted by Top Brands | Cynor Media</title>
        <meta
          name="description"
          content="Explore the clients who trust Cynor Media for exceptional event management and BTL marketing services across India."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynor Media" />
        <link rel="canonical" href="https://www.cynormedia.com/our-clients" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Clients - Trusted by Top Brands | Cynor Media"
        />
        <meta
          property="og:description"
          content="Cynor Media proudly serves top brands with impactful event management and BTL marketing solutions tailored to their business goals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cynormedia.com/our-clients"
        />
        <meta property="og:image" content="/images/og-our-client.jpg" />{" "}
        {/* Replace with actual image path */}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Clients - Trusted by Top Brands | Cynor Media"
        />
        <meta
          name="twitter:description"
          content="See the organizations that count on Cynor Media to elevate their brand through expert event execution and marketing."
        />
        <meta name="twitter:image" content="/images/og-our-client.jpg" />
      </Head>

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
