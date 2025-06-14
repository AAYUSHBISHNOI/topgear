import BlogLayout from "../../Components/BlogLayout";

import FloatVanCampaign from "@/content/blog/float-van-campaign.jsx";
import WhatIsBTLMarketing from "@/content/blog/what-is-btl-marketing.jsx";
import DigitalMarketingStrategies from "@/content/blog/digital-marketing-strategies";

const blogMap = {
  "digital-marketing-strategies": DigitalMarketingStrategies,
  "float-van-campaign": FloatVanCampaign,
  "what-is-btl-marketing": WhatIsBTLMarketing,
};

export async function generateStaticParams() {
  return Object.keys(blogMap).map((slug) => ({ slug }));
}

export default function BlogPost({ params: { slug } }) {
  const BlogComponent = blogMap[slug];

  if (!BlogComponent) {
    return <div className="p-8 text-center text-red-600">Post not found.</div>;
  }

  return (
    <BlogLayout>
      <BlogComponent />
    </BlogLayout>
  );
}
