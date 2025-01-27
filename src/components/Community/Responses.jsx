import React, { useState } from "react";
import { answersData } from "@/data/answersData";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const Responses = () => {
  const [data, setData] = useState(answersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [editedAnswer, setEditedAnswer] = useState("");

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((q) =>
    q.question.toLowerCase().includes(searchQuery)
  );

  // Open edit modal
  const handleEditAnswer = (questionIndex, answerIndex) => {
    setEditModal({ questionIndex, answerIndex });
    setEditedAnswer(data[questionIndex].answers[answerIndex].answerText);
  };

  // Save edited answer
  const handleSaveAnswer = () => {
    const updatedData = [...data];
    const { questionIndex, answerIndex } = editModal;

    updatedData[questionIndex].answers[answerIndex].answerText = editedAnswer;
    setData(updatedData);
    setEditModal(null);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditModal(null);
    setEditedAnswer("");
  };

  // Open delete confirmation modal
  const handleDeleteAnswer = (questionIndex, answerIndex) => {
    setDeleteModal({ questionIndex, answerIndex });
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    const updatedData = [...data];
    const { questionIndex, answerIndex } = deleteModal;

    updatedData[questionIndex].answers.splice(answerIndex, 1);
    setData(updatedData);
    setDeleteModal(null);
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border rounded-lg shadow-sm"
          />
        </div>

        {/* Render Questions */}
        {filteredData.map((questionData, questionIndex) => (
          <div
            key={questionIndex}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {/* Question Header */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={questionData.askedBy.userImage}
                alt={questionData.askedBy.name}
                className="w-10 h-10 rounded-full object-cover shadow-md"
              />
              <div>
                <h2 className="text-blue-600 text-lg font-bold">
                  {questionData.question}
                </h2>
                <p className="text-sm text-gray-500">
                  Asked by {questionData.askedBy.name}
                </p>
              </div>
            </div>

            {/* Answers Section */}
            <div className="mt-4 space-y-4">
              {questionData.answers.map((answer, answerIndex) => (
                <div
                  key={answerIndex}
                  className="flex items-start space-x-4 p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  {/* User Image */}
                  <img
                    src={answer.userImage}
                    alt={answer.answeredByUser}
                    className="w-10 h-10 rounded-full object-cover shadow-md"
                  />
                  {/* Answer Content */}
                  <div className="flex-1">
                    <div>
                      <h3 className="text-gray-800 font-semibold text-sm">
                        {answer.answeredByUser}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {answer.answeredDate}
                      </p>
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">
                      {answer.answerText}
                    </p>
                  </div>

                  {/* Edit/Delete Buttons */}
                  <div className="ml-auto flex space-x-2">
                    <button
                      className="p-2 bg-yellow-100 text-yellow-600 rounded-full shadow-sm hover:bg-yellow-200"
                      onClick={() =>
                        handleEditAnswer(questionIndex, answerIndex)
                      }
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 bg-red-100 text-red-600 rounded-full shadow-sm hover:bg-red-200"
                      onClick={() =>
                        handleDeleteAnswer(questionIndex, answerIndex)
                      }
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No Questions Found */}
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 text-sm">
            No questions found.
          </p>
        )}
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Answer</h3>
            <textarea
              className="w-full p-3 border rounded-lg text-sm"
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleSaveAnswer}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this answer?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={() => setDeleteModal(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Responses;
