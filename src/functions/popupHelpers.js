// src/functions/popupHelpers.js

/**
 * Toggles the visibility of a popup for a specific item.
 * @param {number|null} index - The index of the item for which the popup should be shown. Pass `null` to close.
 * @param {Function} popupStateSetter - The state setter function for managing the popup visibility.
 */
export const togglePopup = (index, popupStateSetter) => {
  popupStateSetter(index); // Update the state to show or hide the popup.
};

/**
 * Closes any open popup.
 * @param {Function} popupStateSetter - The state setter function for managing the popup visibility.
 */
export const closePopup = (popupStateSetter) => {
  popupStateSetter(null); // Set the popup visibility state to null.
};
