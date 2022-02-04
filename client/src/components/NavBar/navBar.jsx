import React from "react";
import { Link } from "react-router-dom";
import Korone from "../img/korone.png"
import "./navBar.css"

const Nav = ({ brand }) => {
  return (
    <div>
      <nav className="navBar">
        <Link to={"/"} className="title">
          {brand}
          <img src={Korone} className="korone" alt="" />
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
