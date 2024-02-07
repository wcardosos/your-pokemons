'use client';

import { Horse } from '@phosphor-icons/react';

export function Logo() {
  return (
    <span className="flex gap-1 items-center">
      <p className="text-yellow-500 font-bold text-xl">YourPokémons</p>
      <Horse className="text-blue-500 w-6 h-6" weight="fill" />
    </span>
  );
}
