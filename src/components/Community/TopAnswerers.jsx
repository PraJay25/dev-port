import React from "react";
import myAnswerers from "@/data/answers";

const TopAnswerers = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Answerers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {myAnswerers.map((answerer) => (
          <div
            key={answerer.id}
            className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile Image */}
            <img
              src={answerer.userImage}
              alt={`${answerer.name}'s avatar`}
              className="w-8 h-8 rounded-full object-cover mr-4"
            />
            {/* Name */}
            <span className="text-sm font-semibold text-blue-500">
              {answerer.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnswerers;
