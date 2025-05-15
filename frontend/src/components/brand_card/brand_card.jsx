import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function BrandCard({ brandName, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3, mx: "auto" }}>
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={brandName}
        sx={{ objectFit: "contain", backgroundColor: "#f5f5f5" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h6" component="div">
          {brandName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BrandCard;
