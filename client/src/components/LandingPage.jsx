import React from "react";
import "../components/LandingPage.css";
import { Link } from "react-router-dom";
import Background from "./img/korone.jpg"

const LandingPage = () => {
  return (
    <>
    <div id="background">
        <img src={Background}  className="stretch" alt=""></img>
    </div>
    </>
  )
};

export default LandingPage;