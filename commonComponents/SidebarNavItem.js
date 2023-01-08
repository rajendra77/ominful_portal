import { NavItem, NavLink } from "reactstrap";
import React, { useContext } from "react";
import { Context } from "../hooks/Context";

const SidebarNavItem = ({
  title,
  count,
  selectedItem,
  id,
  handleSelectedItem,
}) => {
  const { updateSetting } = useContext(Context);
  return (
    <div
      className="py-1 "
      onClick={() => {
        updateSetting(title);
        handleSelectedItem(id);
      }}
    >
      <NavItem>
        <NavLink
          href="#"
          className={`text-black  ${selectedItem == id && "bgLight"}`}
        >
          <div className="d-flex items-center justify-between ">
            <div className="d-flex items-center">
              <img src={"/global/vehicle.svg"} alt="icon" />
              <span className="text-xs pl-2">{title}</span>
            </div>
            <span
              className={`text-xs  ${
                selectedItem == id && "bg-primary text-white rounded p-2 "
              }  `}
            >
              {count}
            </span>
          </div>
        </NavLink>
      </NavItem>
    </div>
  );
};

export default SidebarNavItem;
