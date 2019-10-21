import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from 'core';
import { PoolConfig } from 'pg';

export const poolConfig: PoolConfig = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
};
