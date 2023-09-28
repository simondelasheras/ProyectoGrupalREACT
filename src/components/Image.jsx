
import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="card-image"
    />
  );
};

export default Image;
