"use client";

import Image from "next/image";

const campaigns = [
  {
    title: "Float Van Campaign",
    description:
      "Take your brand on the move with a dynamic Float Van Campaign. These mobile branding vehicles are customized with eye-catching visuals, music, and interactive setups that travel to high-footfall areas, markets, and events. Roll up with your brand, spark conversations, and turn every stop into an opportunity.",
    image: "/Images/Services/Webp/Float-Van.webp",
    alt: "Float Van Campaign",
  },
  {
    title: "BTL Marketing",
    description:
      "BTL (Below the Line) Marketing focuses on localized, direct engagement with your target audience through personalized experiences. We design campaigns like activations, roadshows, product sampling, and street promotions that help your brand build real, emotional connections on-ground and drive measurable business impact.",
    image: "/Images/Services/Webp/Btl.webp",
    alt: "BTL Marketing",
  },
  {
    title: "Float Setup",
    description:
      "A Float Setup transforms public spaces into branded showcases using customized mobile platforms. These are often themed and equipped with product displays, mascots, music, and performers, creating a striking and memorable on-ground presence, especially during festivals, events, or special promotions.",
    image: "/Images/Services/Webp/Float-Setup.webp",
    alt: "Float Setup",
  },
  {
    title: "Market Setup",
    description:
      "Market Setups help brands tap into bustling local markets by setting up branded stalls, canopies, and demo zones. It’s a highly effective way to connect with potential customers, showcase products, distribute samples, and generate leads right where buying decisions happen.",

    image: "/Images/Services/Webp/Market-Setup.webp",
    alt: "Market Setup",
  },
  {
    title: "Product Launch",
    description:
      "Leave a long-term impression for your product with our Product Launch services. From concept to execution, we manage everything — venue setup, stage management, product unveil moments, audience engagement, media coverage, and digital amplification, ensuring your new product makes a lasting impression.",

    image: "/Images/Services/Webp/Product-Launch.webp",
    alt: "Product Launch",
  },
  {
    title: "Corporate Events",
    description:
      "Professional, seamless, and on-point — our Corporate Event services cover conferences, seminars, award nights, annual meets, and more. We take care of every detail, from venue arrangements to audiovisual setups, branding, guest management, and logistics to deliver flawless, impactful business gatherings.",

    image: "/Images/Services/Webp/Corporate.webp",
    alt: "Corporate Events",
  },
  {
    title: "Marketing Survey",
    description:
      "Understand your audience better with real-time, on-ground Marketing Surveys. Our trained promoters conduct structured surveys in malls, markets, societies, and commercial areas, gathering valuable consumer feedback and insights that can shape your future marketing and product strategies.",

    image: "/Images/Services/Webp/Marketingsurvey.webp",
    alt: "Marketing Survey",
  },
  {
    title: "Test Drive",
    description:
      "Turn test drives into decisions with our on-ground Test Drive Events. We set up branded experience zones in malls, RWAs, and public areas where customers can explore, test, and experience your vehicle in a relaxed, interactive environment, supported by expert product demos and booking facilities.",

    image: "/Images/Services/Webp/Test-Drive.webp",
    alt: "Test Drive",
  },
  {
    title: "Residential Campaign",
    description:
      "With residential campaigns, you can take your brand directly to your audience. We organize creative, interactive activities, games, contests, and product displays in gated communities and apartment complexes, enabling brands to build personal connections and drive awareness within tight-knit neighborhoods.",

    image: "/Images/Services/Webp/Residential-Campaign.webp",
    alt: "Residential Campaign",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s online visibility with our Digital Marketing services. We craft strategic, performance-driven campaigns across social media, search engines, and influencer platforms, creating engaging content, targeted ads, and interactive campaigns that convert viewers into customers.",

    image: "/Images/Services/Webp/Digital-Marketing.webp",
    alt: "Digital Marketing",
  },
  {
    title: "Creative Design",
    description:
      "Visually striking designs are the language of brands. Our Creative Design services deliver compelling digital and print creatives for events, promotions, and digital campaigns, ensuring your brand identity is consistent, bold, and attention-grabbing wherever it appears.",

    image: "/Images/Services/Webp/Creative-Design.webp",
    alt: "Creative Design",
  },
  {
    title: "Holding Paint",
    description:
      "Achieve nationwide brand visibility with PAN India Hoardings. We identify and book high-impact locations across cities, highways, and marketplaces to place large-format billboards that grab attention, reinforce brand messaging, and ensure wider exposure to reach a mass audience.",

    image: "/Images/Services/Webp/Holding-Paint.webp",
    alt: "Holding Paint",
  },
  {
    title: "Wall Wrap",
    description:
      "Turn ordinary walls into bold branding opportunities with Wall Wraps. Place your large vinyl graphics on public walls, markets, or society entrances, creating eye-catching, high-impact outdoor advertising spaces that effectively capture public attention.",

    image: "/Images/Services/Webp/Wall-Wrap.webp",
    alt: "Wall Wrap",
  },
  {
    title: "Flex Banners",
    description:
      "Flex and Banners are quick, affordable, and impactful tools for event promotions, outdoor advertising, or retail visibility. We create durable, high-quality visuals tailored to your brand’s messaging needs, placed at strategic locations for maximum footfall and attention.",

    image: "/Images/Services/Webp/Flex-Banners.webp",
    alt: "Flex Banners",
  },
  {
    title: "Mug T-shirt Printing",
    description:
      "Strengthen brand recall through customized merchandise like mugs and T-shirts. Ideal for giveaways, promotions, or employee engagement, these high-quality, personalized items turn your brand into a part of people’s daily lives while adding a thoughtful personal touch.",

    image: "/Images/Services/Webp/Mug-Tshirt.webp",
    alt: "Mug T-shirt Printing",
  },
  {
    title: "Leaflets and Look-Walkers",
    description:
      "Distribute your brand message directly into people’s hands with Leaflets and Look Walkers. Perfect for markets, malls, residential areas, and events, these marketing tools combine creative designs and clear messaging to drive awareness and spark interest in your products or services.",

    image: "/Images/Services/Webp/Leaflets-Lookwalkers.webp",
    alt: "Leaflets and Look-Walkers",
  },
  {
    title: "RWA Activation",
    description:
      "Connect with residential communities through RWA Activations. We design engaging activities, workshops, games, and contests inside apartment complexes and housing societies, offering brands a unique, interactive platform to engage families in a friendly, community-driven environment.",

    image: "/Images/Services/Webp/Rwa-Activation.webp",
    alt: "RWA Activation",
  },
  {
    title: "Mall Activation",
    description:
      "Capture the attention of shoppers in high-footfall malls with Mall Activations. These experiential brand setups include product demos, games, live performances, and contests, creating a lively, engaging space where shoppers can interact directly with your brand in a relaxed setting.",
    image: "/Images/Services/Webp/Mall-Activation.webp",
    alt: "Mall Activation",
  },
];

