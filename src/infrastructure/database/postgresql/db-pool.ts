import { Pool, PoolConfig } from 'pg';
import { pipe } from 'ramda';

let dbPool: Pool;

const createPool = (poolConfig: PoolConfig) => {
  if (!dbPool) {
    dbPool = new Pool(poolConfig);
  }

  return dbPool;
};

export const initializeDbPool = (poolConfig: PoolConfig) =>
  pipe(
    () => poolConfig,
    createPool,
  );
