import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PokemonProvider } from '@/contexts/pokemon';
import { Toaster } from '@/components/common/ui/toaster';
import { cn } from '@/lib/utils';
import { Header } from '@/components/common/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Pokémon - Find out everything about your favorite pokemon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-gray-50 text-gray-800', inter.className)}>
        <PokemonProvider>
          <Header />
          {children}
          <Toaster />
        </PokemonProvider>
      </body>
    </html>
  );
}
