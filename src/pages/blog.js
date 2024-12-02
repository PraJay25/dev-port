// pages/blog.js
import Navbar from "../components/Navbar";

const blogs = [
  {
    title: "Transitioning from QA to Software Development",
    description:
      "Learn about my journey from a QA engineer to a software developer and the skills I gained along the way.",
    link: "#",
  },
  {
    title: "Using TypeScript with React",
    description:
      "A guide to integrating TypeScript with React for a more robust and scalable front-end development.",
    link: "#",
  },
  {
    title: "Material UI vs. Tailwind CSS",
    description:
      "A comparison of Material UI and Tailwind CSS for building responsive user interfaces.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">My Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-blue-500 hover:underline hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
