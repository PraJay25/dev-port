import React from "react";
import Link from "next/link";

const HomeLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to the Home Page</h1>
          <p className="mt-4 text-lg">This is the home landing content.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature One</h3>
            <p className="text-gray-700">Description of feature one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature Two</h3>
            <p className="text-gray-700">Description of feature two.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature Three</h3>
            <p className="text-gray-700">Description of feature three.</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeLanding;
