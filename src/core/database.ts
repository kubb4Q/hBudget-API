import { Client } from "pg";
import { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } from "core/constants";

let client: Client;

export const dbClient = async (): Promise<Client> => {
  if (client) {
    client = new Client({
      user: DB_USER,
      host: DB_HOST,
      database: DB_NAME,
      password: DB_PASSWORD,
      port: DB_PORT
    });

    await client.connect();
  }

  return client;
};
