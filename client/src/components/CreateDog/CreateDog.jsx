import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {getDogTemperament, postDog} from "../../actions/actions"

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
        <div>
            <Link to="/home"><button>Home</button></Link>
            
            <h1>Create your own Doggo!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Breed:</label>
                    <input 
                    type= "text"
                    value= {input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                   />
                </div>
                <div>
                    <label>Min Height:</label>
                    <input 
                    type= "number"
                    value= {input.minimHeight}
                    name="minimHeight"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Max Height:</label>
                    <input 
                    type= "number"
                    value= {input.maximHeight}
                    name="maximHeight"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Min Weight:</label>
                    <input
                    type="number"
                    value= {input.minimWeight}
                    name="minimWeight"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Max Weight:</label>
                    <input
                    type="number"
                    value= {input.maximWeight}
                    name="maximWeight"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Life Span:</label>
                    <input 
                    type="text"
                    value= {input.lifeSpan}
                    name="lifeSpan"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Picture:</label>
                    <input 
                    type="text"
                    value= {input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    />
                        </div>

                    <select onChange={handleSelect}>
                        {temperament.map((temperament) => (
                            <option value={temperament}>{temperament}</option>
                        ))}
                    </select>
                    <ul>{input.temperament.map(el => el + ", ")}</ul>
                    <div>
                    <button type="submit">Create Dog</button>
                    </div>
            </form>
        </div>
    )

}

