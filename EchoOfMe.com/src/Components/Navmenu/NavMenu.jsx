import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import Logo from "../../assets/M-logo.png";
import linkedin from "../../assets/icon-1.png";
import gitub from "../../assets/icon-2.png";
import "./NavMenue.css";

const NavMenue = ({ openModal }) => {  
  const Items = [
    { name: "Home", link: "#", onClick: openModal },
    { name: "Project", link: "#", onClick: openModal },
    { name: "About", link: "#", onClick: openModal },  
    { name: "Contact", link: "#", onClick: openModal },
  ];

  return (
    <nav className="Navmenu_fld">
      <Icon image={Logo} alt="my logo" className="logo_img" />
      <div className="nav_click_items">
        <ul className="item_list">
          {Items.map((item, index) => (
            <li className="items" key={index}>
              {item.link === "#" ? (
                <button onClick={item.onClick}>{item.name}</button>  
              ) : (
                <Link to={item.link}>{item.name}</Link>  
              )}
            </li>
          ))}
        </ul>
        <div className="icons_fld">
          <Icon image={linkedin} alt="linkedin" className="links" />
          <Icon image={gitub} alt="gitub" className="links" />
        </div>
      </div>
    </nav>
  );
};

export default NavMenue;
