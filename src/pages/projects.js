// pages/projects.js
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Hapchi",
    description:
      "A platform fostering child safety and empowerment for students, parents, and schools.",
    technologies: ["React", "Redux", "Material UI"],
  },
  {
    title: "Driver Onboarding System",
    description:
      "Streamlined driver registration and verification platform for seamless onboarding.",
    technologies: ["React", "Node.js", "Material UI"],
  },
  {
    title: "Data Mover Pro",
    description:
      "A comprehensive solution for seamless data migration and management.",
    technologies: ["React", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="space-x-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
