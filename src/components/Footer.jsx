// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-semibold">Shiv Prakash</h1>
        <p className="text-gray-400 text-sm my-2">
          © {new Date().getFullYear()} Shiv Prakash. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://www.linkedin.com/in/shiv-prakash-b7b6b024b">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              LinkedIn
            </a>
          </Link>
          <Link href="https://github.com/zoroshiv">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
