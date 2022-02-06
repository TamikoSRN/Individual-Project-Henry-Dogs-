require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllBreeds } = require("../controllers/dogs");
const { getTemperament } = require("../controllers/temperament");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get("/dogs", async (req, res) => {
  const {name} = req.query;
  let totalBreeds = await getAllBreeds();

  if (name) {
    let dogBreed = await totalBreeds.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    dogBreed.length
      ? res.status(200).send(dogBreed)
      : res.status(404).send("404 Breed Not Found :("); 
  } else {
    res.status(200).send(totalBreeds);
  }
});


router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
      const allBreeds = await getAllBreeds();
      let dogId = await allBreeds.filter((e) => e.id == id);
      dogId.length
        ? res.status(200).send(dogId)
        : res.status(404).send("Doggo Not Found");
  }
});


router.get("/temperament", async (req, res) => {

  try {
    const dogTemperaments = await getTemperament();
    console.log(dogTemperaments);

    const allTemperaments = await Temperament.findAll();
    const filteredTemperaments = await allTemperaments.map((e) => e.name);

    res.status(200).send(filteredTemperaments);
  } catch (err) {
    console.log(err);
  }
});


router.post("/dog", async (req, res) => {

  let {
    name, 
    height, 
    weight, 
    lifeSpan, 
    image, 
    createdAtDb, 
    temperament
  } = req.body

  let dogCreated = await Dog.create({
    name,
    height,
    weight,
    lifeSpan,
    image,
    createdAtDb
  })

  let temperamentDb = await Temperament.findAll({
    where: { name : temperament }
  })
  dogCreated.addTemperament(temperamentDb)
  res.status(200).send("Perrito creado :D")

//   let { dog, temperament } = req.body;

//   let dogCreated = await Dog.create(dog);

//   let temperamentDb = await Temperament.findAll({
//     where:{ 
//       name: temperament
//     }
//   });
//   console.log(temperamentDb)
//   dogCreated.addTemperament(temperamentDb);
//   res.status(200).send("Perrito creado :D");
});

module.exports = router;
