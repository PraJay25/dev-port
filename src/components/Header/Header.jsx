import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
          Angel
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <button className="hover:underline ">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="hover:underline">About</button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="hover:underline">Contact</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
