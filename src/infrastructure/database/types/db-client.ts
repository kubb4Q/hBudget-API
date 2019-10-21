import { StatementCategoryCreateDto, StatementCategoryId } from 'core';

export type DbClient = {
  createStatementCategory: (statement: StatementCategoryCreateDto) => Promise<StatementCategoryId>;
};
