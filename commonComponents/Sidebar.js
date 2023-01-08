import { Nav } from "reactstrap";
import React from "react";
import SidebarNavItem from "./SidebarNavItem";

const Sidebar = ({ data, selectedItem, handleSelectedItem }) => {
  return (
    <Nav vertical>
      {data.map((item, index) => (
        <SidebarNavItem
          title={item.name}
          count={item.count}
          selectedItem={selectedItem}
          id={index + 1}
          handleSelectedItem={handleSelectedItem}
        />
      ))}
    </Nav>
  );
};

export default Sidebar;
