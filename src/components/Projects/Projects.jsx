// components/Projects.js
const projects = [
  {
    name: "Hapchi",
    description:
      "An innovative platform designed to create a safe and supportive space for students, parents, and schools, fostering child safety and empowerment.",
    responsibilities: [
      "Designed and implemented the project architecture.",
      "Introduced Redux for state management.",
      "Collaborated with cross-functional teams to address safety issues.",
    ],
    technologies: ["React", "Redux", "RESTful APIs", "Material UI"],
  },
  {
    name: "Driver Onboarding System",
    description:
      "A comprehensive digital platform to streamline driver registration, verification, and approval processes.",
    responsibilities: [
      "Spearheaded the development of the system.",
      "Implemented responsive and user-friendly interfaces.",
      "Collaborated with cross-functional teams to meet business objectives.",
    ],
    technologies: ["React.js", "Node.js", "RESTful APIs"],
  },
  {
    name: "Data Mover Pro",
    description:
      "A solution designed for seamless data migration and management across various platforms, focusing on data integrity and security.",
    responsibilities: [
      "Developed test plans and cases for data migration functionalities.",
      "Collaborated with developers to resolve defects.",
      "Provided feedback to improve usability and security enhancements.",
    ],
    technologies: ["JavaScript", "Responsive Design", "SQL Server"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500">
          Projects
        </h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="mt-4 text-gray-600">{project.description}</p>

              <h4 className="mt-6 font-semibold text-gray-700">
                Responsibilities:
              </h4>
              <ul className="mt-2 list-disc pl-6 text-gray-600">
                {project.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>

              <h4 className="mt-6 font-semibold text-gray-700">
                Technologies:
              </h4>
              <p className="mt-2 text-gray-600">
                {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
