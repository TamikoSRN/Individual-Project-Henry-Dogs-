import React from "react";
import { useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/actions";
import "./DogDetail.css"
import bg from "../img/blueEyesDoggo.jpg"

export default function Detail(){
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    const selectedDog = useSelector(state => state.detail)

    return (
        <div>
            {
                selectedDog.length > 0 ?
                <div className="card-containeer">
                    <div className="wallpapeerr">
                    <h1 className="naame">Breed's name: {selectedDog[0].name}</h1>
                    <img src ={selectedDog[0].image} alt="" width="476px" height="300px" className="pcture"/>
                    <h2 className="temperameents">Breed's temperaments: {!selectedDog[0].createdAtDb ? selectedDog[0].temperament : selectedDog[0].temperaments.map(e => e.name + (", ") ) }</h2>
                    <h3 className="heightAndWeightAndSpan">Breed's weight: {selectedDog[0].weight} kg</h3>
                    <h3 className="heightAndWeightAndSpan">Breed's Height: {selectedDog[0].height} cm</h3>
                    <h4 className="heightAndWeightAndSpan">Breed's life span: {selectedDog[0].lifeSpan}</h4>
                </div>
                </div> : <p>Loading...</p>
            }
            <div className="wallpapeerr">
            <img src={bg}></img>
            </div>
        </div>
    )
}