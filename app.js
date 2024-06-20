const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send(`Welcome 99 Pokemon`);
  });

// Route to show all pokemon
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

// Route to show all pokemon as link to the array position of pokemon
app.get("/pokemon-pretty", (req, res) => {
    const pokemonNameArray = pokemon.map((eachPokemon) => Object.entries(eachPokemon).slice(0,1)[0][1])
    const pokemonList = pokemonNameArray.map((eachPokemonName, index) => `<li><a href="/pokemon/${Number(index)}/">${eachPokemonName}</a></li>`).join("")
    res.send(pokemonList)
})

// Route to return 1 pokemon matching query parameter
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const targetPokemon = pokemon.find((eachPokemon) => eachPokemon.name.toUpperCase() === name.toUpperCase())
    if (!targetPokemon) {
    const emptyArray = []
        res.send(emptyArray)
    } else {
        res.send([targetPokemon])
    }
})

// Route to return 1 pokemon at that array position
app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if (!pokemon[Number(indexOfArray)]) {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        const selectedPokemon = pokemon[Number(indexOfArray)]
        res.send(selectedPokemon)
        // res.send(`<div><h1>${selectedPokemon.name}</h1><br><img src=${selectedPokemon.img} alt=${selectedPokemon.name}><br><a href="/pokemon-pretty/">Go Back to Pokemon List</a></div>`)
    }
})


app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code <a href="/bugs/101/">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if ( Number(numberOfBugs) > 199 ) {
        // res.send(`${Number(numberOfBugs)} little bugs in the code <a href="/bugs">too many bugs, have to star over!</a>`)
        res.send("Too many bugs!! Start over!")
    } else {
        res.send(`${Number(numberOfBugs)} little bugs in the code <a href="/bugs/${Number(numberOfBugs) + 2}/">Pull one down, patch it around</a>`)
    }
})


// To get "Congratulations on starting a new project called jumping-joyous-jellybean!"
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
}), 



  // EXPORT
module.exports = app;