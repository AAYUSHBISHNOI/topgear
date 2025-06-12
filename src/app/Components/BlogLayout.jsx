"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogLayout({ children }) {
  const contentRef = useRef(null);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!contentRef.current) return;

    // Select both h2 and h3 elements with IDs
    const allHeadings = contentRef.current.querySelectorAll("h2[id], h3[id]");

    const tocItems = Array.from(allHeadings).map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(tocItems);
  }, []);

  return (
    <div className="scroll-smooth flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
      {/* Sidebar TOC */}
      <aside className="hidden lg:block w-1/4 sticky top-20 h-max">
        <nav className="space-y-3 font-sans text-gray-800">
          <p className="text-lg font-bold text-black mb-3">On this page</p>
          <ul className="space-y-2">
            {headings.map((item) => (
              <li key={item.id} className={item.level === 3 ? "ml-0" : ""}>
                <a
                  href={`#${item.id}`}
                  className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Blog Content */}
      <main ref={contentRef} className="w-full lg:w-3/4">
        {children}
      </main>
    </div>
  );
}
