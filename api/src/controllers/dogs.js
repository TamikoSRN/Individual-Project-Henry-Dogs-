const { API_KEY } = process.env
const axios = require('axios')
const { Dog, Temperament } = require('../db');

const getBreedsInfo = async () => {
    const getAllBreeds = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const breedsInfo = await getAllBreeds.data.map((el) => {
      return {
        id: el.id,
        name: el.name, //objetos con los elementos xD
        height: el.height.metric,
        weight: el.weight.metric,
        lifeSpan: el.life_span,
        temperament: [el.temperament]
          .join()
          .split(",")
          .map((el) => el.trim()),
        image: el.image.url,
      };
    });
  
    return breedsInfo; // que tipo de dato retorno? es una promesa, voy a usarla despues para hacer el promise.all, no seas cabeza de pija de olvidarte
  };
  
  const getDbInfo = async () => {
    const dogInDb = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["temperament"],
        },
    });
    return dogInDb
  };
  
  const getAllBreeds = async () => {
    const breedsInformation = await getBreedsInfo();
    const dbInformation = await getDbInfo();
    const dogTotalInformation = breedsInformation.concat(dbInformation);
    return dogTotalInformation;
  };
  
  module.exports = {
    getBreedsInfo,
    getAllBreeds
  }