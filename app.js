const express = require("express");
//Use Pokemon JSON
const pokemon = require("./models/pokemon.json");

const app = express();

//Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});


//99 Little Bugs In the Code
app.get("/jumping/joyous/jellybean", (req, res) => {
  res.send("Congratulations on starting a new project called jumping-joyous-jellybean!");
});

app.get("/bugs", (req, res) => {
  res.status(200).send(`
    <a>99 little bugs in the code</a><br>
    <a href="/bugs/101">pull one down, patch it around</a>
  `)
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const bugs = Number(numberOfBugs);
  const plusTwo = bugs + 2;

  if(bugs < 200) {
    res.status(200).send(`
      <a>${bugs} little bugs in the code</a><br>
      <a href="/bugs/${plusTwo}">pull one down, patch it around</a>
    `);
  } else {
    res.status(200).send(`
    <a href="/bugs">Start Over</a>
    `)
  }
});


//Poke-Express

//All Pokemon
app.get("/pokemon", (req, res) => {
  res.status(200).send(pokemon);
})

// All Pokemon Prettier
app.get("/pokemon-pretty", (req, res) => {
  if(pokemon) {
    let links = "";
    for(let i = 0; i < pokemon.length; i++) {
      links += `<a href="/pokemon-pretty/${i}">${pokemon[i].name}: ${i}</a><br>`
    }
    res.status(200).send(links);
  }
})

//Specific Pokemon Prettier by Index
app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  const chosenPokemon = pokemon[indexOfArray]

  if(chosenPokemon) {

    res.status(200).send(`
      <a>${chosenPokemon.name}</a><br>
      <img src="${chosenPokemon.img}" alt="${chosenPokemon.name} image"><br>
      <a>Type:</a><br>
      <a>${chosenPokemon.type}</a><br>
    `)
  } else {
    res.status(404).send(`sorry, no pokemon found at /pokemon/${indexOfArray}`);
  }
})

//Search by Name
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const pokeName = pokemon.find((poke) => poke.name.toLowerCase() === name.toLowerCase());

  if(pokeName) {
    res.status(200).send(pokeName);
  } else {
    res.status(404).send(`Pokemon with name: "${name}" cannot be found`)
  }
});

//Single Pokemon by Index
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  const chosenPokemon = pokemon[indexOfArray]

  if(chosenPokemon) {
    res.status(200).send(chosenPokemon)
  } else {
    res.status(404).send(`sorry, no pokemon found at /pokemon/${indexOfArray}`);
  }
});

module.exports = app;