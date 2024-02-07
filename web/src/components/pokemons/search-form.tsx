'use client';

import { Input } from '@/components/common/ui/input';
import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/common/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from '@phosphor-icons/react';

const searchPokemonFormSchema = z.object({
  name: z
    .string()
    .min(2, "The Pokémon's name must be at least 2 characters long"),
});

type SearchPokemonFormData = z.infer<typeof searchPokemonFormSchema>;

export function SearchForm() {
  const searchPokemonForm = useForm<SearchPokemonFormData>({
    resolver: zodResolver(searchPokemonFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const searchPokemon = (formValues: SearchPokemonFormData) =>
    console.log(`Searching ${formValues.name} pokemon!`);

  return (
    <Form {...searchPokemonForm}>
      <form onSubmit={searchPokemonForm.handleSubmit(searchPokemon)}>
        <FormField
          control={searchPokemonForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Type your favourite Pokémon’s name"
                  className="border border-yellow-500 focus-visible:ring-yellow-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center mt-4">
          <Button className="flex gap-4 p-4 bg-blue-500 hover:bg-blue-500/90 text-gray-50 shadow-md">
            <span className="font-bold">Search</span>
            <MagnifyingGlass className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
