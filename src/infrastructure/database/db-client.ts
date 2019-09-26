import { Client, ClientConfig } from "pg";
import { DbClientDependencies } from "infrastructure";
import { OperationResult, CustomErrorType, CustomError } from "core";
import { tryCatch, right, taskEither } from "fp-ts/lib/TaskEither";

let dbClient: Client;

const initializeClient = async (dbConfig: ClientConfig) => {
  dbClient = new Client(dbConfig);

  await dbClient.connect();

  return dbClient;
};

const initializeDbClient = (dbConfig: ClientConfig): OperationResult<Client> =>
  tryCatch(
    () => initializeClient(dbConfig),
    (): CustomError => ({
      type: CustomErrorType.DatabaseClientError,
      message: "Unable to connect to database"
    })
  );

export const makeDbClient = ({ dbConfig }: DbClientDependencies): (() => OperationResult<Client>) => () =>
  dbClient ? taskEither.of<CustomError, Client>(dbClient) : initializeDbClient(dbConfig);
