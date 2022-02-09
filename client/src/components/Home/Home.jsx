import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, filterDogsByWeight, filterDogsByCreated, filterByName} from "../../actions/actions";
import Card from "../DogCard/DogCard";
import "./Home.css"
import Pagination from "../Pagination/Pagination";


export default function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);


  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage, setDogsPerPage] = useState(8)
  const [peso, setPeso] = useState("")
  const [orden, setOrden] = useState("")
  const indexOfLastDog = currentPage * dogsPerPage
  const indexOfFirstDog = indexOfLastDog - dogsPerPage
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage)
  }



  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);


  function handleSort (e){
    e.preventDefault()
    dispatch(filterByName(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }


  function handleFilterDogsByWeight(e){
    e.preventDefault()
    dispatch(filterDogsByWeight(e.target.value))
    setCurrentPage(1)
    setPeso(`Ordenado ${e.target.value}`)
  }


  function handleFilterDogsByCreated(e){
    dispatch(filterDogsByCreated(e.target.value))
    setCurrentPage(1)
  }
  

  return (
<div className="doggos">

<div className="lists">
          <select className="listAlpha" onChange={e => handleSort(e)}>
            <option value="Asc"> A-Z </option>
            <option value="Desc"> Z-A </option>
          </select>
          <select className="listAlpha" onChange={e => handleFilterDogsByWeight(e)}>
            <option value="AllWeights">Unordered Weights</option>
            <option value="HeavyWeight">Heaviest breeds</option>
            <option value="LightWeight">Lightest breeds</option>
          </select>
          <select className="listAlpha" onChange={(e)=> handleFilterDogsByCreated(e)}>
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
                image={e.image ? e.image : e.image }
                temperament={e.temperament}
                temperaments={e.temperaments}
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
