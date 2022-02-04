// import axios from "axios"

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
