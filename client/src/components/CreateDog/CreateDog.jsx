import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {getDogTemperament, postDog} from "../../actions/actions"
import "./CreateDog.css"

export default function DogCreate(){
    const dispatch = useDispatch()
    const temperament = useSelector((state) => state.temperaments)

    const [input, setInput] = useState({
        name: "",
        minimHeight: "", 
        maximHeight: "",
        minimWeight: "",
        maximWeight: "",
        lifeSpan: "",
        image: "",
        temperament: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postDog(input))
        alert("Dog created successfully!")
        setInput({
            name: "",
            minimHeight: "", 
            maximHeight: "",
            minimWeight: "",
            maximWeight: "",
            lifeSpan: "",
            image: "",
            temperament: []
        })
    }

    useEffect(() => {
        dispatch(getDogTemperament())
    }, [dispatch]);

    return(
        <div className="backgroundd">

            <Link to="/home" className="buttonn">⬅ Home</Link>
            
            <div>
            <h1 className="titlee">Create your own Doggo!</h1>
            </div>
            <div className="card-containerr">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="breed">
                    <label>Breed:</label>
                    <input className="breedInput"
                    type= "text"
                    value= {input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    required
                   />
                </div>
                <div className="minHeight">
                    <label>Min Height:</label>
                    <input className="minHeightInput"
                    type= "number"
                    value= {input.minimHeight}
                    name="minimHeight"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div className="maxHeight">
                    <label>Max Height:</label>
                    <input className="maxHeightInput"
                    type= "number"
                    value= {input.maximHeight}
                    name="maximHeight"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div className="minWeight">
                    <label>Min Weight:</label>
                    <input className="minWeightInput"
                    type="number"
                    value= {input.minimWeight}
                    name="minimWeight"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div className="maxWeight">
                    <label>Max Weight:</label>
                    <input className="maxWeightInput"
                    type="number"
                    value= {input.maximWeight}
                    name="maximWeight"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div className="lifeSpan">
                    <label>Life Span:</label>
                    <input className="lifeSpanInput"
                    type="text"
                    value= {input.lifeSpan}
                    name="lifeSpan"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="picture">
                    <label>Picture:</label>
                    <input className="pictureInput"
                    type="text"
                    value= {input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    />
                    </div>

                    <select onChange={handleSelect}  className="listTemps">
                        <option hidden>Dog's temperaments</option>
                        {temperament.map((temperament) => (
                            <option value={temperament}>{temperament}</option>
                        ))}
                    </select>
                    <div>
                    <ul className="temperamentsItems">{input.temperament.map(el => el + ", ")}</ul>
                    </div>
                    <div>
                    <button type="submit" className="createDogButton">Create Dog</button>
                    </div>
            </form>
            </div>
        </div>
    )

}

