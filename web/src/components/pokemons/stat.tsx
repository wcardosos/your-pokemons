import { ReactNode } from 'react';

interface StatProps {
  icon: ReactNode;
  value: number;
  description: string;
}

export function Stat({ icon, value, description }: StatProps) {
  return (
    <div className="grid w-full gap-2 justify-center">
      <div className="flex gap-1 justify-center items-center">
        <div className="w-4 h-4 lg:w-6 lg:h-6 lg:text-xl text-blue-500">
          {icon}
        </div>
        <span>{value}</span>
      </div>
      <span className="text-gray-800 text-xs">{description}</span>
    </div>
  );
}
