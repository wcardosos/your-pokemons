import { container } from 'tsyringe';
import { HttpGateway } from '../gateways/http';
import { AxiosGateway } from '../gateways/axios';
import { FetchPokemonByNameUseCase } from '../use-cases/fetch-pokemon-by-name';
import { FetchPokemonByNameController } from '../controllers/fetch-pokemon-by-name';

// Gateways
container.registerSingleton<HttpGateway>('HttpGateway', AxiosGateway);

// Use cases
container.registerSingleton(FetchPokemonByNameUseCase);

// Controllers
container.registerSingleton(FetchPokemonByNameController);
