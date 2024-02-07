import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import { AxiosGateway } from './gateways/axios';
import { FetchPokemonByNameUseCase } from './use-cases/fetch-pokemon-by-name';
import { FetchPokemonByNameController } from './controllers/fetch-pokemon-by-name';

const app = Fastify();

app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
  return reply.send({ message: 'Hello World!' });
});

app.get('/pokemon/:name', async (request, reply) => {
  const httpGateway = new AxiosGateway();
  const fetchPokemonByNameUseCase = new FetchPokemonByNameUseCase(httpGateway);
  const fetchPokemonByNameController = new FetchPokemonByNameController(
    fetchPokemonByNameUseCase,
  );

  return fetchPokemonByNameController.handle(request, reply);
});

app.listen({ port: 3333 }, () => console.log('Server is running'));
