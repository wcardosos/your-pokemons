import { Pokemon, PokemonProps } from '../entities/pokemon';

export class PokemonMapper {
  static toObject(pokemon: Pokemon): PokemonProps {
    return {
      name: pokemon.name,
      abilities: pokemon.abilities,
      spriteUrl: pokemon.spriteUrl,
      stats: pokemon.stats,
      types: pokemon.types,
    };
  }

  static toEntity(props: PokemonProps): Pokemon {
    return new Pokemon(props);
  }
}
