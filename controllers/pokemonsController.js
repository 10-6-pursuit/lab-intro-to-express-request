const express = require("express");
const pokemons =  express.Router();
const pokemonArray = require("../models/pokemon.json");

pokemons.get("/",(req,res) =>{
    res.send(pokemonArray)
})

pokemons.get("/search", (req,res) =>{
    const { name } = (req.query)
    const pokemon = pokemonArray.find(ele => ele.name === name)
    res.send(pokemon)
})

pokemons.get("/:indexofArray", (req,res) =>{
    const { indexofArray } = req.params;
    if (pokemonArray[indexofArray]) {
        res.status(200).send(pokemonArray[indexofArray])
      } else {
        res.status(404).json({error: `Pokemon with index ${indexofArray} not found!`})
      }
});


module.exports = pokemons;