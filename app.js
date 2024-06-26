const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");



//ROUTES

//create new project


app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project caled ${verb}-${adjective}-${noun}`);
});


//root
app.get("/", (req, res) => {
    res.send("Welcome to 99 Pokemon")
});

//show all pokemon
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
});

// pokemon at name?name="name"

app.get("/pokemon/name", (req, res) => {
    const { name } = req.query;

    const PokemonQuery = pokemon.find((x) => x.name.toLowerCase() === name.toLowerCase())
    if (PokemonQuery) {
        res.send(PokemonQuery);
    } else {
        res.send("no pokemon found ")
    }
});
//pokemon at index of list
app.get("/pokemon/:index" , (req, res) => {
    const {index} = req.params;
console.log(req.params);
    if(pokemon[index -1]) {
        res.send(pokemon[index -1])
    } else {
        res.send(`no pokemon found at ${index}`)
    }
});
    module.exports = app;