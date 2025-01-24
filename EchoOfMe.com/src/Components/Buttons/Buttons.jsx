import React from "react";
import "./Buttons.css";

const Buttons = ({
  title,
  children,
  type,
  className,
  classname,
  icon,
  alt,
  ...rest
}) => {
  return (
    <>
      <button {...rest} type={type} className={className}>
        {icon && <img src={icon} alt={alt} className={classname} />}
        {title || children}
      </button>
    </>
  );
};

export default Buttons;
