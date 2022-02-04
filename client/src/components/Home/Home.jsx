import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/actions";
import Card from "../DogCard/DogCard";

export default function Home() {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div>
      <button onClick={e=> {handleClick(e)}}> Refresh list </button>
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


      {allDogs?.map((e) => {
        return (
          <Fragment>
              <Card
                id={e.id}
                name={e.name}
                image={e.image}
                temperament={e.temperament}
                height={e.height}
                weight={e.weight}
                />
          </Fragment>
        );
      })}
    </div>
  );
}
