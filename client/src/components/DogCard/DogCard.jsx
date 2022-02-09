import React from "react";
import "./DogCard.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, temperament, temperaments, height, weight, id, createdAtDb}) {
  return (
    <div className="card-container">
      <div>
        <h2 className="name">{name}</h2>
      </div>
      <div className="image-container">
        <img src={image} alt="" width="300px" height="300px" />
      </div>
      <div className="card-content">
        <h4 className="temperaments">{createdAtDb ? temperaments.map(e => e.name).join(", ") : temperament}</h4>  
        <h5 className="heightAndWeight ">Weight: {weight} kg</h5>
         <h5 className="heightAndWeight">Height: {height} cm</h5> 
        <Link to={"/home/" + id}>
          <button className="btn">Learn more!</button>
        </Link>
      </div>
    </div>
  );
}