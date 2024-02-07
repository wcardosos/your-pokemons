/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useContext } from 'react';
import { PokemonContext } from '@/contexts/pokemon';
import { useToast } from '../common/ui/use-toast';

const searchPokemonFormSchema = z.object({
  name: z
    .string()
    .min(2, "The Pokémon's name must be at least 2 characters long"),
});

type SearchPokemonFormData = z.infer<typeof searchPokemonFormSchema>;

export function SearchForm() {
  const { toast } = useToast();
  const { isFetching, setPokemon, fetchPokemonByName, setIsFetching } =
    useContext(PokemonContext);
  const searchPokemonForm = useForm<SearchPokemonFormData>({
    resolver: zodResolver(searchPokemonFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const searchPokemon = async (formValues: SearchPokemonFormData) => {
    try {
      setIsFetching(true);

      const fetchedPokemon = await fetchPokemonByName(formValues.name);

      setPokemon(fetchedPokemon);
    } catch (error: any) {
      toast({
        title: 'An error occurs while trying to fetch the data',
        description:
          error.response?.status === 404
            ? error.response.data.message
            : 'Try again later',
        variant: 'destructive',
      });
    } finally {
      setIsFetching(false);
    }
  };

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
          <Button
            type="submit"
            className="flex gap-4 p-4 bg-blue-500 hover:bg-blue-500/90 text-gray-50 shadow-md"
            disabled={isFetching}
          >
            <span className="font-bold">Search</span>
            <MagnifyingGlass className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
