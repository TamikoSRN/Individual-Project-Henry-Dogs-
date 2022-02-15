import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, filterDogsByWeight, filterDogsByCreated, filterByName, filterDogsByTemperament, getDogTemperament} from "../../actions/actions";
import Card from "../DogCard/DogCard";
import "./Home.css"
import Pagination from "../Pagination/Pagination";
import LoadingScreen from "../LoadingScreen/Loading";


export default function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperament = useSelector((state) => state.temperaments);

  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage, setDogsPerPage] = useState(8)
  const [peso, setPeso] = useState("")
  const [orden, setOrden] = useState("")
  const indexOfLastDog = currentPage * dogsPerPage
  const indexOfFirstDog = indexOfLastDog - dogsPerPage
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDogTemperament());
  }, [dispatch]);

  
  const pagination = (numberOfPage) => {
    setCurrentPage(numberOfPage)
  }


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

  function handleFilterDogsByTemperament(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  
  function refreshPage() {
    window.location.reload(false);
  }
  
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   dispatch(getDogs())
  // }




  return (
    <>
    {loading === true ? <LoadingScreen setLoading={setLoading} /> : 
    
    <div className="doggos">

<div className="lists">
          <select className="listAlpha" onChange={e => handleSort(e)}>
            <option hidden="all">A-Z</option>
            <option value="Asc"> A-Z </option>
            <option value="Desc"> Z-A </option>
          </select>
          <select className="listAlpha" onChange={e => handleFilterDogsByWeight(e)}>
            <option hidden="AllWeights">Unordered Weights</option>
            <option value="HeavyWeight">Heaviest breeds</option>
            <option value="LightWeight">Lightest breeds</option>
          </select>
          <select className="listAlpha" onChange={(e)=> handleFilterDogsByCreated(e)}>
            <option hidden="Alll">All existent breeds</option>
            <option value="AllDogs">All existent breeds</option>
            <option value="Api">Official breeds</option>
            <option value="Created">Created breeds</option>
          </select>
          <select onChange={(e) => handleFilterDogsByTemperament(e)} className="listAlpha">
            <option value="Temps">Temperaments</option>
            {temperament.map((temperament) => (
                            <option value={temperament}>{temperament}</option>
                        ))}
            </select>
          <button type="submit" onClick={refreshPage} className="refresh">
			<img className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" alt=""></img></button>
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
    }
    </>
  );
}
