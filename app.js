const express = require('express')

const pokemons = require('./controllers/pokemons')

const host = 'localhost'
const port = 3000

const app = express()

app.set('port', port)
app.set('host', host)

app.get('/pokemons/:name', pokemons.getPokemons)

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
