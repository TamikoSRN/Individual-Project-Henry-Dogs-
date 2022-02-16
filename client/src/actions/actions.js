import axios from "axios"


export const getDogs = () => (dispatch) => {
    return fetch("http://localhost:3001/dogs")
    .then((response) => response.json())
    .then((dogs) => {
        dispatch({
            type: "GET_DOGS",
            payload: dogs})
    })
}

// export const getDogs = () => async (dispatch) => {
//     let dogs = await axios.get("http://localhost:3001/dogs")
//     dispatch({
//         type: GET_DOGS,
//         payload: dogs.data
//     })
// }

// export const getDogs = () => async (dispatch) => {
//     let fetchito = await fetch("http://localhost:3001/dogs")
//     let dogs = await fetchito.json()

//     dispatch({
//         type: GET_DOGS,
//         payload: dogs
//     })
// }



export function getDogsName(name){
    return async function (dispatch){
            var json = await axios.get("http://localhost:3001/dogs?name=" + name)
            return dispatch({
                type: "GET_DOGS_NAME",
                payload: json.data
            })
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


export function getDetail (id) {
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
         dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

// export const getDetail = (id) => async (dispatch) => {
//     const asd = await fetch (`http://localhost:3001/dogs/${id}`)
//     var json = await asd.json()

//     dispatch({
//         type: "GET_DETAIL",
//         payload: json
//     })
// }

export function postDog(payload){
    return async function(){
            var json = await axios.post("http://localhost:3001/dog", payload)
            return json
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

export function filterDogsByTemperament(payload){
    return{
        type: 'FILTER_DOGS_BY_TEMPERAMENT',
        payload
    }
}

