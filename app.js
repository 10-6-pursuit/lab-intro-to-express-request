const express = require("express");
const pokemonsController = require("./controllers/pokemonsController");



const app = express();

//ROUTES
app.get("/",(req,res)=>{
    res.send("Welcome 99 Pokemon")
})
app.get("/:verb/:adjective/:noun", (req,res)=>{
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs",(req, res) => {
    res.send(`99 little bugs in the code 99 little bugs <a href="http://localhost:8888/bugs/101" >Pull one down, patch it around</a> 101 bugs in the code`)
})

app.get("/bugs/:numberOfBugs",(req, res) => {
    const { numberOfBugs } = req.params
    if(+numberOfBugs >= 200) {
        res.send("Too many bugs!! Start over!")
    }
    res.send(`${numberOfBugs} little bugs in the code ${numberOfBugs} little bugs <a href = http://localhost:8888/bugs/${+numberOfBugs + 2}>Pull one down, patch it around</a> ${+numberOfBugs + 2} bugs in the code`)
})

app.use("/pokemon", pokemonsController);



module.exports = app;