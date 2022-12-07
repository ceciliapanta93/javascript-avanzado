class Pokemon {
  async getList() {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1/', {
      method: 'GET'
    });
    const data = await response.json();
    return data;
  }

  async getDetail(namePokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`, {
      method: 'GET'
    });
    const data = await response.json();
    return data;
  }
}



const selectPokemon = document.querySelector('.js-select-pokemon')
const detailPokemon = document.querySelector('.js-pokemon-detail')

const optionDefault = '<option value="" >Elige un pokemon</option>'
const optionList = ''
const optionPokemon = (pokemon) => `
  <option data="${pokemon.url}" >${pokemon.name}</option>
`

const handleChange = (e) => {
  const element = e.currentTarget
  console.log(element, 'element')
  detailPokemon.innerHTML = ''
  if (element.value) {
    pokemon.getDetail(element.value).then((pokemon) => {
      console.log(pokemon)
      const formatPokemon = {
        name: element.value,
        imgSrc: pokemon.sprites.other['official-artwork']['front_default']
      }
      detailPokemon.innerHTML = templateDetail(formatPokemon)
    })
  }
}

const templateDetail = (pokemon) => `
  <h1 style="font-size:20px; font-family: sans-serif;position: absolute; margin: 0; text-align:center; width: 100%;">${pokemon.name}</h1><br>
  <img style="width: 110px;" src="${pokemon.imgSrc}" alt="${pokemon.imgSrc}">
`

selectPokemon.addEventListener('change', handleChange, false);

const pokemon = new Pokemon();

pokemon.getList().then((data) => {
  const pokemonList = data.pokemon_species;
  let options = ''
  pokemonList.forEach((pokemon) => {
    options = options + optionPokemon(pokemon)
  })
  const content = `${optionDefault}${options}`
  selectPokemon.innerHTML = content;
})
