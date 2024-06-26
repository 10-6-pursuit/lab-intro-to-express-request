const express = require('express');

const app = express();

const pokemonJSON = require('./models/pokemon.json');
// console.log(pokemonJSON[0]);

app.get('/:verb/:adj/:noun', (req, res) => {
  const { verb, adj, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adj}-${noun}!`
  );
});

app.get('/bugs', (req, res) => {
  res.send(`
        <p>99 little bugs in the code</p>
        <p><a href="/bugs/101">pull one down, patch it around</a></p>
        `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;

  res.send(`
    <p>${numberOfBugs} little bugs in the code</p>
    ${
      numberOfBugs <= 200
        ? `<p><a href="/bugs/${
            parseInt(numberOfBugs) + 2
          }">pull one down, patch it around</a></p>`
        : `<p><a href="/bugs">start over</a></p>`
    }
  `);
});

app.get('/pokemon', (req, res) => {
  res.send(pokemonJSON);
});

app.get('/pokemon/search', (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  const pokemon = pokemonJSON.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );
  res.send(pokemon);
});

app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;
  if (pokemonJSON[index - 1]) {
    res.send(pokemonJSON[index - 1]);
  } else {
    res.send(`Sorry, no pokemon found at pokemon/${index}`);
  }
});

module.exports = app;
