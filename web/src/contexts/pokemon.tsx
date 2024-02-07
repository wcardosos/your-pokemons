'use client';

import { ReactNode, createContext, useState } from 'react';

type Stats = {
  healthPoints: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

interface Pokemon {
  name: string;
  abilities: string[];
  types: string[];
  stats: Stats;
  spriteUrl: string;
}

interface PokemonContextValues {
  pokemon: Pokemon | null;
  setPokemon: (pokemon: Pokemon) => void;
}

export const PokemonContext = createContext({} as PokemonContextValues);

interface PokemonProviderProps {
  children: ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
