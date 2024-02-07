'use client';

import { PokemonCard } from '@/components/pokemons/pokemon-card';
import { SearchForm } from '@/components/pokemons/search-form';
import { PokemonContext } from '@/contexts/pokemon';
import { useContext } from 'react';

export default function Home() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <main className="max-w-5xl mx-auto px-6 min-h-screen">
      <h1 className="font-bold text-3xl text-blue-500 text-center mt-10">
        Find out everything about your favorite pokemon
      </h1>
      <div className="py-6">
        <SearchForm />
      </div>
      {pokemon ? (
        <PokemonCard
          spriteUrl={pokemon.spriteUrl}
          name={pokemon.name}
          abilities={pokemon.abilities}
          types={pokemon.types}
          stats={pokemon.stats}
        />
      ) : null}
    </main>
  );
}
