import React from "react";
import { motion } from "framer-motion";
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
            I'm Manju, a Front-End Developer creating websites using React and other modern web technologies.
          </p>
        </div>

        <div className="button_flds">
          {/* First Enhanced Motion Button */}
          <motion.button
            className="motion_button"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 188, 212, 0.6), 0 0 40px rgba(0, 188, 212, 0.6)",
              backgroundColor: "#00bcd4", // Cyan hover effect
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started on button 1!")}
          >
            Something
          </motion.button>

          {/* Second Enhanced Motion Button with Icon */}
          <motion.button
            className="motion_button"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 188, 212, 0.6), 0 0 40px rgba(0, 188, 212, 0.6)",
              backgroundColor: "#00bcd4", // Cyan hover effect
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started on button 2!")}
          >
            View Resume
            <img
              src={downloadIcon}
              alt="Download icon"
              className="icon"
            />
          </motion.button>
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
