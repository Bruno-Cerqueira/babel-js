import IPokemon from './interfaces/pokemon.interface';

export class Pokemon {
  constructor(args: IPokemon) {
    Object.assign(this, args);
  }
}
