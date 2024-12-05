// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shiv Prakash. All Rights Reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://www.linkedin.com/in/shiv-prakash-b7b6b024b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zoroshiv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
