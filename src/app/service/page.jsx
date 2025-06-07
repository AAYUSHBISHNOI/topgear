"use client";

import React from "react";
import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";
import { metadata } from "next";

export const metadata = {
  title: {
    template: "%s | Cynor Media",
    absolute: "Cynor Media - BTL Marketing Experts in India",
  },
  description:
    "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
  keywords:
    "BTL marketing, event management, promotional campaigns, branding solutions, Cynor Media",
  robots: "index, follow",
};

const Service = () => {
  return (
    <>
      <main>
        <OurService />
        <Campaigncards />
      </main>
    </>
  );
};

export default Service;
