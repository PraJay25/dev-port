import React from "react";
import questionsForYou from "@/data/questionsForYou";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  RssIcon,
  EyeIcon,
  AdjustmentsVerticalIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const QuestionsForYou = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-start mb-6">
        <div className="bg-yellow-500 rounded-lg p-2">
          <StarIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-lg font-bold text-yellow-600">Questions For You</h2>
      </div>

      {/* Question Cards */}
      <div className="space-y-6">
        {questionsForYou.map((question, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8"
          >
            {/* Question Text */}
            <div>
              <p className="text-sm font-semibold text-blue-950 cursor-pointer hover:underline">
                {question.text}
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3 text-xs text-gray-400 mt-2">
                <img
                  src={question.profileImage}
                  alt={`${question.askedByUser}'s profile`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="flex items-center space-x-2">
                    <span className="text-gray-600 font-semibold">
                      {question.askedByUser}
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <AdjustmentsVerticalIcon className="h-4 w-4 text-gray-500" />
                    Level {question.userLevel} | points
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Actions */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-xs">
              <div className="flex items-center gap-1">
                <ChevronDoubleUpIcon className="w-4 h-4 text-green-500" />{" "}
                <span className="text-gray-500">Upvote:</span>
                <span>{question.upvotes}</span>
                <ChevronDoubleDownIcon className="w-4 h-4 text-red-500" />{" "}
                <span>{question.downvotes}</span>
              </div>
              <div className="flex items-center gap-1">
                <PencilSquareIcon className="w-4 h-4" />{" "}
                <span>{question.answerCount} Answers</span>
              </div>
              <div className="flex items-center gap-1">
                <ClipboardDocumentCheckIcon className="w-4 h-4" />{" "}
                <span>{question.responses} Responses</span>
              </div>
              <div className="flex items-center gap-1">
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />{" "}
                <span>{question.comments} Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <RssIcon className="w-4 h-4" />{" "}
                <span>{question.followCount} Follow</span>
              </div>
              <div className="flex items-center gap-1">
                <EyeIcon className="w-4 h-4" />{" "}
                <span>{question.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsForYou;
