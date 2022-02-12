import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
// import Home from "./components/Home/Home";
// import About from "./components/about";
// import Nav from "./components/NavBar/navBar";
import "./app.css";
import HomeRouter from "../router/homeRouter";
import DogCreate from "../components/CreateDog/CreateDog";
import About from "../components/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dog" element={<DogCreate />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<HomeRouter />} />
      </Routes>
    </>
  );
}

export default App;
