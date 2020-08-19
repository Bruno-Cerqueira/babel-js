import IPokeType from './poketype.interface';

export default interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: IPokeType[];
  sprites: { front_default: string };
}
