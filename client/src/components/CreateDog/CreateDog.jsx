import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {getDogTemperament, postDog} from "../../actions/actions"
import "./CreateDog.css"

function validate(input){
    let errors = {}
    if (!input.name){
        errors.name = "Completing with a *BREED'S NAME* is required!"
    } else if (!input.minimHeight) {
        errors.minimHeight = "Completing with a *MINIMAL HEIGHT* is required!"
    } else if (!input.maximHeight) {
        errors.maximHeight = "Completing with a *MAXIMAL HEIGHT* is required!"
    } else if  (!input.minimWeight) {
        errors.minimWeight = "Completing with a *MINIMAL WEIGHT* is required!"
    } else if (!input.maximWeight) {
        errors.maximWeight = "Completing with a *MAXIMAL HEIGHT* is required!"
    }
    return errors
}

export default function DogCreate(){
    const dispatch = useDispatch()
    const temperament = useSelector((state) => state.temperaments)
    const [errors, setErrors] = useState ({})

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
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
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

    // function handleDelete(el){
    //     setInput({
    //         ...input,
    //         temperament: input.temperament.filter(temp => temp !== el)
    //     })
    // }

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
                    <label>Breed</label>
                    <input className="breedInput"
                    type= "text"
                    value= {input.name}
                    name="name"
                    placeholder="Breed's name"
                    onChange={(e) => handleChange(e)}
                   />
                   {errors.name && (
                       <p className="error">{errors.name}</p>
                   )}
                </div>
                <div className="minHeight">
                    <label>Min Height</label>
                    <input className="minHeightInput"
                    type= "number"
                    value= {input.minimHeight}
                    name="minimHeight"
                    placeholder="Minimal height"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.minimHeight && (
                        <p className="error">{errors.minimHeight}</p>
                   )}
                </div>
                <div className="maxHeight">
                    <label>Max Height</label>
                    <input className="maxHeightInput"
                    type= "number"
                    value= {input.maximHeight}
                    name="maximHeight"
                    placeholder="Maximal height"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.maximHeight && (
                        <p className="error">{errors.maximHeight}</p>
                   )}
                </div>
                <div className="minWeight">
                    <label>Min Weight</label>
                    <input className="minWeightInput"
                    type="number"
                    value= {input.minimWeight}
                    name="minimWeight"
                    placeholder="Minimal weight"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.minimWeight && (
                        <p className="error">{errors.minimWeight}</p>
                   )}
                </div>
                <div className="maxWeight">
                    <label>Max Weight</label>
                    <input className="maxWeightInput"
                    type="number"
                    value= {input.maximWeight}
                    name="maximWeight"
                    placeholder="Maximal weight"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.maximWeight && (
                        <p className="error">{errors.maximWeight}</p>
                   )}
                </div>
                <div className="lifeSpan">
                    <label>Life Span</label>
                    <input className="lifeSpanInput"
                    type="text"
                    value= {input.lifeSpan}
                    name="lifeSpan"
                    placeholder="Breed's life span"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="picture">
                    <label>Picture</label>
                    <input className="pictureInput"
                    type="text"
                    value= {input.image}
                    name="image"
                    placeholder="Breed's picture URL"
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

