import React from "react";

import './Icon.css';

const Icon = ({image, alt, className}) => {
  return (
    <img className={className} src={image} alt={alt}/>
  )
}

export default Icon;