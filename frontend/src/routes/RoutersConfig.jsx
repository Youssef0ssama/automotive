import React from "react";
import { Routes, Route } from "react-router-dom";
import Brands from "../pages/brands/Brands";
import Home from "../pages/Home/Home";
import Login from "../pages/login/loginForm";
import Models from "../pages/models/models";
import Contact from "../pages/contact/contact";
import Car from "../pages/car/car";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/login" element={<Login />} />
      <Route path="/models" element={<Models />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/car" element={<Car />} />
    </Routes>
  );
}

export default RoutesConfig;
