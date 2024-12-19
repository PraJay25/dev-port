// src/functions/handleUpvote.js
export const handleUpvote = (index, upvotes, setUpvotes) => {
  setUpvotes((prevUpvotes) => {
    const updatedUpvotes = [...prevUpvotes];
    updatedUpvotes[index] += 1; // Increment the count for the clicked question
    return updatedUpvotes;
  });
};
