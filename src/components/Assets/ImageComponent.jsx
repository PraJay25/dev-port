import React from "react";

const ImageComponent = ({ className, alt, src }) => {
  return <img className={`${className}`} src={src} alt={alt} />;
};

export default ImageComponent;
