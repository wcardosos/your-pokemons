import { BaseHttpError } from './base';

export class NotFoundError extends BaseHttpError {
  constructor(message: string) {
    super(message, 404);
  }
}
