export const incrementViewCount = (index, views, setViews) => {
  setViews((prevViews) => {
    const updatedViews = [...prevViews];
    updatedViews[index] += 1; // Increment view count for the specific question
    return updatedViews;
  });
};
