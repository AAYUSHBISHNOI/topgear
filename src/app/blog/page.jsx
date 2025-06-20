export const dynamic = "force-static";

export const metadata = {
  title: "Featured Blog Posts | Cynor Media",
  description:
    "Read our expert blogs on branding, BTL strategies, and marketing trends to elevate your campaigns.",
  keywords: [
    "BTL marketing blogs",
    "digital marketing blog",
    "float van campaign",
    "event marketing insights",
    "Cynor Media blog",
    "branding tips",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Featured Blog Posts | Cynor Media",
    description:
      "Read our expert blogs on branding, BTL strategies, and marketing trends to elevate your campaigns.",
    url: "https://www.cynormedia.com/blog",
    images: [
      {
        url: "https://thumbs2.imgbox.com/c8/4b/HwWpv78w_t.png",
        width: 1200,
        height: 630,
        alt: "Cynor Media Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Blog Posts | Cynor Media",
    description:
      "Explore insights on marketing strategies from Cynor Media’s blog.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/c8/4b/HwWpv78w_t.png",
        alt: "Cynor Media Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/blog",
  },
};

import Link from "next/link";
import Image from "next/image";

const blogList = [
  {
    slug: "what-is-btl-marketing",
    title: "What is BTL Marketing?",
    description:
      "Explore Below The Line (BTL) marketing strategies that create personal engagement and measurable impact.",
    image: "/Images/Blog/Webp/Define-img.png",
    author: "Aayush Bishnoi",
    published: "June 11, 2025",
    excerpt:
      "Dive into how BTL marketing strategies like float vans, activations, and direct engagement can amplify your brand’s impact.",
  },
  {
    slug: "digital-marketing-strategies",
    title: "Digital Marketing Strategies",
    description:
      "Discover essential digital tactics like SEO, email, content, and social media to grow your brand online.",
    image: "/Images/Blog/Webp/Man-with-laptop.webp",
    author: "Aman",
    published: "June 8, 2025",
  },
  {
    slug: "float-van-campaign",
    title: "Float Van Campaign",
    description:
      "See how mobile float vans can bring your brand directly to your audience with high visibility and interaction.",
    image: "/Images/Blog/Webp/Suzuki-img.webp",
    author: "Bharat ",
    published: "June 6, 2025",
  },
];

export default function BlogList() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 font-Poppins">
          Featured Blog Posts
        </h1>

        {/* Featured Card */}
        {blogList.length > 0 && (
          <div className="mb-16 bg-white text-black font-Poppins rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={blogList[0].image}
                  alt={blogList[0].title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:w-1/2 flex flex-col justify-between mt-10">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {blogList[0].title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-4 flex flex-col">
                    <span>{blogList[0].author} </span>
                    <span>{blogList[0].published}</span>
                  </div>
                  <p className="mb-4 text-gray-700 text-lg">
                    {blogList[0].description}
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    {blogList[0].excerpt ||
                      "Explore how float vans, product launches, and BTL strategies help elevate your brand presence across India."}
                  </p>
                </div>

                <Link
                  href={`/blog/${blogList[0].slug}`}
                  className="bg-[#64CCC5] text-white font-semibold px-4 py-3 rounded-xl hover:bg-opacity-80 transition w-fit"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Remaining Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogList
            .slice(1)
            .map(({ slug, title, description, image, author, published }) => (
              <div
                key={slug}
                className="bg-white text-black font-Poppins rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300"
              >
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={300}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#0f172a]">
                    {title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>{author || "Cynor Media"} • </span>
                    <span>{published || "June 2025"}</span>
                  </div>
                  <p className="mb-4 text-gray-700">{description}</p>
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-block bg-[#64CCC5] text-white font-medium px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
