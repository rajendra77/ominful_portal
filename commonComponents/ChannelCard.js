import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const ChannelCard = ({ status, name, image }) => {
  return (
    <Card
      color="light"
      outline
      className="text-center mb-2 shadow-sm align-items-center"
      style={{ width: "170px" }}
    >
      <CardBody>
        <div
          className={`${
            status === "Active" ? " activeClass" : "text-danger inactiveClass"
          }  font-normal  px-2 rounded text-sm`}
        >
          {status}
        </div>
      </CardBody>
      <img className="text-center" alt="Card cap" src={image} />
      <CardBody>
        <CardTitle tag="h6">
          <p className="text-sm">Custom Name</p>
        </CardTitle>

        <CardSubtitle className="text-muted" tag="p">
          <small>{name}</small>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ChannelCard;
