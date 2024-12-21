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
import { commentsData } from "@/data/commentsData";
import featuredQuestions from "@/data/featuredQuestions";
import { useQuestions } from "../Context/QuestionsContext";

const FeaturedQuestions = () => {
  const { questions, setQuestions } = useQuestions();

  const [voteCounts, setVoteCounts] = useState(
    questions.map((question) => ({
      upvotes: question.upvotes || 2000,
      downvotes: question.downvotes || 0,
      hasUpvoted: false,
    }))
  );
  const [userData, setUserData] = useState(featuredQuestions);

  const [expandedQuestion, setExpandedQuestion] = useState(null);

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

  const [answerPopupVisible, setAnswerPopupVisible] = useState(null);
  const [newAnswer, setNewAnswer] = useState("");

  const handleOpenAnswerPopup = (index) => {
    setAnswerPopupVisible(index);
  };

  const handleCloseAnswerPopup = () => {
    setAnswerPopupVisible(null);
  };

  const handleSubmitAnswer = (index) => {
    if (!newAnswer.trim()) return;

    // Update question data with new answer
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      topAnswer: newAnswer,
      askedByUser: "shiv", // Example new commenter (replace dynamically as needed)
      userImage: "https://picsum.photos/100/120/?random", // Example image
      userLevel: updatedQuestions[index].userLevel + 1, // Increment level for demonstration
    };
    setQuestions(updatedQuestions);
    setNewAnswer(""); // Clear the textarea
    setAnswerPopupVisible(null); // Close the popup
  };

  const [commentPopupVisible, setCommentPopupVisible] = useState(null);

  const handleOpenCommentPopup = (index) => {
    if (commentPopupVisible === index) {
      setCommentPopupVisible(null);
    } else {
      setCommentPopupVisible(index);
    }
  };

  const handleCloseCommentPopup = () => {
    setCommentPopupVisible(null);
  };

  const [comments, setComments] = useState(commentsData);

  const [newComment, setNewComment] = useState("");
  const [showCommentsPopup, setShowCommentsPopup] = useState(false);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentData = {
      askedByUser: "shiv", // Example new commenter (replace dynamically as needed)
      userImage: "https://picsum.photos/100/120/?random", // Example image
      commentText: newComment,
      commentedDate: new Date().toLocaleString(),
    };

    // Add the new comment to the top of the list
    setComments([newCommentData, ...comments]);

    // Update static user data
    setUserData({
      ...userData,
      askedByUser: newCommentData.askedByUser,
      userImage: newCommentData.userImage,
    });

    // Clear the textarea
    setNewComment("");
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
              <Link href="/responses">
                <p className="text-sm font-semibold text-blue-950 cursor-pointer hover:underline">
                  {question.question}
                </p>
              </Link>
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
                className="absolute bg-white border rounded-lg shadow mt-2 p-4 w-full"
                style={{ zIndex: 1000 }}
              >
                {/* Add Comment Section */}
                <div className="space-y-4">
                  <textarea
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    onClick={handleAddComment}
                  >
                    Add Comment
                  </button>
                </div>

                {/* Display Comments Section */}
                <div className="mt-4 space-y-4">
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow flex items-start space-x-4"
                    >
                      <img
                        src={comment.userImage}
                        alt={comment.askedByUser}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-sm font-bold">
                          {comment.askedByUser}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {comment.commentedDate}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          {comment.commentText}
                        </p>
                      </div>
                    </div>
                  ))}
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
                  className="bg-white p-6 rounded-md w-4/5 max-w-md shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-bold text-gray-700">
                    Answer the Question
                  </h3>
                  <p className="mt-4 text-sm font-medium text-gray-600">
                    {question.question}
                  </p>
                  <div className="flex items-center mt-4">
                    {question.userImage ? (
                      <img
                        src={question.userImage}
                        alt={question.askedByUser || "Anonymous"}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <UserMinusIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                    <div className="ml-3 text-sm">
                      <p className="font-semibold text-gray-700">
                        {question.askedByUser || "Anonymous"}
                      </p>
                      {question.askedByUser && (
                        <p className="text-gray-500">
                          Level {question.userLevel} |{" "}
                          {question.userPoints.toLocaleString()} points
                        </p>
                      )}
                    </div>
                  </div>
                  <textarea
                    className="w-full mt-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical max-h-40"
                    placeholder="Write your answer..."
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
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
