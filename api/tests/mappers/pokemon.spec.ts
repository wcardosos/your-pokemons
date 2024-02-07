import { Pokemon, PokemonProps } from '../../src/entities/pokemon';
import { PokemonMapper } from '../../src/mappers/pokemon';

describe('mapper: pokemon', () => {
  const pokemonPropsMock: PokemonProps = {
    name: 'pokemon',
    abilities: ['ability 1', 'ability 2'],
    spriteUrl: 'url',
    stats: {
      healthPoints: 1,
      attack: 1,
      defense: 1,
      specialAttack: 1,
      specialDefense: 1,
      speed: 1,
    },
    types: ['type 1', 'type 2'],
  };

  describe('toObject', () => {
    it('should return an object from an entity', () => {
      const pokemon = new Pokemon(pokemonPropsMock);

      const result = PokemonMapper.toObject(pokemon);

      expect(result).toStrictEqual(pokemonPropsMock);
    });
  });

  describe('toEntity', () => {
    it('should return an entity from an object', () => {
      const result = PokemonMapper.toEntity(pokemonPropsMock);

      expect(result).toBeInstanceOf(Pokemon);
      expect(result.name).toStrictEqual(pokemonPropsMock.name);
      expect(result.abilities).toStrictEqual(pokemonPropsMock.abilities);
      expect(result.spriteUrl).toStrictEqual(pokemonPropsMock.spriteUrl);
      expect(result.stats).toStrictEqual(pokemonPropsMock.stats);
      expect(result.types).toStrictEqual(pokemonPropsMock.types);
    });
  });
});
