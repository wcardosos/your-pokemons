import { Pokemon, Stats } from '../entities/pokemon';
import { HttpGateway } from '../gateways/http';

interface FetchPokemonByNameUseCaseRequest {
  pokemonName: string;
}

interface FetchPokemonByNameUseCaseResponse {
  pokemon: Pokemon;
}

type AbilitiesResponse = Array<{ ability: { name: string } }>;
type StatsResponse = Array<{ base_stat: number; stat: { name: string } }>;
type TypesReponse = Array<{ type: { name: string } }>;

export class FetchPokemonByNameUseCase {
  private BASE_POKEMON_URL: string;

  constructor(private httpGateway: HttpGateway) {
    this.BASE_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
  }

  async execute({
    pokemonName,
  }: FetchPokemonByNameUseCaseRequest): Promise<FetchPokemonByNameUseCaseResponse> {
    const { data, error } = await this.httpGateway.get(
      `${this.BASE_POKEMON_URL}/${pokemonName}`,
    );

    if (error) {
      throw Error(`The pokemon with name ${pokemonName} was not found`);
    }

    const { abilities, name, sprites, stats, types } = data;

    const pokemon = new Pokemon({
      name: this.capitalizePokemonName(name),
      abilities: this.getAbilities(abilities),
      spriteUrl: sprites.front_default,
      stats: this.getStats(stats),
      types: this.getTypes(types),
    });

    return { pokemon };
  }

  private capitalizePokemonName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  private getAbilities(abilities: AbilitiesResponse): string[] {
    return abilities.map((ability) => ability.ability.name).sort();
  }

  private getStats(stats: StatsResponse): Stats {
    const statsResult = {} as Stats;

    stats.forEach((stat) => {
      switch (stat.stat.name) {
        case 'hp':
          statsResult.healthPoints = stat.base_stat;
          break;
        case 'attack':
          statsResult.attack = stat.base_stat;
          break;
        case 'defense':
          statsResult.defense = stat.base_stat;
          break;
        case 'special-attack':
          statsResult.specialAttack = stat.base_stat;
          break;
        case 'special-defense':
          statsResult.specialDefense = stat.base_stat;
          break;
        case 'speed':
          statsResult.speed = stat.base_stat;
          break;
        default:
          throw new Error('Invalid stat name');
      }
    });

    return statsResult;
  }

  private getTypes(types: TypesReponse): string[] {
    return types.map((type) => type.type.name);
  }
}