const { API_KEY } = process.env
const axios = require('axios')
const { Dog, Temperament } = require('../db');

const getApiInfo = async () => {
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    const dogInfo = await api.data.map( e => {
        return{
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            lifeSpan: e.life_span,
            image: e.image.url,
            temperament: e.temperament
        }
    })

    return dogInfo;
}

const getDBinfo = async () => {
    const dogInDB = await Dog.findAll({
        include:{ 
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
            }
           }
    })

    return dogInDB;
}


const getAllBreeds = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBinfo();
    const allInfo = apiInfo.concat(dbInfo);

    return allInfo

}

//  const getAllBreeds = async () => {
//     let allInfo = await Promise.all([getApiInfo(), getDBinfo()]).then(response => response)
//     return allInfo
// }

module.exports = {
    getAllBreeds,
}