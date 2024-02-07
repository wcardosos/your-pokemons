import { FastifyReply, FastifyRequest } from 'fastify';
import { FetchPokemonByNameUseCase } from '../use-cases/fetch-pokemon-by-name';
import z from 'zod';
import { PokemonMapper } from '../mappers/pokemon';
import { inject, injectable } from 'tsyringe';

const paramsSchema = z.object({
  name: z.string(),
});

@injectable()
export class FetchPokemonByNameController {
  constructor(
    @inject(FetchPokemonByNameUseCase)
    private fetchPokemonByNameUseCase: FetchPokemonByNameUseCase,
  ) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name } = paramsSchema.parse(request.params);

    const { pokemon } = await this.fetchPokemonByNameUseCase.execute({
      pokemonName: name,
    });

    return reply.send(PokemonMapper.toObject(pokemon));
  }
}
