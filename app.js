const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to 99 Little Bugs In the Code");
  });

  // EXPORT
module.exports = app;