"use client";

import React from "react";
import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";
import SEO from "../Components/SEO";

const Service = () => {
  const title = "Services - BTL Marketing & Event Management | Cynor Media";
  const description =
    "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.";
  const url = "https://www.cynormedia.com/service";
  const image = "/images/og-services.jpg";

  return (
    <>
      <SEO title={title} description={description} url={url} image={image} />
      <main>
        <OurService />
        <Campaigncards />
      </main>
    </>
  );
};

export default Service;
