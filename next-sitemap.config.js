/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.cynormedia.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin/*", "/private/*", "/_not-found", "/404", "/500"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,

  // Custom transform function
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.includes("/service")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/blog")) {
      priority = 0.7;
      changefreq = "weekly";
    } else if (path === "/about-us" || path === "/contact-us") {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths that might not be automatically discovered
  additionalPaths: async (config) => {
    const result = [];

    // Add any additional static paths
    const additionalStaticPaths = [
      "/service/btl-marketing",
      "/service/event-management",
      "/service/brand-activation",
      "/service/digital-marketing",
      "/portfolio",
      "/case-studies",
    ];

    for (const path of additionalStaticPaths) {
      result.push(await config.transform(config, path));
    }

    return result;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://www.cynormedia.com/sitemap.xml"],
  },
};
