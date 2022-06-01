// require express
// set express() to a variable
// set a variable of port to 3000
// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
// include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!

const express = require('express');

const app = express()

const pokemon = require('./models/pokemon')

const PORT = 3000;

app.use((req, res, next)=> {
    console.log(`Running middleware function!!!`);
    next() // go to the next middleware or to the response
    })

app.set('view engine', 'ejs')
app.set('views', './views')

// include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
app.get('/', (req, res) => { 
res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('index', {data:pokemon, pageTitle: 'All the Pokemon'});
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show', {data:pokemon, pageTitle: "All the Pokemon", index: req.params.id})
})

app.get('/pokemon/new', (req, res)=> {
    res.render('new-pokemon')
})


// Create a new Pokemon
app.post("/pokemon", (req, res) => {
    req.body.img = 'http://img.pokemondb.net/artwork/wartortle'`${req.body.name}`
    pokemon.push(req.body)
    console.log(req.body)
    res.redirect('/pokemon')
})
app.listen(PORT, ()=>{
    console.log('server is running');
})

