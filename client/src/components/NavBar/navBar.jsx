import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
// import underDog from "../img/underDog.png"
import Fou from "../img/Fouuu.png";
import SearchBar from "../SearchBar/SearchBar";


const Nav = ({ brand }) => {
  return (
    <div>
      <nav className="navBar">
        <Link to={"/home"} className="title">
          {brand}
          <img src={Fou} className="Fou" alt="" />
        </Link>
        {/* <Link to={"/"} >
          <img src={underDog}  className="underDog" alt=""/>
            Landing Page
          </Link> */}
        <Link to="/dog" className="Creation">
          Create your own Doggo!
        </Link>
        <SearchBar placeholder = "Find your doggo!" />
      </nav>
    </div>
  );
};
export default Nav;
