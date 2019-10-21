export const createStatementCategoryQuery = `
INSERT INTO
  statement_categories (
    name,
    description,
    ownerid,
    parentid,
    created,
    updated,
    )
  VALUES ( $1, $2, $3, $4, $5, $6);
`;
