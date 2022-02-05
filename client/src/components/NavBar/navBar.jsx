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
        <Link to={"/home"} className="">
          {/* <img src={Korone} className="korone" alt="" /> */}
        </Link>
        <div className="lists">
        <select>
                <option value = "asc"> A-Z </option>
                <option value = "desc"> Z-A </option>
            </select>
            <select>
                <option value="AllDogs">All existent breeds</option>
                <option value="Api">All official breeds</option>
                <option value="Created">All created breeds</option>
            </select>
            <select>
                <option value="HeaviestWeight">Heaviest breeds</option>
                <option value="LightestWeight">Lightest breeds</option>
            </select>
            <select>
                <option value="TallerBreeds">Taller breeds</option>
                <option value="ShortestBreeds">Shortest breeds</option>
            </select>
            </div>
      </nav>
    </div>
  );
};
export default Nav;
