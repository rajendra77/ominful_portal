import React, { useState } from "react";
import AccordionComponent from "../commonComponents/AccordionComponent";
import Header from "../commonComponents/Header";
import MenuContainer from "../commonComponents/MenuContainer";
import MiniSidebar from "../commonComponents/MiniSidebar";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="d-flex ">
          <div className="border-2 border-borderColor bg-white">
            <MiniSidebar />
          </div>
          <div className="border-t bg-white width300">
            <AccordionComponent />
          </div>
        </div>
        <div className="border-2 border-indigo-borderColor w-full">
          <MenuContainer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
