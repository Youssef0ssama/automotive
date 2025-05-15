import React from "react";
import { Container, Grid } from "@mui/material";
import BrandCard from "../../components/brand_card/brand_card"; // Capitalized file/component
import bmwImage from "../../assets/images/bmw.png";
import mercedesImage from "../../assets/images/mercedes.png";

function Brands() {
  const brands = [
    { name: "BMW", image: bmwImage },
    { name: "Mercedes", image: mercedesImage },
    { name: "Audi", image: bmwImage }, // Placeholder image
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {brands.map((brand, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <BrandCard brandName={brand.name} imageUrl={brand.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Brands;
