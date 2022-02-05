import React from "react";
import { Link } from "react-router-dom";
import Korone from "../img/korone_preview_rev_3.png";
import "./navBar.css";

const Nav = ({ brand }) => {
  return (
    <div>
        <nav className="navBar"> 
        <Link to={"/"} className="title">
          {brand}
        </Link>
        <div className="lists">
            <select>
                <option value = "asc"> A-Z </option>
                <option value = "desc"> Z-A </option>
                <option value="HeaviestWeight">Heaviest breeds</option>
                <option value="LightestWeight">Lightest breeds</option>
            </select>
            <select>
                <option value="AllDogs">All existent breeds</option>
                <option value="Api">All official breeds</option>
                <option value="Created">All created breeds</option>
            </select>
            </div>
      </nav>
    </div>
  );
};
export default Nav;
