import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Correct weights
});

const About = () => {
  return (
    <section
      id="about"
      className={`${poppins.className} relative py-16 text-white bg-cover bg-center bg-[url('https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg')]`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-80"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white underline decoration-wavy decoration-yellow-400">
          About Me
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <div
            className="p-6 bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            style={{
              backgroundImage: "url('')",
            }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 border-b-2 border-yellow-400 pb-2">
              Professional Summary
            </h3>
            <p className="mt-4 text-lg text-gray-200">
              I am a dynamic and versatile Software Development Engineer with a
              robust background in both quality assurance and web development.
              Initially honed skills as a QA engineer, ensuring high standards
              of software quality before transitioning into development. Over
              the past two years, I’ve specialized in front-end development
              using React, TypeScript, and Material UI, creating responsive and
              user-friendly web applications.
            </p>
          </div>

          {/* Skills */}
          <div
            className="p-6 bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            style={{
              backgroundImage:
                "url('https://www.pexels.com/photo/scenic-mountain-view-over-quaint-city-rooftops-29170011/)",
            }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 border-b-2 border-yellow-400 pb-2">
              Skills
            </h3>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-200">
              <li className="flex items-center gap-2">
                <span>✅</span> C#
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> JavaScript (React.js, TypeScript)
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Material UI, Tailwind CSS, Bootstrap
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Node.js, ASP.NET
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> RESTful APIs
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> Git, AWS, Azure
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div
            className="p-6 bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            style={{
              backgroundImage: "url('')",
            }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 border-b-2 border-yellow-400 pb-2">
              Certifications
            </h3>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-200">
              <li className="flex items-center gap-2">
                <span>🏅</span> Microsoft Azure Fundamentals
              </li>
              <li className="flex items-center gap-2">
                <span>🏅</span> Microsoft Azure Developer Associate
              </li>
              <li className="flex items-center gap-2">
                <span>🏅</span> React Developer Certification (Coursera)
              </li>
            </ul>
          </div>

          {/* Awards */}
          <div
            className="p-6 bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            style={{
              backgroundImage: "url('')",
            }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 border-b-2 border-yellow-400 pb-2">
              Awards
            </h3>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-200">
              <li className="flex items-center gap-2">
                <span>🏆</span> Spot Award - Actual Pixel (June 2024)
              </li>
              <li className="flex items-center gap-2">
                <span>🏆</span> Applause Award - Actual Pixel (October 2023)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
