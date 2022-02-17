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
    // Mapeo todos los temperamentos de los perros de la api a un nuevo array, y convierto el array a strings.

    let temps = []; 

    dogTemperament.map((temp) => {
      if (!temps.includes(temp.trim()) && temp) {
        temps.push(temp.trim());
      }
    }); 

    temps.map(async (temp) => {
      await Temperament.findOrCreate({
        where: { 
          name: temp
        },
      });
    }); 
  }

module.exports = {
  getTemperament,
};
