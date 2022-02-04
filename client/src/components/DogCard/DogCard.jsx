import React from "react";

export default function Card({ name, image, temperament, height, weight }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" width="300px" height="300px" />
      <h3>{temperament}</h3>
      <h5>{height}</h5>
      <h5>{weight}</h5>
    </div>
  );
}