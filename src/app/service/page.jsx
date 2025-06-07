"use client";

import React from "react";
import Head from "next/head";
import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";

const Service = () => {
  return (
    <>
      <Head>
        <title>Services - BTL Marketing & Event Management | Cynor Media</title>
        <meta
          name="description"
          content="Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynor Media" />
        <link rel="canonical" href="https://www.cynormedia.com/service" />
        <meta
          property="og:title"
          content="Services - BTL Marketing & Event Management | Cynor Media"
        />
        <meta
          property="og:description"
          content="Cynor Media delivers expert event management and BTL services that drive impact, awareness, and engagement for top brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cynormedia.com/service" />
        <meta property="og:image" content="/images/og-services.jpg" />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services - BTL Marketing & Event Management | Cynor Media"
        />
        <meta
          name="twitter:description"
          content="Explore Cynor Media's expert services for impactful BTL campaigns and professional event execution."
        />
        <meta name="twitter:image" content="/images/og-services.jpg" />
      </Head>

      <main>
        <OurService />
        <Campaigncards />
      </main>
    </>
  );
};

export default Service;
