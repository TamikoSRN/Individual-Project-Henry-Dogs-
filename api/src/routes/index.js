require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllBreeds } = require("../controllers/dogs");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.get("/dogs", async (req, res) => {
//   let totalBreeds = await getAllBreeds();
//     res.status(200).send(totalBreeds);
// })


router.get("/dogs", async (req, res) => {
  let totalBreeds = await getAllBreeds();
  
  const {name} = req.query;
  if (name) {
    let dogBreed = await totalBreeds.filter((obj) => obj.name.toLowerCase().includes(name.toLowerCase()));
    dogBreed.length ? res.status(200).send(dogBreed) : res.status(404).send("404 Breed Not Found :("); 
  } else {
    res.status(200).send(totalBreeds);
  }
});


router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
      const allBreeds = await getAllBreeds();
      let dogId = await allBreeds.filter((obj) => obj.id == id);
      dogId.length
        ? res.status(200).send(dogId)
        : res.status(404).send("Doggo Not Found");
  }
});


// router.get("/dogs/:id", async (req, res) => {
//   const { id } = req.params
//   if (id) {
//     let dogId = await Dog.findByPk(id)
//     ? res.status(200).send(dogId)
//     : res.status(404).send("Doggo not Found")
//   }
// })
// no puedo hacer esto porque estoy buscando en el modelo Dog una id que no coincide a ninguna otra
// ya que a la db solo voy a estar cargando perros con una UUID. findByPk se fija en el modelo, y no va a encontrar nada
// que no sea una uuid

router.get("/temperament", async (req, res) => {
  
    const allTemperaments = await Temperament.findAll();
    const filteredTemperaments = await allTemperaments.map((obj) => obj.name);

    res.status(200).send(filteredTemperaments);
});


router.post("/dog", async (req, res) => {

  let {
    name, 
    minimHeight, 
    maximHeight,
    minimWeight,
    maximWeight,
    lifeSpan, 
    image, 
    createdAtDb, 
    temperament
  } = req.body

let height = minimHeight + " - " + maximHeight
let weight = minimWeight + " - " + maximWeight

  let dogCreated = await Dog.create({
    name,
    height,
    weight,
    lifeSpan,
    image,
    createdAtDb
  })

  let temperamentDb = await Temperament.findAll({

    where: { 
      name : temperament
    }
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
//   dogCreated.addTemperament(temperamentDb);
//   res.status(200).send("Perrito creado :D");
});

module.exports = router;
