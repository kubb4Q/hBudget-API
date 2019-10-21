import { StatementCategoryCreateDto } from 'core';
import { createStatementCategoryQuery } from 'infrastructure/database/postgresql/querries';
import { DbClient } from 'infrastructure/database/types';
import { Pool } from 'pg';

const createStatementCategoryFn = (dbPool: Pool) => (statementCategory: StatementCategoryCreateDto) => {
  const { name, description, ownerId, parentId } = statementCategory;
  const createDate = new Date().toString();

  return dbPool.connect().then(client =>
    client
      .query({
        text: createStatementCategoryQuery,
        values: [name, description, ownerId, parentId, createDate, createDate],
      })
      .then(result => result.rows[0].id),
  );
};

export const makePgClient = (dbPool: Pool): DbClient => ({
  createStatementCategory: createStatementCategoryFn(dbPool),
});
