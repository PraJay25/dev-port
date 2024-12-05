// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import About from "../About/About";

const Navbar = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="SP Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">Shiv Prakash</span>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" passHref>
                <span className="hover:text-purple-900 cursor-pointer transition-colors">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span className="hover:text-red-400 cursor-pointer transition-colors">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <span className="hover:text-green-400 cursor-pointer transition-colors">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <span className="hover:text-yellow-400 cursor-pointer transition-colors">
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className="hover:text-blue-400 cursor-pointer transition-colors">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
