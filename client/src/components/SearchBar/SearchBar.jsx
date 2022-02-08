import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsName } from "../../actions/actions";
import "./SearchBar.css"

export default function SearchBar({placeholder}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getDogsName(name))
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text"
                placeholder = {placeholder}
                onChange={(e) => handleInputChange(e)}
                />
                <div className="searchIcon">
                <button className="button" type="submit" onClick={(e) => handleSubmit(e)}>🔍</button>
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

{/* <input 
type= "text"
placeholder = "Search your doggo!"
onChange={(e) => handleInputChange(e)}
/>
<button type="submit" onClick={(e) => handleSubmit(e)}>Search</button> */}