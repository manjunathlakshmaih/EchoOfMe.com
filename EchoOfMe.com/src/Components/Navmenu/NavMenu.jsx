import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import Logo from "../../assets/m-svgrepo-com.svg";
import linkedin from "../../assets/LI-In-Bug.png";
import gitub from "../../assets/github.png";

import "./NavMenue.css";

const NavMenue = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const menuRef = useRef(null); 
  const hamburgerRef = useRef(null); 

  const Items = [
    { name: "Home", link: "/", onClick: openModal },
    { name: "Project", link: "/projects", onClick: openModal },
    { name: "About", link: "/about", onClick: openModal },
    { name: "Contact", link: "/contact", onClick: openModal },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navmenu_fld">
      <Icon image={Logo} alt="my logo" className="logo_img" />
      <div
        className={`nav_click_items ${isMenuOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <ul className="item_list">
          {Items.map((item, index) => (
            <li className="items" key={index}>
              {item.link === "#" ? (
                <button className="nav_btn" onClick={item.onClick}>
                  {item.name}
                </button>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="icons_fld">
          <Icon
            image={linkedin}
            alt="linkedin"
            className="linkedin"
            links="https://www.linkedin.com/notifications/?filter=all"
          />
          <Icon
            image={gitub}
            alt="gitub"
            className="links"
            links="https://github.com/manjunathlakshmaih"
          />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavMenue;
