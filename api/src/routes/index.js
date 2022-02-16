require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllBreeds } = require("../controllers/dogs");

const router = Router();


// router.get("/dogs", async (req, res) => {
//   let totalBreeds = await getAllBreeds();
//     res.status(200).send(totalBreeds);
// })


router.get("/dogs", async (req, res) => {
  let totalBreeds = await getAllBreeds();
  // query = pido a gusto
  const {name} = req.query;
  if (name) {
    let dogBreed = await totalBreeds.filter((obj) => obj.name.toLowerCase().includes(name.toLowerCase()));
    dogBreed.length ? res.status(200).send(dogBreed) : res.status(404).send("404 Breed Not Found :("); 
  } else {
    res.status(200).send(totalBreeds);
  }
});


router.get("/dogs/:id", async (req, res) => {
  const allBreeds = await getAllBreeds();

  const { id } = req.params;
  if (id) {
      let dogId = await allBreeds.filter((obj) => obj.id == id);
      dogId.length
        ? res.status(200).send(dogId)
        : res.status(404).send("Doggo Not Found");
  }
});


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
});


router.get("/dogs/height/:height", async (req, res) => {
  let {height} = req.params
    const dogsHeight = await getAllBreeds()

  let getHeight = await dogsHeight.filter((el) => el.height == height)
  getHeight.length ? res.status(200).send(getHeight) : res.status(404).send("Height not found :(")
})


module.exports = router;
