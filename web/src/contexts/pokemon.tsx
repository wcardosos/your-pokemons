'use client';

import axios from 'axios';
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
  isFetching: boolean;
  setPokemon: (pokemon: Pokemon) => void;
  setIsFetching: (value: boolean) => void;
  fetchPokemonByName: (name: string) => Promise<Pokemon>;
}

export const PokemonContext = createContext({} as PokemonContextValues);

interface PokemonProviderProps {
  children: ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchPokemonByName = async (name: string) => {
    const { data } = await axios.get(
      `http://localhost:3333/pokemon/${name.toLowerCase()}`,
    );

    return data;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        isFetching,
        setPokemon,
        setIsFetching,
        fetchPokemonByName,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
