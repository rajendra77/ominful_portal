import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { SidemenuJson } from "../database/SidemenuData";
import Sidebar from "./Sidebar";

function AccordionComponent({}) {
  const [open, setOpen] = useState("1");
  const [selectedItem, setSelectedItem] = useState(1);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const handleSelectedItem = (id) => {
    setSelectedItem(id);
  };

  return (
    <div>
      <h5 className="p-3">Settings</h5>
      <Accordion
        flush
        open={open}
        toggle={toggle}
        className="border-none outline-none "
      >
        {SidemenuJson.map((item, index) => {
          return (
            <AccordionItem>
              <AccordionHeader targetId={(index + 1).toString()}>
                <div className="d-flex">
                  <img src={"/global/vehicle.svg"} alt="icon" />
                  <span className="text-xs pl-2">{item.title}</span>
                </div>
              </AccordionHeader>
              <AccordionBody accordionId={(index + 1).toString()}>
                <Sidebar
                  data={item.array}
                  selectedItem={selectedItem}
                  handleSelectedItem={handleSelectedItem}
                />
              </AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
