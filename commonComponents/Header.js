import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <Nav className="justify-content-between">
      <NavItem style={{ marginLeft: "25%" }}>
        <NavLink href="#" className="text-black">
          <div className="flex items-center border rounded-pill px-2 py-1">
            <img
              className="text-center"
              alt="Card cap"
              src={"/global/copyLink.svg"}
            />
            <span className="px-2">Quick Links</span>
            <BsChevronDown size="0.7rem" />
          </div>
        </NavLink>
      </NavItem>
      <div className="flex">
        <NavItem>
          <NavLink href="#" className="text-black">
            <div className="flex">
              <img
                className="text-center"
                alt="Card cap"
                src={"/global/eng.svg"}
              />
              <span className="px-2">English</span>
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" className="text-black">
            <img
              className="text-center"
              alt="Card cap"
              src={"/global/bell.svg"}
            />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#" className="text-black">
            <img
              className="text-center"
              alt="Card cap"
              src={"/global/help.svg"}
            />
          </NavLink>
        </NavItem>
      </div>
    </Nav>
  );
};

export default Header;
