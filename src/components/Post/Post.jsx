import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data"; // Emoji-mart's emoji data

const Post = () => {
  const [name, setName] = useState(""); // Name of the commenter
  const [content, setContent] = useState(""); // Comment content
  const [comments, setComments] = useState([]); // List of comments
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji picker toggle
  const maxChars = 3000;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && content.trim() && content.length <= maxChars) {
      const newComment = {
        name,
        content,
        timestamp: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]); // Add new comment at the top
      setName("");
      setContent("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setContent((prevContent) => prevContent + emoji.native);
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Whatever You Feel, Write Your Comment Here
        </h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Comment Text Area */}
          <div>
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium"
            >
              Your Comment
            </label>
            <textarea
              id="comment"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={1}
              placeholder="Write your comment..."
              className="w-full resize-none border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
              style={{
                height: `${Math.max(100, content.split("\n").length * 24)}px`,
              }}
              required
            ></textarea>
            <div className="flex justify-between mt-2 text-sm">
              <span
                className={
                  content.length > maxChars ? "text-red-500" : "text-gray-500"
                }
              >
                {content.length}/{maxChars} characters
              </span>
              {content.length > maxChars && (
                <span className="text-red-500 font-semibold">
                  Comment too long!
                </span>
              )}
            </div>
          </div>

          {/* Emoji Picker and Submit */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Emoji
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg ${
                content.length > maxChars || content.trim().length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              } transition`}
              disabled={
                content.length > maxChars || content.trim().length === 0
              }
            >
              Submit Comment
            </button>
          </div>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <Picker
              data={data}
              onEmojiSelect={handleEmojiSelect}
              theme="light"
              style={{ position: "absolute", zIndex: 10 }}
            />
          )}
        </form>

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Comments:
          </h3>
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-blue-600">{comment.name}</h4>
                    <span className="text-sm text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-800">{comment.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to write one!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Post;
