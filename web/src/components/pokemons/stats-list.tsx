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
      description: 'Health points',
    },
    {
      icon: <Sword weight="fill" />,
      value: stats.attack,
      description: 'Attack',
    },
    {
      icon: <Shield weight="fill" />,
      value: stats.defense,
      description: 'Defense',
    },
    {
      icon: <ShootingStar weight="fill" />,
      value: stats.specialAttack,
      description: 'Special attack',
    },
    {
      icon: <ShieldStar weight="fill" />,
      value: stats.specialDefense,
      description: 'Special defense',
    },
    {
      icon: <Gauge weight="fill" />,
      value: stats.speed,
      description: 'Speed',
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
