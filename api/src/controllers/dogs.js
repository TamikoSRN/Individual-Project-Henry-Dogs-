const { API_KEY } = process.env
const axios = require('axios')
const { Dog, Temperament } = require('../db');

const getApiInfo = async () => {
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    
    const dogInfo = await api.data.map( el => {
        return{
            id: el.id,
            name: el.name,
            height: el.height.metric,
            weight: el.weight.metric,
            lifeSpan: el.life_span,
            image: el.image.url,
            temperament: el.temperament
        }
    })

    return dogInfo;
}

const getDBinfo = async () => {
    const dogInDB = await Dog.findAll({
        include:{ 
            model: Temperament,
            attributes: ["name"]
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

module.exports = {
    getAllBreeds,
    getApiInfo
}