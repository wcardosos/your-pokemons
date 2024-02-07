import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Logo } from '@/components/common/logo';
import { PokemonProvider } from '@/contexts/pokemon';
import { Toaster } from '@/components/common/ui/toaster';

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
      <body className={inter.className}>
        <PokemonProvider>
          <Logo />
          {children}
          <Toaster />
        </PokemonProvider>
      </body>
    </html>
  );
}
