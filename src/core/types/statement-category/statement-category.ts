export type StatementCategoryId = string;

export type StatementCategoryCreateDto = {
  name: string;
  description: string;
  parentId: StatementCategoryId;
  ownerId: string;
};

export type StatementCategoryDto = {
  id: StatementCategoryId;
  name: string;
  description: string;
  parentId: StatementCategoryId;
  ownerId: string;
  created: Date;
  updated: Date;
};

export type StatementCategory = {
  id: StatementCategoryId;
  name: string;
  description: string;
  parentId: StatementCategoryId;
  ownerId: string;
  created: Date;
  updated: Date;
};
