import Link from "next/link";
import Image from "next/image";

const blogList = [
  {
    slug: "what-is-btl-marketing",
    title: "What is BTL Marketing?",
    description:
      "Explore Below The Line (BTL) marketing strategies that create personal engagement and measurable impact.",
    image: "/images/Webp/Untitled-2.png",
  },
  {
    slug: "digital-marketing-strategies",
    title: "Digital Marketing Strategies",
    description:
      "Discover essential digital tactics like SEO, email, content, and social media to grow your brand online.",
    image: "/images/Webp/Untitled-2.png",
  },
  {
    slug: "float-van-campaign",
    title: "Float Van Campaign",
    description:
      "See how mobile float vans can bring your brand directly to your audience with high visibility and interaction.",
    image: "/images/Webp/Untitled-2.png",
  },
];

export default function BlogList() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Featured Blog Posts
        </h1>

        {/* Featured Card */}
        {blogList.length > 0 && (
          <div className="mb-16 bg-white text-black rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
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
              <div className="p-8 md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{blogList[0].title}</h2>
                <p className="mb-6 text-gray-700 text-lg">
                  {blogList[0].description}
                </p>
                <Link
                  href={`/blog/${blogList[0].slug}`}
                  className="inline-block bg-[#64CCC5] text-black font-semibold px-6 py-3 rounded-xl hover:bg-opacity-80 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Remaining Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogList.slice(1).map(({ slug, title, description, image }) => (
            <div
              key={slug}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300"
            >
              <Image
                src={image}
                alt={title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#0f172a]">
                  {title}
                </h3>
                <p className="mb-4 text-gray-700">{description}</p>
                <Link
                  href={`/blog/${slug}`}
                  className="inline-block bg-[#64CCC5] text-black font-medium px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
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
