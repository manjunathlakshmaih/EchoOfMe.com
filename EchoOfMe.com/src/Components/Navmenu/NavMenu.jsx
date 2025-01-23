import React from "react";
import Icon from "../Icon/Icon";
import Logo from "../../assets/M-logo.png";
import linkedin from "../../assets/icon-1.png";
import gitub from "../../assets/icon-2.png";
import "./NavMenue.css";

const NavMenue = () => {
  const Items = [
    { name: "Home", link: "/home" },
    { name: "Project", link: "/project" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="Navmenu_fld">
      <Icon image={Logo} alt="my logo" className="logo_img" />
      <div className="nav_click_items">
        <ul className="item_list">
          {Items.map((item, index) => (
            <li className="items" key={index}>
              <a href={item.link}></a>
              {item.name}
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
