import React from "react";
import Icon from "../Icon/Icon";
import description from "../../assets/description_img_1.jpg";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="desc_row_1">
        <div>
          <h2>Hello!</h2>
          <h1 className="introduction">I am Manjunath L</h1>
          <p className="description">
            I'm Manju, a Full Stack Developer creating websites using React....
          </p>

        </div>
        <div>
          <Icon
            image={description}
            alt="Description Image"
            className="Description_Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
