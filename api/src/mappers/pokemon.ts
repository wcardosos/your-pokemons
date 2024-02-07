import { Pokemon } from '../entities/pokemon';

export class PokemonMapper {
  static toObject(pokemon: Pokemon) {
    return {
      name: pokemon.name,
      abilities: pokemon.abilities,
      spriteUrl: pokemon.spriteUrl,
      stats: pokemon.stats,
      types: pokemon.types,
    };
  }
}
