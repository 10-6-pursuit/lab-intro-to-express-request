// DEPENDENCIES
const express = require('express');


// CONFIGURATION
const app = express();
const PORT = 8888


// ROUTES
app.get('/:verb/:adjective/:noun', (request, response) => {
    response.send(`Congratulations on starting a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}!`);
})


//BUGS
app.get('/bugs', (request, response) => {
    response.send(`99 little bugs in the code 

        <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get('/bugs/:numberOfBugs', (request, response) => {
    const bugsParam = request.params.numberOfBugs;
    let outputStr;
    if (bugsParam <= 199)
        outputStr = `${bugsParam} little bugs in the code
        <a href="/bugs/${Number(bugsParam) + 2}">pull one down, patch it around</a>`;
    else if (bugsParam >= 200)
        outputStr = `<a href="/bugs">Too many bugs!! Start over!</a>`;

    response.send(outputStr);
});

//POKEMON
const pokemon = require("./pokemon.json");
const pokemonObj = pokemon.results;
//console.log(pokemonObj);

app.get('/pokemon', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(pokemon);
});


app.get('/pokemon/search', (request, response) => {
    var searchPokemon = request.query.name;
    var resultPokemon = {};
    for (var i = 0; i < pokemonObj.length; i++) {
        if (searchPokemon == pokemonObj[i].name)
            break;
    }
    if (i < pokemonObj.length) {
        resultPokemon = pokemonObj[i];
    }
    response.setHeader('Content-Type', 'application/json');
    response.send(resultPokemon);
});

app.get('/pokemon/:indexOfArray', (request, response) => {
    var indexRequest = request.params.indexOfArray;
    var responseData;
    if (indexRequest <= pokemonObj.length){
        response.setHeader('Content-Type', 'application/json');
        responseData = pokemonObj[indexRequest];
    }
    else
        responseData = `sorry, no pokemon found at /pokemon[${indexRequest}]`;
    
    response.send(responseData);
});



// LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// EXPORT
module.exports = app
