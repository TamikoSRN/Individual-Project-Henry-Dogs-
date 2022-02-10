import axios from "axios"

const GET_DOGS = "GET_DOGS"
const url = "http://localhost:3001/dogs"

export const getDogs = () => (dispatch) => {
    return fetch(url)
    .then((response) => response.json())
    .then((dogs) => {
        dispatch({type: GET_DOGS, payload: dogs})
    })
}
// export function getDogs() {
//     return async function(dispatch){
//         var json = await axios.get(url, {

//         })
//         return dispatch({
//             type: GET_DOGS,
//             payload: json.data
//         })
//     }
// }


export function getDogsName(name){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs?name=" + name)
            return dispatch({
                type: "GET_DOGS_NAME",
                payload: json.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function getDogTemperament(){
    return async function(dispatch){
      
            var json = await axios.get("http://localhost:3001/temperament")
            return dispatch({
                type: "GET_DOGS_TEMPERAMENT",
                payload: json.data
            })
    }
}

export function filterDogsByTemperament(payload){
    return{
        type: 'FILTER_DOGS_BY_TEMPERAMENT',
        payload
    }
}

export function postDog(payload){
    return async function(dispatch){
            var json = await axios.post("http://localhost:3001/dog", payload)
            console.log(json)
            return json
        }
}

export function getDetail (id) {
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
        console.log(json)
         dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

export function filterDogsByWeight(payload){
    return {
        type: "FILTER_BY_WEIGHT",
        payload
    }
}



export function filterDogsByCreated(payload){
    return {
        type: "FILTER_BY_CREATED",
        payload
    }
}

export function filterByName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

