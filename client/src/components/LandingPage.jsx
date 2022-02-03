import React from "react";
import "../components/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div>
        <h1>Welcome to my Dog's Wikia</h1>
        <Link to={"/home"}>
          <span className="enterButton">Enter</span>
        </Link>
      </div>
    </>
  );
}
