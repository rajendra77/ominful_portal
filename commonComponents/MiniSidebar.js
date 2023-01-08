import { Nav, NavItem, NavLink } from "reactstrap";
import React from "react";
import MiniSidebarNavItem from "./MiniSidebarNavItem";
import { miniSideJson } from "../database/MinisideData";

const MiniSidebar = ({}) => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href="#">
          <img src={"/side-icons/image 1.svg"} alt="logo" />
        </NavLink>
      </NavItem>
      {miniSideJson.map((item, index) => (
        <MiniSidebarNavItem
          item={item}
          img={`/side-icons/Vector (${index.toString()}).svg`}
        />
      ))}
    </Nav>
  );
};

export default MiniSidebar;
