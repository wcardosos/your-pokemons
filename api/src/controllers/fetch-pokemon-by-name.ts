import { FastifyReply, FastifyRequest } from 'fastify';
import { FetchPokemonByNameUseCase } from '../use-cases/fetch-pokemon-by-name';
import z from 'zod';
import { PokemonMapper } from '../mappers/pokemon';

const paramsSchema = z.object({
  name: z.string(),
});

export class FetchPokemonByNameController {
  constructor(private fetchPokemonByNameUseCase: FetchPokemonByNameUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name } = paramsSchema.parse(request.params);

    const { pokemon } = await this.fetchPokemonByNameUseCase.execute({
      pokemonName: name,
    });

    return reply.send(PokemonMapper.toObject(pokemon));
  }
}
