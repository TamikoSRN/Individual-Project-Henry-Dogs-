const { API_KEY } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");


const getTemperament = async () => {


    let api = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    let dogTemperament = await api.data.map((obj) => {
        if (obj.temperament) {
          return obj.temperament;
        }
      }).join().split(",");
    // Mapeo todos los temperamentos de los perros de la api a un nuevo array.

    let temps = []; 
    //Creo un array vacio donde van a estar todos los temps despues de "filtrarlos"

    dogTemperament.map((temp) => {
      if (!temps.includes(temp.trim()) && temp) {
        temps.push(temp.trim());
      }
    }); 
    //Pusheo los temperamentos sin los espacios y sin repetir, cosa que sean los no repetidos los que queden

    temps.map(async (temp) => {
      await Temperament.findOrCreate({
        where: { 
          name: temp 
        },
      });
    }); 
    //Aca creo cada temperamento en la tabla una vez abra la lista.
  }

module.exports = {
  getTemperament,
};
