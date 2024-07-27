const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");



//ROUTES


//99bugs

app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code`)
})

//99 bugs index 


app.get("/bugs/:numberOfBugs", (req, res)=> {
    const numberOfBugs = parseInt(req.params.numberOfBugs);
    if (numberOfBugs > 199) {
        res.send("Too many bugs!! Start over!")
    } else {
        res.send(`${numberOfBugs} little bugs in the code <a href ="/bugs/${numberOfBugs + 2}">Pull one down, patch it around</a>`);
    }
})
//create new project



app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});


//root
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
});

//show all pokemon
app.get("/pokemon", (req, res) => {
    if (pokemon) {
        res.send(pokemon)
    } else {
        res.send([])
    }
});

// pokemon at name?name="name"

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    let emptyArr = [];
    const PokemonQuery = pokemon.find((x) => x.name.toLowerCase() === name.toLowerCase())
    if (PokemonQuery) {
        res.send([PokemonQuery]);
    } else {
        res.send(emptyArr)
    }
});
//pokemon at index of list
app.get("/pokemon/:index" , (req, res) => {
    const {index} = req.params;
    console.log(req.params);
    if(pokemon[index]) {
        res.send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
});
    module.exports = app;