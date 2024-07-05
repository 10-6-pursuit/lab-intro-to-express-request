const express = require("express");

const app = express();

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

module.exports = app