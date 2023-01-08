import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import { salesChannelJson } from "../database/SalesCannel";
import { Context } from "../hooks/Context";
import ChannelCard from "./ChannelCard";
import ChannelTab from "./ChannelTab";

const MenuContainer = ({}) => {
  const { setting, tab } = useContext(Context);

  return (
    <div>
      <h5 className="pl-3 pt-3">{setting}</h5>

      {setting === "Sales channel Apps" && (
        <>
          <ChannelTab />

          <div className="w-full"></div>

          {tab === 1 && (
            <div className="w-full">
              {salesChannelJson.map((item) => {
                return (
                  <>
                    <div className="appTitle">
                      <span className=" borderLeft">{item.title}</span>
                    </div>

                    <Row className="mx-1 mt-3">
                      {item.array.map((item) => {
                        return (
                          <Col className="" md="2" xs="6">
                            <ChannelCard
                              image={item.image}
                              status={item.status}
                              name={item.name}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuContainer;
