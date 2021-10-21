// Dependencies
// =============================================================
var express = require('express')
var path = require('path')

// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Mesas
// =============================================================
var mesasDisponibles = []
var listaEspera = []

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'))
})

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'))
})

// Displays all reserved tables
app.get('/api/tables', function (req, res) {
  return res.json(mesasDisponibles)
})

app.get('/api/waitlist', function (req, res) {
  return res.json(listaEspera)
})

/*
// Displays a single character, or returns false
app.get('/api/characters/:character', function (req, res) {
  var chosen = req.params.character

  console.log(chosen)

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i])
    }
  }

  return res.json(false)
})*/

// Hacer una nueva reservacion - takes in JSON input
app.post('/api/tables', function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body

  console.log(newTable)
  if (mesasDisponibles.length >= 5) {
    listaEspera.push(newTable)
    console.log('Agregado a lista de espera')
    res.json(false)
  } else {
    mesasDisponibles.push(newTable)
    console.log('Reservacion agregada')
    res.json(true)
  }
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
