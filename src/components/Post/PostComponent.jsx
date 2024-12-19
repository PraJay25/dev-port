import React, { useState } from "react";

const PostComponent = () => {
  const [text, setText] = useState(""); // To store the post text
  const [media, setMedia] = useState(null); // To store selected media (image/video)
  const [feed, setFeed] = useState([]); // To store the list of posts

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle media input change
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
    }
  };

  // Handle post submission
  const handlePostSubmit = () => {
    if (!text && !media) {
      alert("Please add some text or media before submitting.");
      return;
    }

    const newPost = {
      id: Date.now(),
      text,
      media: media ? URL.createObjectURL(media) : null,
    };

    setFeed([newPost, ...feed]); // Add the new post to the feed
    setText(""); // Reset text input
    setMedia(null); // Reset media input
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a Post</h1>

      {/* Post Input Form */}
      <div className="space-y-4">
        {/* Text Input */}
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="What's on your mind?"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>

        {/* Media Input */}
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleMediaChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-100 file:text-blue-700
                     hover:file:bg-blue-200"
        />

        {/* Submit Button */}
        <button
          onClick={handlePostSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
        >
          Post
        </button>
      </div>

      {/* Feed Section */}
      <div className="mt-8 space-y-6">
        {feed.length === 0 ? (
          <p className="text-gray-500 text-center">
            No posts yet. Be the first to post!
          </p>
        ) : (
          feed.map((post) => (
            <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow">
              {post.text && <p className="text-gray-800 mb-2">{post.text}</p>}
              {post.media && (
                <div className="mt-2">
                  {post.media.endsWith(".mp4") ||
                  post.media.endsWith(".webm") ? (
                    <video controls className="w-full rounded-lg">
                      <source src={post.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={post.media}
                      alt="Uploaded media"
                      className="w-full rounded-lg"
                    />
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostComponent;
