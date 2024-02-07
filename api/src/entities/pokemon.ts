export type Stats = {
  healthPoints: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

interface PokemonProps {
  name: string;
  abilities: string[];
  types: string[];
  stats: Stats;
  spriteUrl: string;
}

export class Pokemon {
  constructor(private props: PokemonProps) {}

  get name() {
    return this.props.name;
  }

  get abilities() {
    return this.props.abilities;
  }

  get types() {
    return this.props.types;
  }

  get stats() {
    return this.props.stats;
  }

  get spriteUrl() {
    return this.props.spriteUrl;
  }
}
