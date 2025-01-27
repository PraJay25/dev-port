import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [menuState, setMenuState] = useState({
    menuOpen: false,
    dropdownOpen: false,
  });
  const router = useRouter();

  const toggleMenu = () =>
    setMenuState((prev) => ({ ...prev, menuOpen: !prev.menuOpen }));
  const toggleDropdown = () =>
    setMenuState((prev) => ({ ...prev, dropdownOpen: !prev.dropdownOpen }));

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Post", href: "/post" },
    { name: "Community", href: "/community" },
    { name: "ProductList", href: "/ProductList" },
  ];

  const dropdownLinks = [
    { name: "Brand Identity", href: "/what-to-do/brand-identity" },
    { name: "Online Marketing", href: "/what-to-do/online-marketing" },
    { name: "Responsive Sites", href: "/what-to-do/responsive-sites" },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <header className="w-full bg-white text-gray-600 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-black">ANGEL</h1>
          <h5 className="text-sm">Portfolio WordPress Theme</h5>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive(link.href) ? "underline decoration-orange-500" : ""
              } hover:text-black`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1 ${
                router.pathname.startsWith("/what-to-do")
                  ? "underline decoration-orange-500"
                  : ""
              } hover:text-black`}
            >
              What To Do
              {/* Inline SVG for Dropdown Icon */}
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {menuState.dropdownOpen && (
              <ul className="absolute bg-white shadow-md border rounded mt-2 w-48">
                {dropdownLinks.map((item) => (
                  <li key={item.name} className="border-b last:border-none">
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-gray-100 hover:text-black ${
                        isActive(item.href)
                          ? "underline decoration-orange-500"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
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
              d={
                menuState.menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuState.menuOpen && (
        <div className="md:hidden bg-white text-gray-600 shadow-md">
          <ul className="space-y-4 py-4 px-4 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    isActive(link.href) ? "underline decoration-orange-500" : ""
                  } hover:text-black`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Mobile Dropdown */}
            <li>
              <button
                className="flex items-center gap-1 hover:text-black"
                onClick={toggleDropdown}
                aria-expanded={menuState.dropdownOpen}
              >
                What To Do
                {/* Inline SVG for Dropdown Icon */}
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {menuState.dropdownOpen && (
                <ul className="mt-2 space-y-2">
                  {dropdownLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-gray-100 hover:text-black ${
                          isActive(item.href)
                            ? "underline decoration-orange-500"
                            : ""
                        }`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
