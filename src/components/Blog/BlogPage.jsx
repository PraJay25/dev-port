import React from "react";

const BlogPage = () => {
  return (
    <section>
      {/* Blog Header */}
      <div className="bg-white py-4">
        <h1 className="text-center text-gray-700 text-3xl font-bold">Blog</h1>
      </div>

      {/* Blog Posts Section */}
      <div className="bg-[#f9f9f9] py-10 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Blog Post */}
          <article className="space-y-4">
            <div>
              <img
                src="/images/Blog1.jpg" // Replace with your image path
                alt="Blog Post 1"
                className="w-full rounded-md shadow-md"
              />
            </div>
            <h2 className="text-black text-xl font-bold">
              Testing the Elements
            </h2>
            <p className="text-gray-600 text-sm">
              Written by Pavel Ciorici on July 29, 2014. 4 comments.
            </p>
            <p className="text-gray-700 text-sm">
              This is some dummy copy. You’re not really supposed to read this
              dummy copy; it is just a placeholder for people who need text to
              visualize what the actual content might look like if it were real.
              If you want a good read, I might suggest a good book or article.
            </p>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-100 text-sm font-medium">
              Read More
            </button>
          </article>

          {/* Blog Post 2 (Repeat Layout) */}
          <article className="space-y-4">
            <div>
              <img
                src="/images/Blog2.jpg" // Replace with your image path
                alt="Blog Post 2"
                className="w-full rounded-md shadow-md"
              />
            </div>
            <h2 className="text-black text-xl font-bold">
              Testing the Elements
            </h2>
            <p className="text-gray-600 text-sm">
              Written by Pavel Ciorici on July 29, 2014. 4 comments.
            </p>
            <p className="text-gray-700 text-sm">
              This is some dummy copy. You’re not really supposed to read this
              dummy copy; it is just a placeholder for people who need text to
              visualize what the actual content might look like if it were real.
              If you want a good read, I might suggest a good book or article.
            </p>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-100 text-sm font-medium">
              Read More
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