const Campaigncards = () => {
  return (
    <section className="bg-[#f4f4f4] py-10 md:py-[78px]">
      <div className=" container max-w-[1440px] mx-auto px-4">
        <div className=" text-center items-center flex flex-col justify-center">
          <h1 className="font-roboto font-bold text-4xl lg:text-[77px] leading-tight text-black">
            Our Services
          </h1>
          <p className="font-roboto font-normal text-base lg:text-2xl xl:text-[26px] leading-[121%] text-black mt-4 lg:mt-0 max-w-[626px]">
            Discover the range of services designed to help your brand leave a
            lasting impression.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-0">
          {campaigns.map(({ title, description, image, alt }, index) => (
            <article
              key={index}
              className="w-full md:w-1/2 flex justify-center mt-5 xl:mt-[52px]"
            >
              <div className="w-full max-w-[310px] md:max-w-[355px] lg:max-w-[470px] xl:max-w-[660px] min-h-[330px] lg:min-h-[540px] xl:min-h-[623px] bg-white rounded-2xl shadow-md transition duration-700 hover:shadow-lg p-4 lg:p-6">
                <div className="relative w-full h-[175px] lg:h-[384px] rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index < 2} // prioritize first two images
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2 className="font-Poppins font-semibold text-lg lg:text-[30px] xl:text-[32px] text-light_black leading-[1.21] mt-3 lg:mt-5 xl:mt-9 mb-0">
                  {title}
                </h2>
                <p className="font-Poppins font-normal text-base lg:text-lg leading-[1.5] text-light_black max-w-[548px] mt-2 lg:mt-3 xl:mt-5">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigncards;
