import React from "react";
import { Card } from "react-bootstrap";

function CarCard({ brandName, imageUrl, price }) {
  return (
    <Card
      className="bg-dark text-white shadow-lg border-0 rounded-4 overflow-hidden mx-auto"
      style={{ maxWidth: "345px" }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={brandName}
        style={{
          height: "180px",
          objectFit: "cover",
          backgroundColor: "#f5f5f5",
        }}
      />
      <Card.Body className="text-center">
        <Card.Title className="fw-bold fs-5">{brandName}</Card.Title>
        <Card.Text className="text-light small">
          With its aerodynamic curves and bold lines, this car is a standout on
          the road, turning heads and making a statement wherever it goes.
        </Card.Text>
        {price && <div className="fw-bold fs-6 mt-2">{price} USD</div>}
      </Card.Body>
    </Card>
  );
}

export default CarCard;
