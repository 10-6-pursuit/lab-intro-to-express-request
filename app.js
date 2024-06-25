const express = require("express");
const pokemon = require("./pokemon.json");

const app = express();

// Routes

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Multi-Project Express App!");
});

// Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// Bugs Counter
app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs >= 200) {
    res.send(`${numberOfBugs} bugs in the code <a href="/bugs">start over</a>`);
  } else {
    res.send(
      `${numberOfBugs} bugs in the code <a href="/bugs/${
        numberOfBugs + 2
      }">pull one down, patch it around</a>`
    );
  }
});

// Pokemon API
app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const index = req.params.indexOfArray;
  if (pokemon[index]) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at /pokemon/${index}`);
  }
});

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name.toLowerCase();
  const foundPokemon = pokemon.find((p) => p.name.toLowerCase() === name);
  if (foundPokemon) {
    res.json(foundPokemon);
  } else {
    res.send(`Sorry, no pokemon found with the name ${req.query.name}`);
  }
});

app.get("/pokemon-pretty", (req, res) => {
  const pokemonList = pokemon
    .map(
      (p, index) => `<li><a href="/pokemon-pretty/${index}">${p.name}</a></li>`
    )
    .join("");
  res.send(`<ul>${pokemonList}</ul>`);
});

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const index = req.params.indexOfArray;
  if (pokemon[index]) {
    const p = pokemon[index];
    res.send(`
      <h1>${p.name}</h1>
      <img src="${p.img}" alt="${p.name}" />
      <p>Type: ${p.type.join(", ")}</p>
      <p>HP: ${p.stats.hp}</p>
      <!-- Add more stats as needed -->
    `);
  } else {
    res.send(`Sorry, no pokemon found at /pokemon-pretty/${index}`);
  }
});

module.exports = app;
