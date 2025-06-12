import BlogLayout from "@/app/Components/BlogLayout";
import dynamic from "next/dynamic";

async function importBlogComponent(slug) {
  try {
    const module = await import(`../../../../src/content/blog/${slug}.jsx`);
    return module.default;
  } catch (err) {
    return null;
  }
}
export async function generateStaticParams() {
  return []; // your dynamic slug paths
}

export default async function BlogPost({ params: { slug } }) {
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
