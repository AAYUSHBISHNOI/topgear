import Heroaboutus from "../Components/Heroaboutus";
import Ourvision from "../Components/Ourvision";
import Experienceaboutus from "../Components/Experinceaboutus";
import Customeraboutus from "../Components/Customeraboutus";
import WhyChooseUs from "../Components/Whychooseusaboutus";
import Ourmissionaboutus from "../Components/Ourmissionaboutus";
import Enoughtalks from "../Common/Enoughtalks";

export const dynamic = "force-static";

export const metadata = {
  title: "About Us - Expert BTL Marketing & Event Management | Cynor Media ",
  description:
    "Learn about Cynor Media's vision, experience, and mission as a leading BTL marketing and event management company in India. Discover why top brands choose us.",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About Us - Expert BTL Marketing & Event Management | Cynor Media ",
    description:
      "Learn about Cynor Media's vision, experience, and mission as a leading BTL marketing and event management company in India. Discover why top brands choose us.",
    url: "https://www.cynormedia.com/about-us",
    images: [
      {
        url: "https://thumbs2.imgbox.com/92/cd/RFpJfOWa_t.png",
        width: 1200,
        height: 630,
        alt: "Cynor Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Expert BTL Marketing & Event Management | Cynor Media ",
    description:
      "Cynor Media is a leading BTL marketing and event management company in India, delivering impactful brand experiences through activations, roadshows, and promotional events.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/92/cd/RFpJfOWa_t.png",
        alt: "Cynor Media Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/about-us",
  },
};

const AboutUs = () => {
  return (
    <main>
      <Heroaboutus />
      <Ourvision />
      <Experienceaboutus />
      <Customeraboutus />
      <WhyChooseUs />
      <Ourmissionaboutus />
      <Enoughtalks />
    </main>
  );
};

export default AboutUs;
