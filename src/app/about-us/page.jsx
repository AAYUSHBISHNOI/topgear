"use client";

import Head from "next/head";
import Heroaboutus from "../../components/Heroaboutus";
import Ourvision from "../../components/Ourvision";
import Experienceaboutus from "../../components/Experienceaboutus";
import Customeraboutus from "../../components/Customeraboutus";
import WhyChooseUs from "../../components/WhyChooseUsAboutUs";
import Ourmissionaboutus from "../../components/Ourmissionaboutus";
import Enoughtalks from "../../common/Enoughtalks";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - BTL Marketing Experts in India | Cynor Media</title>
        <meta
          name="description"
          content="Get to know Cynor Media — India’s leading event management and BTL marketing company with a proven track record in product launches, float vans, exhibitions, and portable displays."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynor Media" />
        <link rel="canonical" href="https://www.cynormedia.com/about-us" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Us - BTL Marketing Experts in India | Cynor Media"
        />
        <meta
          property="og:description"
          content="Learn more about Cynor Media — your trusted partner for innovative and impactful marketing and event solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cynormedia.com/about-us" />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/fe/be/amx1SmBb_t.png"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - BTL Marketing Experts in India | Cynor Media"
        />
        <meta
          name="twitter:description"
          content="Explore Cynor Media’s journey, mission, and values that drive success in event management and BTL marketing."
        />
        <meta
          name="twitter:image"
          content="https://thumbs2.imgbox.com/fe/be/amx1SmBb_t.png"
        />
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
}
