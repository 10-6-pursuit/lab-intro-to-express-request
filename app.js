const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send(`Welcome to 99 Little Bugs In the Code & Poke-Express`);
  });


app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code <a href="/bugs/101/">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if ( Number(numberOfBugs) > 200 ) {
        res.send(`${Number(numberOfBugs)} little bugs in the code <a href="/bugs">too many bugs, have to star over!</a>`)
    } else {
        res.send(`${Number(numberOfBugs)} little bugs in the code <a href="/bugs/${Number(numberOfBugs) + 2}/">pull one down, patch it around</a>`)
    }
})
// // To get "Congratulations on starting a new project called jumping-joyous-jellybean!"
// app.get("/:verb/:adjective/:noun", (req, res) => {
//     const { verb, adjective, noun } = req.params
//     res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
// }), 



  // EXPORT
module.exports = app;