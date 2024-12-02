// pages/about.js
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed">
            Dynamic and versatile Software Development Engineer with a robust
            background in both quality assurance and web development. Initially
            honed skills as a QA engineer, ensuring high standards of software
            quality before transitioning into development. Proficient in C# and
            ASP.NET, with a strong foundation in backend development. Over the
            past two years, specialized in front-end development using React,
            TypeScript, and Material UI, creating responsive and user-friendly
            web applications.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium">Programming Languages</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>C#</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Front-End Development</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Back-End Development</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Node.js</li>
                <li>ASP.Net</li>
                <li>SQL Server</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Other Skills</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Git</li>
                <li>AWS</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Certifications</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Microsoft Azure Fundamentals</li>
            <li>React Developer Certification by Coursera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
