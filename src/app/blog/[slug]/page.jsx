import { notFound } from "next/navigation"
import BlogLayout from "../../Components/BlogLayout"

// Safer imports with error handling
let WhatIsBTLMarketing, FloatVanCampaign, DigitalMarketingStrategies

try {
  WhatIsBTLMarketing = require("../../../content/blog/what-is-btl-marketing.js").default
} catch (error) {
  console.error("Error loading what-is-btl-marketing.js:", error)
  WhatIsBTLMarketing = null
}

try {
  FloatVanCampaign = require("../../../content/blog/float-van-campaign.js").default
} catch (error) {
  console.error("Error loading float-van-campaign.js:", error)
  FloatVanCampaign = null
}

try {
  DigitalMarketingStrategies = require("../../../content/blog/digital-marketing-strategies.js").default
} catch (error) {
  console.error("Error loading digital-marketing-strategies.js:", error)
  DigitalMarketingStrategies = null
}

const blogMap = {
  "what-is-btl-marketing": WhatIsBTLMarketing,
  "float-van-campaign": FloatVanCampaign,
  "digital-marketing-strategies": DigitalMarketingStrategies,
}

export async function generateStaticParams() {
  // Only include blogs that loaded successfully
  return Object.keys(blogMap)
    .filter((slug) => blogMap[slug] !== null)
    .map((slug) => ({ slug }))
}

export default function BlogPost({ params }) {
  const { slug } = params
  const BlogComponent = blogMap[slug]

  if (!BlogComponent) {
    notFound()
  }

  return (
    <BlogLayout>
      <BlogComponent />
    </BlogLayout>
  )
}
