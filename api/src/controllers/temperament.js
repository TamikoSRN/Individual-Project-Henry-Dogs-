const { API_KEY } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const getTemperament = async () => {
  var dataTemperament = false;
  if (!dataTemperament) {
    dataTemperament = true;

    let api = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    let dogTemperament = await api.data
      .map((temp) => {
        if (temp.temperament) {
          return temp.temperament;
        }
      })
      .join()
      .split(",");
    // acá se crea un array con todos los temperamentos de los perros de la api

    let temps = []; //declaro un array vacio donde estaran todos los temps

    dogTemperament.map((c) => {
      if (!temps.includes(c.trim()) && c) {
        temps.push(c.trim());
      }
    }); //pusheo los temperamentos sin los espacios y sin repetir

    temps.map(async (c) => {
      await Temperament.findOrCreate({
        where: { name: c },
      });
    }); // aca creo cada temperamento en la tabla

  } else {
    console.log("Ya se encuentra todo cargado en la DB");
  }
};

module.exports = {
  getTemperament,
};
