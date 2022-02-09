import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/actions";


export default function Detail(props){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match?.params?.id))
    }, [dispatch])

    const selectedDog = useSelector(state => state.detail)

    return (
        <div>
            {
                selectedDog.length > 0 ?
                <div>
                    <h1>Breed's name: {selectedDog[0].name}</h1>
                    <img src={selectedDog[0].image}/>
                    <h3>Breed's weight: {selectedDog[0].weight} kg</h3>
                    <h3>Breed's Height: {selectedDog[0].height} cm</h3>
                    <h4>Breed's life span: {selectedDog[0].lifeSpan}</h4>
                    <h2>Breed's temperaments: {!selectedDog[0].createdInDb ? selectedDog[0].temperament + " " : selectedDog[0].temperaments.map(el => el.name + (" "))}</h2>
                </div> : <p>Loading...</p>
            }
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}