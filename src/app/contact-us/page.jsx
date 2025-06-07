"use client";

import LetsTalkContactUs from "../Components/Letstalkcontactus";
import Mapcontactus from "../Components/Mapcontactus";
import SEO from "../Components/SEO";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact BTL Marketing Experts India | Cynor Media"
        description="Get in touch with Cynor Media for event management, BTL marketing, and promotional campaigns across India and Australia."
        url="https://www.cynormedia.com/contact-us"
        image="/images/og-contact.jpg"
      />
      <main className="bg-[#fbfbfb]">
        <LetsTalkContactUs />
        <Mapcontactus />
      </main>
    </>
  );
};
export default ContactUs;
