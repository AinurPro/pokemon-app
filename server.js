// require express
// set express() to a variable
// set a variable of port to 3000
// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
// include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!

const express = require('express');

const app = express()

const pokemon = require('./models/pokemon')

const PORT = 3000;

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

app.listen(PORT, ()=>{
    console.log('server is running');
})

