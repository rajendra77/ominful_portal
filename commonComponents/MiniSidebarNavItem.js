import { NavItem, NavLink } from "reactstrap";
import React from "react";

const MiniSidebarNavItem = ({ item, img, id }) => {
  return (
    <div className={`py-2 px-2`}>
      <NavItem
        className={` ${item == "Setting" && "miniSidebarClass rounded"}`}
      >
        <NavLink href="#" className="text-black">
          <img src={img} alt="logo" />
        </NavLink>
      </NavItem>
    </div>
  );
};

export default MiniSidebarNavItem;
