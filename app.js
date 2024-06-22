const pokemon = require("./models/pokemon.json");
const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.send("Index route")
})


app.get("/pokemon", (req, res) => {
  res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query
  const poke = pokemon.find(poke => poke.name === name);


  if (poke) {
    res.json(poke)
    
  } else {
    res.status(400).json({msg:`Poke with name ${poke}, not found`})
  }
})

app.get("/pokemon/:idx", (req, res) => {
  const { idx } = req.params
  const foundPoke = pokemon[idx]

  if (foundPoke) {
    res.json(foundPoke)
    
  } else {
    res.status(400).json({msg:`Poke with index ${idx}, not found`})
  }
})

module.exports = app