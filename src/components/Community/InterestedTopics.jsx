import React from "react";
import topics from "@/data/topics";

const InterestedTopics = ({ topics }) => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Interested Topics
      </h2>
      <div className="flex flex-wrap gap-4 justify-start">
        {topics.map((topic) => (
          <div
            key={topic.topicID}
            className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 cursor-pointer"
          >
            {topic.topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedTopics;
