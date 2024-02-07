'use client';

import { Horse } from '@phosphor-icons/react';

export function Logo() {
  return (
    <header className="flex gap-1 max-w-5xl mx-auto px-6 py-4 items-center">
      <p className="text-yellow-500 font-bold text-xl">YourPokémons</p>
      <Horse className="text-blue-500 w-6 h-6" weight="fill" />
    </header>
  );
}
