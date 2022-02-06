import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/actions";
import Card from "../DogCard/DogCard";
import "./Home.css"
import Pagination from "../Pagination/Pagination";

export default function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage, setDogsPerPage] = useState(8)
  const indexOfLastDog = currentPage * dogsPerPage
  const indexOfFirstDog = indexOfLastDog - dogsPerPage
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage)
  }



  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }



  return (
<div className="doggos">
  <div className="refresh">
<button onClick={e=> {handleClick(e)}}> Refresh list </button>

  </div>
<div className="lists">
          <select>
            <option value="asc"> A-Z </option>
            <option value="desc"> Z-A </option>
          </select>
          <select>
            <option value="HeaviestWeight">Heaviest breeds</option>
            <option value="LightestWeight">Lightest breeds</option>
          </select>
          <select>
            <option value="AllDogs">All existent breeds</option>
            <option value="Api">All official breeds</option>
            <option value="Created">All created breeds</option>
          </select>
        </div>

  <div className="positions">
      {currentDogs?.map((e) => {
        return (
          <Fragment>
              <Card
                id={e.id}
                name={e.name}
                image={e.image}
                temperament={e.temperament? e.temperament : "No temperament info avaiable"}
                height={e.height}
                weight={e.weight}
                />
          </Fragment>
        );
      })}
  </div>
      <Pagination
      dogsPerPage={dogsPerPage}
      allDogs={allDogs.length}
      pagination={pagination}
      />
</div>
  );
}
