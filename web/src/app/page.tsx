import { PokemonCard } from '@/components/pokemons/pokemon-card';
import { SearchForm } from '@/components/pokemons/search-form';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 min-h-screen">
      <h1 className="font-bold text-3xl text-blue-500 text-center mt-10">
        Find out everything about your favorite pokemon
      </h1>
      <div className="py-6">
        <SearchForm />
      </div>
      <PokemonCard />
    </main>
  );
}
