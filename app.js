const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

// Bugs route
app.get('/bugs', (req, res) => {
  res.send('<h1>99 little bugs in the code</h1><a href="/bugs/101">Pull one down, patch it around</a>');
});

// Bugs with number route
app.get('/bugs/:numberOfBugs', (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs >= 200) {
    res.send('Too many bugs!! Start over! <a href="/bugs">Start Over</a>');
  } else {
    res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">Pull one down, patch it around</a>`);
  }
});

// List all pokemon
app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

// Search pokemon by name
app.get('/pokemon/search', (req, res) => {
  const name = req.query.name.toLowerCase();
  const foundPokemon = pokemon.filter(p => p.name.toLowerCase() === name);
  res.json(foundPokemon);
});

// Get pokemon by index
app.get('/pokemon/:indexOfArray', (req, res) => {
  const index = parseInt(req.params.indexOfArray);
  if (index >= 0 && index < pokemon.length) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

// New project route
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app;
