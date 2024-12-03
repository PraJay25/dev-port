// components/Blog.js
const blogs = [
  {
    title: "Getting Started with React",
    description:
      "A comprehensive guide for beginners to understand the basics of React.js and build their first application.",
    link: "#",
  },
  {
    title: "Mastering Redux",
    description:
      "Learn how to efficiently manage state in your React applications using Redux.",
    link: "#",
  },
  {
    title: "TypeScript for JavaScript Developers",
    description:
      "An introduction to TypeScript for developers looking to enhance their JavaScript skills.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500">Blog</h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="mt-4 text-gray-600">{blog.description}</p>
              <a
                href={blog.link}
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
