import React from "react";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import downloadIcon from "../../assets/download-button.png";
import projectImage from "../../assets/background.webp";
import Buttons from "../Buttons/Buttons";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="desc_row_1">
        <div>
          <h2 className="description_hellow">Hello!</h2>
          <h1 className="introduction">I am Manjunath L</h1>
          <p className="details_fld">
            I'm Manju, a Front-End Developer creating websites using React and
            other modern web technologies.
          </p>
        </div>

        <div className="button_flds">
          <button className="motion_button">Something</button>

          <button className="motion_button">
            View Resume
            <img src={downloadIcon} alt="Download icon" className="icon" />
          </button>
        </div>
      </div>

      <div className="image_fld">
        <Icon
          image={projectImage}
          alt="Description Image"
          className="Description_Image"
        />
      </div>
    </div>
  );
};

export default Description;
