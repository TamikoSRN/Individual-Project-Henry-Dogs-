import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/actions";
import Card from "../DogCard/DogCard";
import "./Home.css"

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
<div className="doggos">
  <div>
<button onClick={e=> {handleClick(e)}}> Refresh list </button>
  </div>

  <div className="positions">
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
</div>
  );
}
