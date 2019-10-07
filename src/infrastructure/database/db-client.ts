import { Client, ClientConfig } from 'pg';
import { DbClientDependencies } from 'infrastructure';
import { pipe, tryCatch } from 'ramda';

let dbClient: Client;

const initializeClient = async (dbConfig: ClientConfig) => {
  dbClient = new Client(dbConfig);

  await dbClient.connect();

  return dbClient;
};

const initializeDbClient = (dbConfig: ClientConfig): Promise<Client> =>
  tryCatch(
    pipe(
      () => dbConfig,
      initializeClient,
    ),
    error => {
      throw error;
    },
  )();

export const makeDbClient = ({ dbConfig }: DbClientDependencies): (() => Promise<Client>) => () =>
  dbClient ? Promise.resolve(dbClient) : initializeDbClient(dbConfig);
