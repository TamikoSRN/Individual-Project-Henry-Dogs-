const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const db = require("../db");
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
  const name = req.query.name;
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
  const id = req.params.id
  if(id){
          const totalDogs = await getAllBreeds()
          let dogId = await totalDogs.filter(e => e.id == id)
          console.log(dogId)
          dogId.length ? res.status(200).send(dogId) : res.status(404).send("Perro no encontrado")
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
        




        
        // A TRABAJAR. ESTO ES LO DE TEMPERAMENTS QUE ES TODO UNA STRING DE MIERDA
        
        // router.get("/temperaments", async (req, res) => {
        //     const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        //     const temperaments = temperamentsApi.data.map( el => el.temperament)
        //     const tempEach = temperaments.map(el => {
        //         for (let i = 0; i < el.length; i++) return el[i]})
        //         console.log(tempEach)
        //     tempEach.forEach(el => {
        //         Temperament.findOrCreate({
        //             where: { temperament: el }
        //         })
        //     })
        
        //     const allTemperaments = await Temperament.findAll()
        //     res.send(allTemperaments)
        // })
        
        // router.get("/temperaments", async (req, res) => {
        //     const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        //     const temperaments = temperamentsApi.data.join.split(',').sort( el => el.temperament )
        //     const temperamentsEach = temperaments.sort(el => el)
        //     console.log(temperamentsEach)
        //     temperamentsEach.sort( el => {
        //         if(el !== '') {
        //         Temperament.findOrCreate({
        //         where: { name: el }
        //      })
        //    }
        // })
        //     const allTemperaments = await Temperament.findAll()
        //     res.send(allTemperaments)
        // })
        
        // AYUDA DE STACK OVERFLOW
        
        // router.get("/temperaments", async (req, res) => {
        //   let result = []
        //   const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        //   const temperaments = temperamentsApi.data.forEach( el => el.temperament)
        //   const tempEach = temperaments.forEach(datum=>{
        //     result.push(datum.temperaments);
        // });
        // console.log(result);
        //   tempEach.forEach(el => {
        //       Temperament.findOrCreate({
        //           where: { temperament: el }
        //       })
        //   })
        
        //   const allTemperaments = await Temperament.findAll()
        //   res.send(allTemperaments)
        // })
        
        //AYUDA v2