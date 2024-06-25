const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.json');

app.get('/', (req, res) => {
  res.send('Welcome 99 Pokemon');
});

app.get('/bugs', (req, res) => {
  res.send('<h1>99 little bugs in the code</h1><a href="/bugs/101">Pull one down, patch it around</a>');
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs >= 200) {
    res.send('Too many bugs!! Start over! <a href="/bugs">Start Over</a>');
  } else {
    res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">Pull one down, patch it around</a>`);
  }
});

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.get('/pokemon/search', (req, res) => {
  const name = req.query.name.toLowerCase();
  const foundPokemon = pokemon.filter(p => p.name.toLowerCase() === name);
  res.json(foundPokemon);
});

app.get('/pokemon/:indexOfArray', (req, res) => {
  const index = parseInt(req.params.indexOfArray);
  if (index >= 0 && index < pokemon.length) {
    res.json(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

module.exports = app;
