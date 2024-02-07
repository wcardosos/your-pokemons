import {
  Gauge,
  Heart,
  Shield,
  ShieldStar,
  ShootingStar,
  Sword,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export function PokemonCard() {
  return (
    <div className="bg-yellow-100 px-4 pb-4 rounded shadow-md">
      <div className="flex justify-center">
        <Image
          className="drop-shadow-sprite"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          width={128}
          height={128}
        />
      </div>
      <section className="bg-yellow-50 grid gap-6 w-full px-4 py-6 rounded">
        <div className="grid gap-2">
          <strong className="text-blue-500 text-xl">Pikachu</strong>
          <div>
            <p className="text-gray-600 text-sm">
              Abilities: lightning-rod, static
            </p>
            <p className="text-gray-600 text-sm">Types: eletric</p>
          </div>
        </div>
        <div>
          <span className="font-medium text-gray-800">Stats</span>
          <div className="grid grid-cols-3 grid-rows-2 text-gray-800 justify-center">
            <div className="flex gap-1 items-center">
              <Heart className="w-4 h-4 text-blue-500" weight="fill" />
              <span>35</span>
            </div>
            <div className="flex gap-1 items-center justify-self-center">
              <Sword className="w-4 h-4 text-blue-500" weight="fill" />
              <span>55</span>
            </div>
            <div className="flex gap-1 items-center justify-self-end">
              <Shield className="w-4 h-4 text-blue-500" weight="fill" />
              <span>40</span>
            </div>
            <div className="flex gap-1 items-center">
              <ShootingStar className="w-4 h-4 text-blue-500" weight="fill" />
              <span>50</span>
            </div>
            <div className="flex gap-1 items-center justify-self-center">
              <ShieldStar className="w-4 h-4 text-blue-500" weight="fill" />
              <span>35</span>
            </div>
            <div className="flex gap-1 items-center justify-self-end">
              <Gauge className="w-4 h-4 text-blue-500" weight="fill" />
              <span>35</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
