const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const db = require("../db");
const { getAllBreeds  } = require("../controllers/dogs")

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


router.get('/dogs/:id', async(req, res) => {  
  const {id} = req.params
  if(id){
          const totalBreeds = await getAllBreeds()
          let dogId = await totalBreeds.filter(e => e.id == id)
          console.log(dogId)
          dogId.length ? res.status(200).send(dogId) : res.status(404).send("404 Breed Not Found :(")
  }
})


router.get("/temperament", async (req, res) => {
  dogsApi = await getAllBreeds(); 
  const dogsDb = dogsApi
  .map((el) => el.temperament)
  .join()
  .split(",");
  const dogsDbTrim = dogsDb.map((el) => el.trim());


  dogsDbTrim.forEach((el) => {
    if (el !== "") {
      Temperament.findOrCreate({ 
        where: {
          temperament: el,
        },
      });  
    } 
  });
  const allTemperaments = await Temperament.findAll()
  res.send(allTemperaments)
  
});


router.post("/dog", async (req, res) => {
  let {
    dog,
    temperament,
  } = req.body

  let dogCreated = await Dog.create(
    dog
  )

  let temperamentDb = await Temperament.findAll({ where: { temperament : temperament } })
  dogCreated.addTemperament(temperamentDb)
  
  res.status(200).send("Perrito creado :D")
})

module.exports = router;