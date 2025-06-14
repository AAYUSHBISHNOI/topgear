import Image from "next/image";

export default function FloatVanCampaign() {
  return (
    <>
      <title>Cynor Media - Float Van Campaign</title>
      <div className="max-w-3xl mx-auto px-4 py-8 prose prose-indigo scroll-smooth">
        <h1 className="text-4xl font-bold text-shadow text-[#64ccc5] pb-1">
          Float Van Campaign
        </h1>
        <p className="text-sm text-gray-500 mb-6">2025-06-10</p>

        <section>
          <h3
            id="introduction"
            className="font-bold text-xl pb-1 text-[#64ccc5]"
          >
            Introduction
          </h3>
          <p>
            A Float Van Campaign describes an occasion when a vehicle is turned
            into a moving advertisement medium: the float van is usually a
            medium-sized van or truck, which is brightly decorated with visuals
            and messages to promote a brand, product, or service while cruising
            around high-traffic areas or parked at strategic locations.
          </p>
        </section>

        <section className="pt-4">
          <Image
            src="/Images/Blog/Webp/Suzuki-img.webp"
            alt={""}
            width={600}
            height={350}
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        <hr className="my-8" />

        <section>
          <h3
            id="why-use-float-vans"
            className="font-bold text-xl pb-1 text-[#64ccc5]"
          >
            Why Float Vans?
          </h3>
          <ul>
            <li>
              <span className="font-semibold">High Visibility:</span> Moving
              advertisements grab more attention than static ones.
            </li>
            <li>
              <span className="font-semibold">Targeted Selectivity:</span>{" "}
              Routes can be selected according to the geographical location of
              the target audience.
            </li>
            <li>
              <span className="font-semibold">Interactivity:</span> Vans can
              promote a product demo, or they can have the speakers, LED
              screens, or sampling zone.
            </li>
          </ul>
        </section>

        <hr className="my-8" />

        <section>
          <h3
            id="success-story"
            className="font-bold text-xl pb-1 text-[#64ccc5]"
          >
            Success Story
          </h3>
          <p>
            A beverage brand resorted to coating float vans to offer chilled
            samples during the hot summer months in different metro cities.
            Social media engagement jumped 45% and garnered more than 30,000
            interactions within two weeks .
          </p>
        </section>

        <hr className="my-8" />

        <section>
          <h3
            id="float-van-benefits"
            className="font-bold text-xl pb-1 text-[#64ccc5]"
          >
            Benefits of the Float Van Campaigns
          </h3>
          <ul>
            <li>
              <span className="font-semibold">Cost-Effective:</span> Cheaper
              than traditional billboards and mass media
            </li>
            <li>
              <span className="font-semibold">Highly Customizable:</span> Can be
              designed for any brand, festival, or event.
            </li>
            <li>
              <span className="font-semibold">Engagement Driven:</span>{" "}
              Encourages instantaneous interaction, feedback, and sampling
              opportunities.
            </li>
          </ul>
        </section>

        <hr className="my-8" />

        <section>
          <h3
            id="float-van-conclusion"
            className="font-bold text-xl pb-1 text-[#64ccc5]"
          >
            Conclusion
          </h3>
          <p>
            Float Van Campaigns are intuitive and inspired ideas for bringing
            your brand to all the streets in India for engaging people on the
            spot in real time.
          </p>
        </section>
      </div>
    </>
  );
}
