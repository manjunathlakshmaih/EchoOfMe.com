import React from "react";

import "./Icon.css";

const Icon = ({ image, alt, className, links }) => {
  return (
    <a href={links}>
      <img className={className} src={image} alt={alt} />
    </a>
  );
};

export default Icon;
