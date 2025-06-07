"use client";

import React from "react";
import Herohome from "../Components/Herohome";
import Ourservicehome from "../Components/Ourservicehome";
import Aboutushome from "../Components/Aboutushome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Recentshowcasehome from "../Components/Recentshowcasehome";
import Founderqoute from "../Components/Founderquote";
import SEO from "../Components/SEO";

const Home = () => {
  const title = "Event Management & BTL Marketing Company | Cynor Media";
  const description =
    "Cynor Media is a leading event management and BTL marketing agency in India, offering float vans, product launch services, exhibitions, portable displays, and more.";
  const url = "https://www.cynormedia.com/";
  const image = "/images/og-home.jpg";

  return (
    <>
      <SEO title={title} description={description} url={url} image={image} />
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
