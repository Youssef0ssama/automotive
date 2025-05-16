import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BrandCard({ brandName, imageUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/models/`); 
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 3,
        mx: "auto",
      }}
    >
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
