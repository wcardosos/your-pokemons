import { BaseHttpError } from './base';

export class InternalError extends BaseHttpError {
  constructor(message: string) {
    super(message, 500);
  }
}
