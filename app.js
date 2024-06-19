const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to 99 Little Bugs In the Code");
  });

// To get "Congratulations on starting a new project called jumping-joyous-jellybean!"
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
}), 

  // EXPORT
module.exports = app;