"use client";

import React from "react";
import Head from "next/head";

const Mapcontactus = () => {
  return (
    <>
      <Head>
        <title>Find Cynor Media - Event Management Company in Chandigarh</title>
        <meta
          name="description"
          content="Locate Cynor Media, a top event management company in Chandigarh. View our office location on the map and get in touch."
        />
      </Head>

      <section
        aria-label="Location map of Cynor Media in Chandigarh"
        className="pb-10 md:pb-16 lg:pb-[100px]"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <iframe
            title="Cynor Media Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.001528192849!2d76.8020573!3d30.6339145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb26ec66853b%3A0x88d9cbbca0721a13!2sEvent%20Management%20Company%20In%20Chandigarh%20-%20Cynor%20Media!5e0!3m2!1sen!2sin!4v1735304575766!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 md:h-[314px] rounded-3xl border-0"
          />
        </div>
      </section>
    </>
  );
};

export default Mapcontactus;
