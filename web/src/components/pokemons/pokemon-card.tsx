import Image from 'next/image';
import { StatsList } from './stats-list';

interface PokemonCardProps {
  spriteUrl: string;
  name: string;
  abilities: string[];
  types: string[];
  stats: {
    healthPoints: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export function PokemonCard({
  spriteUrl,
  name,
  abilities,
  types,
  stats,
}: PokemonCardProps) {
  return (
    <div className="bg-yellow-100 px-4 pb-4 rounded shadow-md">
      <div className="flex justify-center">
        <Image
          className="drop-shadow-sprite"
          src={spriteUrl}
          alt=""
          width={128}
          height={128}
        />
      </div>
      <section className="bg-yellow-50 grid gap-6 w-full px-4 py-6 rounded">
        <div className="grid gap-2">
          <strong className="text-blue-500 text-xl">{name}</strong>
          <div>
            <p className="text-gray-600 text-sm">
              Abilities: {abilities.join(', ')}
            </p>
            <p className="text-gray-600 text-sm">Types: {types.join(', ')}</p>
          </div>
        </div>
        <div className="space-y-2">
          <span className="font-medium text-gray-800">Stats</span>
          <StatsList stats={stats} />
        </div>
      </section>
    </div>
  );
}
