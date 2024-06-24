const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
});

app.get("/bugs", (req, res) => {
    res.send("99 little bugs in the code <a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>");
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params;
    if(+numberOfBugs >= 200){
        res.send(`${numberOfBugs} little bugs in the code <a href='http://localhost:8888/bugs/'>start over</a>`);
    } else {
        res.send(`${numberOfBugs} little bugs in the code <a href='http://localhost:8888/bugs/${+numberOfBugs + 2}'>pull one down, patch it around</a>`);
    };
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon.map(poke => poke.name));
});

function findPokeByName (name){
    return pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase());
};

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;

    if(findPokeByName(name) === undefined){
        res.status(404).send("404 Pokemon Not Found ");
    } else {
        res.send(findPokeByName(name));
    };
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const {indexOfArray} = req.params;
    if(+indexOfArray > pokemon.length || +indexOfArray < 0 || isNaN(+indexOfArray)){
        res.send(`sorry, no pokemon found at /pokemon/${indexOfArray}`);
    } else { 
        res.send(pokemon[+indexOfArray]);
    }
});




module.exports = app;