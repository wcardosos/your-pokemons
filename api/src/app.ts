import 'reflect-metadata';
import './containers';
import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import { FetchPokemonByNameController } from './controllers/fetch-pokemon-by-name';
import { container } from 'tsyringe';
import cors from '@fastify/cors';

const app = Fastify();

app.register(cors, {});

const fetchPokemonByNameController = container.resolve(
  FetchPokemonByNameController,
);

app.get('/', (_: FastifyRequest, reply: FastifyReply) => {
  return reply.send({ message: 'Hello World!' });
});

/*
  É necessário criar a função de callback que recebe os parâmetros de requisição e resposta e passar para o controller por conta
  do tsyringe (lib utilizada para gerenciar a injeção de dependências da aplicação) não funcionar muito bem com o Express.
  
  Outra forma de resolver isso seria utilizando o bind, contudo achei que ficaria um pouco confuso dessa forma.

  Ex.: routes.get('/customers', customerController.index.bind(customerController))
*/
app.get('/pokemon/:name', (request, reply) =>
  fetchPokemonByNameController.handle(request, reply),
);

app.listen({ port: 3333 }, () => console.log('Server is running'));
