"use client";

import Head from "next/head";
import Heroaboutus from "../Components/Heroaboutus";
import Ourvision from "../Components/Ourvision";
import Experienceaboutus from "../Components/Experinceaboutus";
import Customeraboutus from "../Components/Customeraboutus";
import WhyChooseUs from "../Components/Whychooseusaboutus";
import Ourmissionaboutus from "../Components/Ourmissionaboutus";
import Enoughtalks from "../Common/Enoughtalks";

const aboutus = () => {
  return (
    <>
      <Head>
        <title>About Us | Cynor Media</title>
        <meta
          name="description"
          content="Discover why our customers choose us — from top-tier services to unmatched support and value."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Cynor Media" />
        <meta
          property="og:description"
          content="Learn more about what makes our service stand out."
        />
        <meta property="og:type" content="website" />
      </Head>
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

export default aboutus;
