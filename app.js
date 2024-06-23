const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome")
})

// new project name generator
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun} = req.params
  res.send(`Congratulations on starting a new project ${verb}-${adjective}-${noun}`)
})
module.exports = app