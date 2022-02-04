import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">The Dog's Wikia</Link>
      </li>
      <li>
        <Link to="/DogCreation">Create your own Dog!</Link>
      </li>
      <li>
        <Link to="/About">About me!</Link>
      </li>
    </div>
  );
};
export default navbar;
