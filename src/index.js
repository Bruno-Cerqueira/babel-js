import { Util } from './util.js';
import { Pokemon } from './pokemon.js';


const status = response => {
  if(response.status === 200) return Promise.resolve(response);
  if(response.status !== 200) return Promise.reject(response);
}

const json = response => response.json();


document.getElementById("searched-click").addEventListener("click", () => {
  const pokeName = document.getElementById("searched-pokemon").value;
  getPokemon(pokeName);
})

const getPokemon = name => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(status)
    .then(json)
    .then(data => {
      const extractedData = [
        "id",
        "name",
        "base_experience",
        "height",
        "weight",
        "types"
       ]
      const pokeAttributes = Util.filterObj(data, extractedData);
      console.log(new Pokemon(pokeAttributes))
    })
    .catch(_ => {
      alert("Pokemon not found!")
    })
}