import React from "react";
import { Container, Grid } from "@mui/material";
import ModelCard from "../../components/model_card/modelCard"; // Updated import
import ewq from "../../assets/images/BrabusRocket.jpeg";
import gwagaen from "../../assets/images/mercedes g wagaen .jpeg";
import x5 from "../../assets/images/bmw x5.jpeg";
import bmw540 from "../../assets/images/bmw 540 .jpeg";
import bmw340 from "../../assets/images/bmw 340 .jpeg";
import bmwi8 from "../../assets/images/BMW i8 black.jpeg";
function Models() {

  const models = [
    {
      name: "BMW x5",
      image: x5,
      price: "$35,500.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
    {
      name: "brabus racekt",
      image: ewq,
      price: "$754,000.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
    {
      name: "bmw i8 ",
      image: bmwi8,
      price: "$65,000.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
    {
      name: "bmw 540",
      image: bmw540,
      price: "$975,000.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
    {
      name: "bmw 340 ",
      image: bmw340,
      price: "$555,000.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
    {
      name: "g wagen ",
      image: gwagaen,
      price: "$55,000.00",
      description:
        "With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.",
    },
  ];

  return (
    <div className="bg-black">
      <Container sx={{ py: 5, px: 2 }}>
        <div className="text-white d-flex align-items-center justify-content-center pt-5">
          <h1 className="display-4">Models</h1>
        </div>
        <Grid container spacing={4} className="justify-content-center pt-5">
          {models.map((car, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <ModelCard
                brandName={car.name}
                imageUrl={car.image}
                price={car.price}
                description={car.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Models;
