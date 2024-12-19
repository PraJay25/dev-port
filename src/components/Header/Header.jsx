import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
  const router = useRouter(); // To get the current route

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white text-gray-600 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section - Slightly shifted to center */}
        <div className="flex-shrink-0 ml-8 md:ml-12">
          <h1 className="text-2xl font-bold text-black">ANGEL</h1>
          <h5 className="text-sm">Portfolio WordPress Theme</h5>
        </div>

        {/* Navigation Menu - Positioned towards the center */}
        <nav className="hidden md:flex space-x-6 items-center text-sm ml-16 md:ml-24">
          <Link
            href="/"
            className={`${
              router.pathname === "/" ? "underline decoration-orange-500" : ""
            } hover:text-black`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              router.pathname === "/about"
                ? "underline decoration-orange-500"
                : ""
            } hover:text-black`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact"
                ? "underline decoration-orange-500"
                : ""
            } hover:text-black`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${
              router.pathname === "/blog"
                ? "underline decoration-orange-500"
                : ""
            } hover:text-black`}
          >
            Blog
          </Link>
          {/* <Link
            href="/Post"
            className={`${
              router.pathname === "/Post"
                ? "underline decoration-orange-500"
                : ""
            } hover:text-black`}
          >
            Post
          </Link> */}
          {/* Dropdown for What to Do */}
          <div className="relative group">
            <button
              className={`${
                router.pathname.startsWith("/what-to-do")
                  ? "underline decoration-orange-500"
                  : ""
              } hover:text-black`}
            >
              What To Do
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-md border rounded mt-2 w-48">
              <li className="border-b">
                <Link
                  href="/what-to-do/brand-identity"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xs"
                >
                  Brand Identity
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/what-to-do/online-marketing"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                >
                  Online Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/what-to-do/responsive-sites"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                >
                  Responsive Sites
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-600 shadow-md">
          <ul className="space-y-4 py-4 px-4 text-sm">
            <li>
              <Link
                href="/"
                className={`${
                  router.pathname === "/"
                    ? "underline decoration-orange-500"
                    : ""
                } hover:text-black`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  router.pathname === "/about"
                    ? "underline decoration-orange-500"
                    : ""
                } hover:text-black`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  router.pathname === "/contact"
                    ? "underline decoration-orange-500"
                    : ""
                } hover:text-black`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  router.pathname === "/blog"
                    ? "underline decoration-orange-500"
                    : ""
                } hover:text-black`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className={`${
                  router.pathname === "/post"
                    ? "underline decoration-orange-500"
                    : ""
                } hover:text-black`}
              >
                Post
              </Link>
            </li>
            {/* Mobile Dropdown */}
            <li>
              <div>
                <button
                  className={`${
                    router.pathname.startsWith("/what-to-do")
                      ? "underline decoration-orange-500"
                      : ""
                  } hover:text-black`}
                >
                  What To Do
                </button>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/what-to-do/brand-identity"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                    >
                      Brand Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-to-do/online-marketing"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                    >
                      Online Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-to-do/responsive-sites"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                    >
                      Responsive Sites
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
