const axios = require('axios');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const sortAbilities = (a, b) => {
  if (a.name >= b.name) {
    return 1;
  }

  return -1;
}

const getPokemons = (req, res) => {
  const name = req.params.name;
  console.log(`[getPokemons] start request with ${name}...`)
  axios.get(`${baseUrl}/${name}`)
    .then(httpResponse => {
      const abilities = httpResponse.data.abilities.sort(sortAbilities)
      res.send(JSON.stringify(abilities))
    }).catch(err => {
      console.warn('[getPokemons] pokemon not found')
      res.status(404).send()
    })
}

module.exports = {
  getPokemons
}