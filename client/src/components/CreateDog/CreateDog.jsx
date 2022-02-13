import React, {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {getDogTemperament, postDog} from "../../actions/actions"
import "./CreateDog.css"

function refreshPage() {
    window.location.reload(false);
  }

const validate = function(input){
    let errors = {}
    if (!input.name){
        errors.name = "Completing with a *BREED'S NAME* is required!"
    }
     if (!input.minimHeight) {
        errors.minimHeight = "Completing with a *MINIMAL HEIGHT* is required!"
    }
     if (!input.maximHeight) {
        errors.maximHeight = "Completing with a *MAXIMAL HEIGHT* is required!"
    }
     if  (!input.minimWeight) {
        errors.minimWeight = "Completing with a *MINIMAL WEIGHT* is required!"
    }
     if (!input.maximWeight) {
        errors.maximWeight = "Completing with a *MAXIMAL HEIGHT* is required!"
    }
    if (input.minimHeight > input.maximHeight){
        errors.minimHeight = "*MIN HEIGHT* must not surmount the *MAX HEIGHT* value!"
    }
    if (input.minimWeight > input.maximWeight){
        errors.minimWeight = "*MIN WEIGHT* must not surmount the *MAX WEIGHT* value!"
    }
    if (input.lifeSpan < 0) {
        errors.lifeSpan = "A life span cannot be lower than 0!"
    }
    if (input.lifeSpan > 22){
        errors.lifeSpan = "Please, select a reasonable life span for your dog."
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
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        setErrors(validate(input))
        const errorSaver = validate(input)
        if(Object.values(errorSaver).length !== 0 ) {
            alert("Please, fulfill ALL of the required camps in the form")
        } else {
            dispatch(postDog(input))
            navigate("/home")
        alert("Dog created successfully!")
        setInput({
            name: "",
            minimHeight: "", 
            maximHeight: "",
            minimWeight: "",
            maximWeight: "",
            lifeSpan: "",
            image: "",
            temperament: [],
        })
        }
        // if(input.name &&
        //     input.minimHeight &&
        //     input.maximHeight &&
        //     input.minimWeight &&
        //     input.maximWeight &&
        //     input.lifeSpan &&
        //     input.temperament){

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

            <button type="submit" onClick={refreshPage} className="refreshh">
			<img className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" alt=""></img></button>
            
            <Link to="/home" className="buttonn">⬅ Home</Link>
            
            <div className="card-containerr">
            <form onSubmit={(e) => handleSubmit(e)}>

            <hr />

            <h1 className="titlee">Create your own Doggo!</h1> 

                <div className="breed">
                    <label>Breed</label>
                    <input className="breedInput"
                    type= "text"
                    value= {input.name}
                    name="name"
                    placeholder="Breed's name"
                    onChange={(e) => handleChange(e)}/>
                   {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="minHeight">
                    <label>Min Height</label>
                    <input className="minHeightInput"
                    type= "number"
                    min="1"
                    max="99"
                    value= {input.minimHeight}
                    name="minimHeight"
                    placeholder="Minimal height"
                    onChange={(e) => handleChange(e)}/>
                    {errors.minimHeight && 
                        <p className="error">{errors.minimHeight}</p>}
                </div>

                <div className="maxHeight">
                    <label>Max Height</label>
                    <input className="maxHeightInput"
                    type= "number"
                    min="1"
                    max="99"
                    value= {input.maximHeight}
                    name="maximHeight"
                    placeholder="Maximal height"
                    onChange={(e) => handleChange(e)}/>
                    {errors.maximHeight && 
                        <p className="error">{errors.maximHeight}</p>}
                </div>

                <div className="minWeight">
                    <label>Min Weight</label>
                    <input className="minWeightInput"
                    type="number"
                    min="1"
                    max="99"
                    value= {input.minimWeight}
                    name="minimWeight"
                    placeholder="Minimal weight"
                    onChange={(e) => handleChange(e)}/>
                    {errors.minimWeight && 
                        <p className="error">{errors.minimWeight}</p>}
                </div>

                <div className="maxWeight">
                    <label>Max Weight</label>
                    <input className="maxWeightInput"
                    type="number"
                    min="1"
                    max="99"
                    value= {input.maximWeight}
                    name="maximWeight"
                    placeholder="Maximal weight"
                    onChange={(e) => handleChange(e)}/>
                    {errors.maximWeight &&
                        <p className="error">{errors.maximWeight}</p>}
                </div>

                <div className="lifeSpan">
                    <label>Life Span</label>
                    <input className="lifeSpanInput"
                    type="number"
                    min="1"
                    max="23"
                    value= {input.lifeSpan}
                    name="lifeSpan"
                    placeholder="Breed's life span"
                    onChange={(e) => handleChange(e)}/> 
                    {errors.lifeSpan &&
                    <label className="error">{errors.lifeSpan}</label>}
                </div>

                <div className="picture">
                    <label>Picture</label>
                    <input className="pictureInput"
                    type="text"
                    value= {input.image}
                    name="image"
                    placeholder="Breed's picture URL"
                    onChange={(e) => handleChange(e)}/>
                    </div>


                    <div>
                    <select onChange={(e) => handleSelect(e)}  className="listTemps">
                        <option hidden>Dog's temperaments</option>
                        {temperament.map((temperament) => (
                            <option value={temperament}>{temperament}</option>
                        ))}
                    </select>
                </div>
                    <div className="temperamentsItems">
                    <ul>{input.temperament.map(el => el + ". ")}</ul>
                </div>
                    
                <div>
                    <button className="createDogButton" type="submit" disabled = {input < 5 || input.temperament.length < 3 || input.temperament.length >= 6 ? true : false}>Create Dog</button>
                </div>
            </form>
            </div>
        </div>
    )

                        }