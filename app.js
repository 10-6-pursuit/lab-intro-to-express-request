const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome")
})

// new project name generator
// app.get('/:verb/:adjective/:noun', (req, res) => {
//   const { verb, adjective, noun} = req.params
//   res.send(`Congratulations on starting a new project ${verb}-${adjective}-${noun}`)
// })

// 99 little bugs

app.get('/bugs', (req, res) => {
  res.send(`99 little bugs in the code<br>
    99 little bugs<br>
    <a href="/bugs/${+101}">pull one down, patch it around</a>`)
})

app.get('/bugs/:numBugs', (req, res) => {
  const numBugs = +req.params.numBugs
  const pull = `${numBugs} little bugs in the code<br>
    ${numBugs} little bugs<br>
    <a href="/bugs/${numBugs + 2}">pull one down, patch it around</a>`
  const tooMany = `${numBugs} little bugs in the code<br>
    ${numBugs} little bugs<br>
    <a href="/bugs">To many little bugs!! Start over.</a>`
  res.send(`${numBugs > 200 ? tooMany : pull}`)
})
module.exports = app