import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Nav from "../components/NavBar/navBar";
import DogDetail from "../components/DogDetail/DogDetail"

export default function homeRouter() {
  return (
    <div>
      <Nav brand="The Dog's Wikia" />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<DogDetail/>} />
      </Routes>
    </div>
  );
}
