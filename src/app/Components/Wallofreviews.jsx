"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const reviews = [
  {
    name: "Krishna K",
    image: "/Images/OurClients/Webp/Karmdeen.webp",
    feedback:
      "Had a great experience working with Cynor Media. They truly are the best BTL marketing agency around. Their team is very professional and knows exactly how to execute brand activations, mall events, and roadshows in a smooth and effective way..",
  },
  {
    name: "Manish Kumar",
    image: "/Images/OurClients/Webp/Manish.webp",
    feedback:
      "The company is very good, I enjoyed working in it. I am currently working in Hero for advertising work and I am working in Ghaziabad during the Diwali week. I would like to thank the owner of this company very much.",
  },
  {
    name: "Hemant Bajaj",
    image: "/Images/OurClients/Webp/Hemant.webp",
    feedback:
      "Very meticulous. Arranged 2 grand functions and many souvenirs from them. Truly impressive. Rates are very competitive and service extra ordinary. Had 4 vendors earlier, now working only with one as no one else could match Cynor's timelines and professionalism.",
  },
  {
    name: "Sandy Bishnoi",
    image: "/Images/OurClients/Webp/Sandy-Bishnoi.webp",
    feedback:
      '“Big Ideas that will Change your Business" Our experience over the past few years has been very enjoyable. It has been such a pleasure to work with Cynor Media on multiple projects. The team is rich with talent and creativity!!',
  },
  {
    name: "Shray Gupta",
    image: "/Images/OurClients/Webp/Sharygupta.webp",
    feedback:
      "The most amazing team for any marketing related activities... Be it ATLs or BTLs they pull it off with flare... I highly recommend them for their conceptualization and more than that their execution of any marketing activity or event... Keep up the good work team Cynor !",
  },
  {
    name: "Viki Bishnoi",
    image: "/Images/OurClients/Webp/Vikki.webp",
    feedback:
      "Owesome experience, nice teaching staff, nice crowd to study with, Neelam maam give so much personal attention. I did not have good Pernunciation, now have gained lot of confidence in spoken also. Thanks a lot maam. You are savior to me. Thanks Bajinder sir for referring.",
  },
  {
    name: "Rocky",
    image: "/Images/OurClients/Webp/Rocky.webp",
    feedback:
      "Cynor Media is a very good event company whose effect is always good for everyone. Regards :- Anchor Rocky 🎤",
  },
  {
    name: "Akash Tiwari",
    image: "/Images/OurClients/Webp/Aakash.webp",
    feedback:
      "Very nice event management company, provided to all types of events service with punctuality & perfection. Thanks",
  },
  {
    name: "Er Vipin Dev",
    image: "/Images/OurClients/Webp/Vipin.webp",
    feedback:
      "This company is very good and the staff here is very nice. I love this company.",
  },

  {
    name: "Rahul Sharma",
    image: "/Images/OurClients/Webp/Rahul.webp",
    feedback:
      "Great team work' timely execution, sincere and polite staff, kudos team Cynor, looking forward to work with you at more locations.",
  },

  {
    name: "Rahul Sah",
    image: "/Images/OurClients/Webp/Rahulsah.webp",
    feedback:
      "Hardworking team that will go the extra mile to ensure that you get the most bang for your buck.",
  },
  {
    name: "Karmdeen Khan",
    image: "/Images/OurClients/Webp/Karmdeen.webp",
    feedback:
      "Best Event Company in Tricity. Working with Cynor from last 3 years .",
  },
  {
    name: "Partik kumar",
    image: "/Images/OurClients/Webp/Partikkumar.webp",
    feedback:
      "A good service provider and rates are very competitive and providing services extra ordinary 👍",
  },
  {
    name: "Harish Bhardwaj",
    image: "/Images/OurClients/Webp/Harish.webp",
    feedback: "Good quality media work...great job flex designer",
  },
  {
    name: "Rohtash Kumar",
    image: "/Images/OurClients/Webp/Rohtashkumar.webp",
    feedback: "Fully satisfied and Happy with their service.. go ahead",
  },
  {
    name: "Yogesh Garg",
    image: "/Images/OurClients/Webp/Ypgeshgarg.webp",
    feedback: "Excellent service provider and customer friendly",
  },
  {
    name: "Ajay Arya",
    image: "/Images/OurClients/Webp/Ajayarya.webp",
    feedback: "Hardworking team and best service providers",
  },
  {
    name: "Rachit Sharma",
    image: "/Images/OurClients/Webp/Rachit.webp",
    feedback: "Very prompt and innovative services...",
  },
];

const Wallofreviews = () => {
  // Group reviews into pairs
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 3) {
    groupedReviews.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="max-w-[1440px] container mx-auto px-4 py-10 lg:py-20">
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="font-Poppins font-semibold text-2xl lg:text-4xl text-center text-light_black mb-2">
          Wall of reviews
        </h2>
        <p className="font-Poppins text-base lg:text-lg text-center text-dark mb-12 max-w-[1017px]">
          These heartfelt reviews reflect the honest feedback and appreciation
          from those who have worked closely with us. Their experiences
          highlight the dedication, creativity, and professionalism we bring to
          every project. Their words inspire us to keep delivering the best.
          Explore their stories and see why so many trust and value our work.
        </p>
      </div>

      <Splide
        options={{
          direction: "ttb",
          height: "300px",
          perPage: 1,
          gap: "900px",
          wheel: true,
          drag: true,
          arrows: false,
          pagination: false,
        }}
        className="vertical-slider px-4"
      >
        {groupedReviews.map((group, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-wrap gap-10">
              {group.map(({ name, image, feedback }, i) => (
                <div
                  key={i}
                  className="shadow-lg bg-[#fafafa] px-3 lg:px-6 py-6 rounded-2xl hover:shadow-xl
  w-full md:w-[calc(50%-20px)] lg:w-[calc((100%/3)-26.66px)] min-h-[250px]"
                >
                  <div className="flex items-center gap-2 lg:gap-5">
                    <Image
                      src={image}
                      alt={`Photo of ${name}`}
                      className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full object-cover"
                      width={80}
                      height={80}
                    />
                    <div className="flex flex-col flex-1">
                      <p className="font-Poppins font-bold text-base lg:text-lg text-dark mb-1">
                        {name}
                      </p>
                      <Image
                        src="/Images/OurClients/Svg/Star.svg"
                        alt="Star rating"
                        width={80}
                        height={16}
                        className="w-[80px]"
                      />
                    </div>
                  </div>
                  <p className="font-Poppins text-base lg:text-[15px] text-[#0c0c0c] mt-4">
                    {feedback}
                  </p>
                </div>
              ))}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Wallofreviews;
