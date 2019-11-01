import { StatementCategoryCreateDto } from 'core';
import { DbClient } from 'infrastructure';

export const createStatementCategory = (dbClient: DbClient) => async (statementCategory: StatementCategoryCreateDto) =>
  dbClient.createStatementCategory(statementCategory);
