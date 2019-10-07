export * from './types';
import { makeDbClient } from './db-client';
import { ClientConfig } from 'pg';
import { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } from 'core';

const dbConfig: ClientConfig = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
};

export const dbClient = makeDbClient({ dbConfig });
