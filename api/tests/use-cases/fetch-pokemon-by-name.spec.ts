import { Pokemon } from '../../src/entities/pokemon';
import { InternalError } from '../../src/errors/http/internal';
import { NotFoundError } from '../../src/errors/http/not-found';
import { HttpGateway } from '../../src/gateways/http';
import { FetchPokemonByNameUseCase } from '../../src/use-cases/fetch-pokemon-by-name';
import pokemonApiResponse from '../fixtures/pokemon-api-response.json';

describe('use case: fetch pokemon by name', () => {
  let sut: FetchPokemonByNameUseCase;
  const httpGatewayMock = { get: jest.fn() } satisfies HttpGateway;

  beforeEach(() => {
    sut = new FetchPokemonByNameUseCase(httpGatewayMock);

    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should call the api correctly', async () => {
      httpGatewayMock.get.mockResolvedValueOnce(pokemonApiResponse);
      await sut.execute({ pokemonName: 'pikachu' });

      expect(httpGatewayMock.get).toHaveBeenCalledTimes(1);
      expect(httpGatewayMock.get).toHaveBeenCalledWith(
        'https://pokeapi.co/api/v2/pokemon/pikachu',
      );
    });

    it('should search a pokemon name in lower case', async () => {
      httpGatewayMock.get.mockResolvedValueOnce(pokemonApiResponse);

      await sut.execute({ pokemonName: 'Pikachu' });

      expect(httpGatewayMock.get).toHaveBeenCalledTimes(1);
      expect(httpGatewayMock.get).toHaveBeenCalledWith(
        'https://pokeapi.co/api/v2/pokemon/pikachu',
      );
    });

    it('should return the pokemon info', async () => {
      httpGatewayMock.get.mockResolvedValueOnce(pokemonApiResponse);

      const result = await sut.execute({ pokemonName: 'pikachu' });

      expect(result.pokemon).toBeInstanceOf(Pokemon);
      expect(result.pokemon.name).toBe('Pikachu');
      expect(result.pokemon.abilities).toStrictEqual([
        'lightning-rod',
        'static',
      ]);
      expect(result.pokemon.types).toStrictEqual(['eletric']);
      expect(result.pokemon.stats).toStrictEqual({
        healthPoints: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90,
      });
      expect(result.pokemon.spriteUrl).toBe(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      );
    });

    it('should throws an not found error when the pokemon is not found', async () => {
      httpGatewayMock.get.mockResolvedValueOnce({
        data: null,
        error: {
          status: 404,
        },
      });

      await expect(() =>
        sut.execute({ pokemonName: 'pikachu' }),
      ).rejects.toThrow(NotFoundError);
    });

    it('should throws an internal error when another error occurs', async () => {
      httpGatewayMock.get.mockResolvedValueOnce({
        data: null,
        error: 'Error',
      });

      await expect(() =>
        sut.execute({ pokemonName: 'pikachu' }),
      ).rejects.toThrow(InternalError);
    });
  });
});
