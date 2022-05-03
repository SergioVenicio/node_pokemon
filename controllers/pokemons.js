const axios = require('axios');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const sortAbilities = (a, b) => {
  if (a.name >= b.name) {
    return 1;
  }

  return -1;
}

const getPokemons = async (req, res) => {
  const name = req.params.name;
  console.log(`[getPokemons] start request with ${name}...`)

  try {
    const httpData = await axios.get(`${baseUrl}/${name}`)
    const abilities = httpData.data.abilities.sort(sortAbilities)
    res.send(JSON.stringify(abilities))
  } catch {
    console.warn('[getPokemons] pokemon not found')
    res.status(404).send()
  }

  console.log(`[getPokemons] done`)
}

module.exports = {
  getPokemons
}