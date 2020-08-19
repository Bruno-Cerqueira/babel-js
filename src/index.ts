import { Util } from './util';
import { Pokemon } from './pokemon';
import IPokemon from './interfaces/pokemon.interface';

const status = (response) => {
  if (response.status === 200) return Promise.resolve(response);
  if (response.status !== 200) return Promise.reject(response);
};

const json = (response) => response.json();

document.getElementById('searched-click').addEventListener('click', () => {
  const pokeName = (document.getElementById(
    'searched-pokemon'
  ) as HTMLInputElement).value;
  getPokemon(pokeName);
});

const getPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(status)
    .then(json)
    .then((data) => {
      const extractedData = [
        'id',
        'name',
        'base_experience',
        'height',
        'weight',
        'types',
        'sprites'
      ];
      const pokeAttributes = Util.filterObj(data, extractedData);
      const searchedPokemon = new Pokemon(pokeAttributes as IPokemon);

      setPokemon(searchedPokemon);
    })
    .catch(() => {
      alert('Pokemon not found!');
    });
};

const setPokemon = (searchedPokemon) => {
  Object.keys(searchedPokemon).forEach((pokeAttr) => {
    const node = document.getElementById(pokeAttr) as HTMLInputElement;
    if (pokeAttr === 'sprites') {
      const src = searchedPokemon[pokeAttr].front_default;
      node.src = src;
    } else if (pokeAttr === 'types') {
      const types = [];
      searchedPokemon[pokeAttr].forEach((type) => {
        types.push(type.type.name);
      });
      node.textContent = types.join(', ');
    } else {
      node.textContent = searchedPokemon[pokeAttr];
    }
  });
};
