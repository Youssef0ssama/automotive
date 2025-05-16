import React from "react";
import { Container, Grid } from "@mui/material";
import BrandCard from "../../components/brand_card/brand_card"; // Capitalized file/component
import bmwImage from "../../assets/images/bmw.png";
import mercedesImage from "../../assets/images/mercedes.png";

function Brands() {
  const brands = [
    { name: "BMW", image: bmwImage },
    { name: "Mercedes", image: mercedesImage },
  ];

  return (
    <div className="bg-black">
      <Container sx={{ py: 5 }}>
        <div className="text-white d-flex align-items-center justify-content-center pt-5">
          <h1 className="display-4">Brands</h1>
        </div>
        <Grid container spacing={4} className="justify-content-center pt-5">
          {brands.map((brand, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <BrandCard brandName={brand.name} imageUrl={brand.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Brands;
