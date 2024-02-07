'use client';

import { Spinner } from '@/components/common/spinner';
import { PokemonCard } from '@/components/pokemons/pokemon-card';
import { SearchForm } from '@/components/pokemons/search-form';
import { PokemonContext } from '@/contexts/pokemon';
import { useContext } from 'react';

export default function Home() {
  const { pokemon, isFetching } = useContext(PokemonContext);

  const isFirstRender = !pokemon && !isFetching;
  const isPokemonFetched = pokemon && !isFetching;

  const searchText = isFirstRender ? (
    <div className="text-gray-800 text-center mt-6">
      <p>Search a pokémon</p>
    </div>
  ) : null;
  const isFetchingFeedback = isFetching ? (
    <div className="flex justify-center mt-6">
      <Spinner />
    </div>
  ) : null;
  const pokemonCard = isPokemonFetched ? (
    <PokemonCard
      spriteUrl={pokemon.spriteUrl}
      name={pokemon.name}
      abilities={pokemon.abilities}
      types={pokemon.types}
      stats={pokemon.stats}
    />
  ) : null;

  return (
    <main className="max-w-2xl mx-auto px-6 pb-6 min-h-[90vh]">
      <h1 className="font-bold text-3xl text-blue-500 text-center mt-10">
        Find out everything about your favorite pokemon
      </h1>
      <div className="py-6">
        <SearchForm />
      </div>
      {searchText}
      {isFetchingFeedback}
      {pokemonCard}
    </main>
  );
}
