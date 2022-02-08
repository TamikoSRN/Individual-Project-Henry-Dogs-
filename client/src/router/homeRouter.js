import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/about";
import Nav from "../components/NavBar/navBar";

export default function homeRouter() {
  return (
    <div>
      <Nav brand="The Dog's Wikia" />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
