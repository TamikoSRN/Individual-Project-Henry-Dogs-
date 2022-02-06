import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, filterDogsByWeight, filterDogsByCreated } from "../../actions/actions";
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

  function handleFilterWeight(e){
    dispatch(filterDogsByWeight(e.target.value))
  }

  function handleFilterDogsByCreated(e){
    dispatch(filterDogsByCreated(e.target.value))
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
          <select onChange={e => handleFilterWeight(e)}>
            <option value="AllWeights">Unordered Weights</option>
            <option value="HeavyWeight">Heaviest breeds</option>
            <option value="LightWeight">Lightest breeds</option>
          </select>
          <select onChange={(e)=> handleFilterDogsByCreated(e)}>
            <option value="AllDogs">All existent breeds</option>
            <option value="Api">Official breeds</option>
            <option value="Created">Created breeds</option>
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
                temperament={e.temperament}
                temperaments={e.temperaments? e.temperaments : "No temperament info avaiable"}
                height={e.height}
                weight={e.weight}
                createdAtDb={e.createdAtDb}
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
