import { StatementType } from './statement-type';
import { StatementCategoryId } from 'core/types/statement-category';

export type StatementId = string;

export type StatementCreateDto = {
  name: string;
  value: number;
  type: StatementType;
  categoryId: StatementCategoryId;
  ownerId: string;
  created: Date;
  updated: Date;
};

export type Statement = {
  id: StatementId;
  name: string;
  value: number;
  type: StatementType;
  categoryId: StatementCategoryId;
  ownerId: string;
  created: Date;
  updated: Date;
};

export type StatementDto = {
  id: StatementId;
  name: string;
  value: number;
  type: StatementType;
  categoryId: StatementCategoryId;
  ownerId: string;
  created: Date;
  updated: Date;
};
