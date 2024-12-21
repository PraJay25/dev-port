import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className, onClick }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
