/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpGateway {
  get: (endpoint: string) => Promise<{ data: any; error: any }>;
}
