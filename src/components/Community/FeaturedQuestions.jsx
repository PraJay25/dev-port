import React, { useState } from "react";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  RssIcon,
  EyeIcon,
  FireIcon,
  PencilSquareIcon,
  UserMinusIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const FeaturedQuestions = ({ questions }) => {
  const [voteCounts, setVoteCounts] = useState(
    questions.map((question) => ({
      upvotes: question.upvotes || 0,
      downvotes: question.downvotes || 0,
      hasUpvoted: false,
      comments: question.comments || 0,
      isFollowing: false,
    }))
  );

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [answerPopupVisible, setAnswerPopupVisible] = useState(null);
  const [commentPopupVisible, setCommentPopupVisible] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const WORD_LIMIT = 3000;

  const toggleExpand = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const handleUpvote = (index) => {
    setVoteCounts((prevCounts) =>
      prevCounts.map((item, i) => {
        if (i === index) {
          const newUpvotes = item.hasUpvoted
            ? item.upvotes - 1
            : item.upvotes + 1;
          return { ...item, upvotes: newUpvotes, hasUpvoted: !item.hasUpvoted };
        }
        return item;
      })
    );
  };

  const handleFollow = (index) => {
    setVoteCounts((prevCounts) =>
      prevCounts.map((item, i) => {
        if (i === index) {
          return { ...item, isFollowing: !item.isFollowing };
        }
        return item;
      })
    );
  };

  const handleOpenAnswerPopup = (index) => {
    setAnswerPopupVisible(index);
  };

  const handleCloseAnswerPopup = () => {
    setAnswerPopupVisible(null);
    setCurrentAnswer("");
  };

  const handleSubmitAnswer = (index) => {
    console.log(`Answer submitted for question #${index}:`, currentAnswer);
    handleCloseAnswerPopup();
  };

  const handleOpenCommentPopup = (index) => {
    setCommentPopupVisible(index);
  };

  const handleCloseCommentPopup = () => {
    setCommentPopupVisible(null);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-start mb-6">
        <div className="bg-red-500 rounded-lg p-2">
          <FireIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-lg font-bold text-orange-500">
          Community Featured Questions
        </h2>
      </div>

      {/* Question Cards */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 relative"
          >
            {/* Follow Button */}
            <button
              className="absolute top-4 right-4 flex items-center gap-1 text-xs text-gray-600 hover:text-blue-500"
              onClick={() => handleFollow(index)}
            >
              <RssIcon className="w-4 h-4" />
              <span>
                {voteCounts[index].isFollowing ? "Following" : "Follow"}
              </span>
            </button>

            {/* Question and Answer */}
            <div>
              <p className="text-sm font-semibold text-blue-950 cursor-pointer hover:underline">
                {question.question}
              </p>

              <p
                className="text-xs text-gray-700 mt-2"
                dangerouslySetInnerHTML={{
                  __html:
                    expandedQuestion === index
                      ? question.topAnswer
                      : `${question.topAnswer.slice(0, 200)}...`,
                }}
              />
              {question.topAnswer.length > 200 && (
                <button
                  className="text-orange-500 text-xs font-medium hover:underline ml-2"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedQuestion === index ? "Show Less" : "Show More"}
                </button>
              )}

              {/* User Info */}
              <div className="flex items-center space-x-3 text-xs text-gray-400 mt-2">
                {question.askedByUser === "Anonymous" ? (
                  <>
                    <UserMinusIcon className="w-8 h-8 text-gray-400" />
                    <p className="text-gray-600 font-semibold">
                      Anonymous User
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      src={question.userImage}
                      alt={`${question.askedByUser}'s profile`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-600 font-semibold">
                        {question.askedByUser}
                      </p>
                      <p className="flex items-center space-x-2">
                        <AdjustmentsVerticalIcon className="h-4 w-4 text-gray-500" />
                        Level {question.userLevel} |{" "}
                        {question.userPoints.toLocaleString()} points
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-xs">
              <div className="flex items-center gap-1">
                <button onClick={() => handleUpvote(index)}>
                  <ChevronDoubleUpIcon
                    className={`w-4 h-4 ${
                      voteCounts[index].hasUpvoted
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                </button>
                <span>Upvote: {voteCounts[index].upvotes}</span>
              </div>

              <button
                className="flex items-center gap-1"
                onClick={() => handleOpenCommentPopup(index)}
              >
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                <span>{voteCounts[index].comments} Comments</span>
              </button>

              <button onClick={() => handleOpenAnswerPopup(index)}>
                <PencilSquareIcon className="w-4 h-4" />
                <span>Answer</span>
              </button>

              <Link href="/responses">
                <div className="flex items-center gap-1 cursor-pointer">
                  <ClipboardDocumentCheckIcon className="w-4 h-4" />
                  <span>Responses</span>
                </div>
              </Link>

              <div className="flex items-center gap-1">
                <EyeIcon className="w-4 h-4" />
                <span>{question.views} Views</span>
              </div>
            </div>

            {/* Comment Popup */}
            {commentPopupVisible === index && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white shadow-lg rounded-md p-4 mt-2 z-50 w-80"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <textarea
                  className="w-full h-20 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your comment..."
                ></textarea>
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-400"
                    onClick={handleCloseCommentPopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                    onClick={handleCloseCommentPopup}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            {/* Answer Popup */}
            {answerPopupVisible === index && (
              <div
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                onClick={handleCloseAnswerPopup}
              >
                <div
                  className="bg-white p-6 rounded-md w-1/3 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-bold text-gray-700">
                    Answer the Question
                  </h3>
                  <textarea
                    className="w-full mt-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write your answer (Max 3000 words)..."
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    maxLength={WORD_LIMIT}
                  ></textarea>
                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-400"
                      onClick={handleCloseAnswerPopup}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                      onClick={() => handleSubmitAnswer(index)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedQuestions;
