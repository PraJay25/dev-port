// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Project One",
      label: "Web Design",
      image: "/images/project1.jpg",
    },
    {
      title: "Project Two",
      label: "Branding",
      image: "/images/project2.jpg",
    },
    {
      title: "Project Three",
      label: "Photography",
      image: "/images/project3.jpg",
    },
    {
      title: "Project Four",
      label: "Development",
      image: "/images/project4.jpg",
    },
    {
      title: "Project Five",
      label: "Marketing",
      image: "/images/project5.jpg",
    },
    {
      title: "Project Six",
      label: "Consulting",
      image: "/images/project6.jpg",
    },
  ];

  return (
    <div className="bg-milkWhite text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative group transform transition duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Hover Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-300">
                  <button className="px-4 py-2 bg-white text-black font-semibold hover:bg-black hover:text-white rounded">
                    View Project
                  </button>
                </div>
              </div>
              {/* Text Section Below the Image */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
