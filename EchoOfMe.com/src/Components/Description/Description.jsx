import React from "react";
import Icon from "../Icon/Icon";
import downloadIcon from "../../assets/download-button.png";
import projectImage from '../../assets/background.webp';
import Buttons from "../Buttons/Buttons";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="desc_row_1">
        <div>
          <h2>Hello!</h2>
          <h1 className="introduction">I am Manjunath L</h1>
          <p className="details_fld">
            I'm Manju, a Front End Developer creating websites using React....
          </p>
        </div>
        <div className="button_flds">
          <Buttons title="something" type="button" className="button_1" />
          <Buttons
            title="View Resume"
            type="button"
            className="button_1"
            icon={downloadIcon}
            alt="download icon"
            classname="icon"
          />
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
