const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

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
      temperament: el.temperament,
      image: el.image.url,
    };
  });

  return breedsInfo; // que tipo de dato retorno? es una promesa, voy a usarla despues para hacer el promise.all, no seas cabeza de pija de olvidarte
};

const getDbInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["temperament"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllBreeds = async () => {
  const breedsInformation = await getBreedsInfo();
  const dbInformation = await getDbInfo();
  const dogTotalInformation = breedsInformation.concat(dbInformation);
  return dogTotalInformation;
};

router.get("/dogs", async (req, res) => {
    const name = req.query.name
    let totalBreeds = await getAllBreeds()
    if(name){
        let dogBreed = await totalBreeds.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        dogBreed.length ? res.status(200).send(dogBreed) : res.status(404).send("404 Breed Not Found :(")
    } else {
        res.status(200).send(totalBreeds)
    }
})

module.exports = router;
