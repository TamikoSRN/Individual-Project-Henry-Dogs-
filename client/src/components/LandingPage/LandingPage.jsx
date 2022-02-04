import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
    <div className="background">
      <div>
        <h1 className="welcomeText">Welcome to my Dog's Wikia</h1>
        <Link to={"/home"}>
          <span className="enterButton">Enter</span>
        </Link>
      </div>
      </div>
    </>
  );
}