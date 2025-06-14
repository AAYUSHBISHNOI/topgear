import BlogLayout from "@/app/Components/BlogLayout";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";

async function importBlogComponent(slug) {
  try {
    const module = await import(`../../../../src/content/blog/${slug}.jsx`);
    return module.default;
  } catch (err) {
    return null;
  }
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir);
  return files.map((file) => ({
    slug: file.replace(/\.jsx$/, ""),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const BlogComponent = await importBlogComponent(slug);

  if (!BlogComponent) {
    return <div className="p-8 text-center text-red-600">Post not found.</div>;
  }

  return (
    <BlogLayout>
      <BlogComponent />
    </BlogLayout>
  );
}
