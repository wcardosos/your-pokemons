/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from 'tsyringe';
import { HttpGateway } from './http';
import axios from 'axios';

@injectable()
export class AxiosGateway implements HttpGateway {
  async get(endpoint: string) {
    try {
      const response = await axios.get(endpoint);

      return { data: response.data, error: null };
    } catch (error: any) {
      console.error(error);
      return {
        data: null,
        error: {
          status: error.response?.status,
          message: error.message,
        },
      };
    }
  }
}
