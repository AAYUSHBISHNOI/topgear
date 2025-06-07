"use client";

import React from "react";
import Head from "next/head";
import Herohome from "../Components/Herohome";
import Ourservicehome from "../Components/Ourservicehome";
import Aboutushome from "../Components/Aboutushome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Recentshowcasehome from "../Components/Recentshowcasehome";
import Founderqoute from "../Components/Founderquote";

const Home = () => {
  return (
    <>
      <Head>
        <title>Event Management & BTL Marketing Company | Cynor Media </title>
        <meta
          name="description"
          content="Cynor Media is a leading event management and BTL marketing agency in India, offering float vans, product launch services, exhibitions, portable displays, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynor Media" />
        <link rel="canonical" href="https://www.cynormedia.com/" />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Event Management & BTL Marketing Company | Cynor Media "
        />
        <meta
          property="og:description"
          content="Explore Cynor Media's innovative event management and marketing services tailored for impactful brand activations across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cynormedia.com/" />
        <meta property="og:image" content="/images/og-home.jpg" />{" "}
        {/* Replace with your OG image */}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Event Management & BTL Marketing Company | Cynor Media "
        />
        <meta
          name="twitter:description"
          content="Get in touch with Cynor Media for expert marketing, float vans, and promotional event solutions."
        />
        <meta name="twitter:image" content="/images/og-home.jpg" />
      </Head>

      <main>
        <Herohome />
        <Ourservicehome />
        <Aboutushome />
        <Ourprocesshome />
        <Recentshowcasehome />
        <Founderqoute />
      </main>
    </>
  );
};

export default Home;
