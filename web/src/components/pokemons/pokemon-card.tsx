import {
  Gauge,
  Heart,
  Shield,
  ShieldStar,
  ShootingStar,
  Sword,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

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
          <div className="grid grid-cols-3 grid-rows-2 text-gray-800 justify-center">
            <div className="flex gap-1 items-center">
              <Heart
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.healthPoints}</span>
            </div>
            <div className="flex gap-1 items-center justify-self-center">
              <Sword
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.attack}</span>
            </div>
            <div className="flex gap-1 items-center justify-self-end">
              <Shield
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.defense}</span>
            </div>
            <div className="flex gap-1 items-center">
              <ShootingStar
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.specialAttack}</span>
            </div>
            <div className="flex gap-1 items-center justify-self-center">
              <ShieldStar
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.specialDefense}</span>
            </div>
            <div className="flex gap-1 items-center justify-self-end">
              <Gauge
                className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500"
                weight="fill"
              />
              <span>{stats.speed}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
