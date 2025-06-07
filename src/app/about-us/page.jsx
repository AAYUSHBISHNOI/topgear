"use client";

import React from "react";
import Heroaboutus from "../Components/Heroaboutus";
import Ourvision from "../Components/Ourvision";
import Experienceaboutus from "../Components/Experinceaboutus";
import Customeraboutus from "../Components/Customeraboutus";
import WhyChooseUs from "../Components/Whychooseusaboutus";
import Ourmissionaboutus from "../Components/Ourmissionaboutus";
import Enoughtalks from "../Common/Enoughtalks";
import SEO from "../Components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us - BTL Marketing Experts in India | Cynor Media"
        description="Get to know Cynor Media — India’s leading event management and BTL marketing company with a proven track record in product launches, float vans, exhibitions, and portable displays."
        url="https://www.cynormedia.com/about-us"
        image="/images/og-about.jpg"
      />

      <main>
        <Heroaboutus />
        <Ourvision />
        <Experienceaboutus />
        <Customeraboutus />
        <WhyChooseUs />
        <Ourmissionaboutus />
        <Enoughtalks />
      </main>
    </>
  );
};

export default AboutUs;
