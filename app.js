const express=require(`express`);
const app=express()
const pokemon = require("./models/pokemon.json");

app.get(`/bugs` ,(req,res)=>{
 
    res.send("99 little bugs in the code <a href='http://localhost:8888/bugs/101'>pull one down,patch it around</a>" )
})
app.get(`/bugs/:numberofbugs` ,(req,res)=>{
    let number=req.params.numberofbugs
 if(number>198){
    res.send( "<a href='http://localhost:8888/bugs'>start over</a")
   
    

 }
 else     res.send(`${number} little bugs in the code <a href='http://localhost:8888/bugs/${+number+2}'>pull one down,patch it around</a>`)

})
app.get(`/:verb/:adjective/:noun` ,(req,res)=>{
    let verb=req.params.verb
    let adjective=req.params.adjective
    let noun=req.params.noun
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun||``}!`)
})


app.get(`/pokemon`,(req,res)=>{
    res.send(pokemon)
})
app.get(`/pokemon/search`,(req,res)=>{
    const {name}=req.query
    
    const findName=pokemon.find(el=>el.name===name)

   
    res.send(findName)
  
   
})
app.get(`/pokemon/:indexOfArray`,(req,res)=>{
    const {indexOfArray}=req.params
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    }
    else{
        res.status(404).send(`sorry, no pokemon found at /pokemon[${indexOfArray}]`)
    }

   
})



module.exports=app

