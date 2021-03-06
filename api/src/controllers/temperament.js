const { API_KEY } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const getTemperament = async () => {
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

  let temps = [];

  dogTemperament.map((c) => {
    if (!temps.includes(c.trim()) && c) {
      temps.push(c.trim());
    }
  });

  temps.map(async (c) => {
    await Temperament.findOrCreate({
      where: { name: c },
    });
  });
};

module.exports = {
  getTemperament,
};
