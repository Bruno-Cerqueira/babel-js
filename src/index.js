import { Util } from './util.js';
import { Pokemon } from './pokemon.js';


const status = response => {
  if(response.status === 200) return Promise.resolve(response);
  if(response.status !== 200) return Promise.reject(new Error(response.statusText));
}

const json = response => response.json();

fetch('https://pokeapi.co/api/v2/pokemon/1')
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