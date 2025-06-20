export const dynamic = "force-static";

import BlogLayout from "../../Components/BlogLayout";

import WhatIsBTLMarketing from "../../../content/blog/what-is-btl-marketing.js";
import FloatVanCampaign from "../../../content/blog/float-van-campaign.js";
import DigitalMarketingStrategies from "../../../content/blog/digital-marketing-strategies.js";

const blogMap = {
  "what-is-btl-marketing": WhatIsBTLMarketing,
  "float-van-campaign": FloatVanCampaign,
  "digital-marketing-strategies": DigitalMarketingStrategies,
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
