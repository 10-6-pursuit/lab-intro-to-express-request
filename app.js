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

// 99 little bugs

app.get('/bugs', (req, res) => {
  res.send(`99 little bugs in the code<br>
    <a href="/bugs/101">pull one down, patch it around</a>`)
})
module.exports = app