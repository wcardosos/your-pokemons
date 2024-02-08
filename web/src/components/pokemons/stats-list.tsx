import {
  ShootingStar,
  ShieldStar,
  Heart,
  Sword,
  Shield,
  Gauge,
} from '@phosphor-icons/react';
import { Stat } from './stat';

interface StatsListProps {
  stats: {
    healthPoints: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export function StatsList({ stats }: StatsListProps) {
  const statsMapped = [
    {
      icon: <Heart weight="fill" />,
      value: stats.healthPoints,
      description: 'Pontos de vida',
    },
    {
      icon: <Sword weight="fill" />,
      value: stats.attack,
      description: 'Ataque',
    },
    {
      icon: <Shield weight="fill" />,
      value: stats.defense,
      description: 'Defesa',
    },
    {
      icon: <ShootingStar weight="fill" />,
      value: stats.specialAttack,
      description: 'Ataque especial',
    },
    {
      icon: <ShieldStar weight="fill" />,
      value: stats.specialDefense,
      description: 'Defesa especial',
    },
    {
      icon: <Gauge weight="fill" />,
      value: stats.speed,
      description: 'Velocidade',
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-4 text-gray-800 justify-center">
      {statsMapped.map((stat, index) => (
        <Stat
          key={index}
          icon={stat.icon}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </div>
  );
}
