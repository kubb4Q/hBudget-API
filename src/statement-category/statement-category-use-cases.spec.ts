import { StatementCategoryCreateDto } from 'core';
import { DbClient } from 'infrastructure';
import { createStatementCategory } from './statement-category-use-cases';

describe('statement-category-use-cases', () => {
  const createStatementCategoryMock = jest.fn();
  let mockedDbclinet: DbClient = {
    createStatementCategory: createStatementCategoryMock,
  };
  describe('createStatementCategory', () => {
    const createStatementCategoryFn = createStatementCategory(mockedDbclinet);

    it('should call createStatementCategory with correct data', async () => {
      // given
      const statementCategory: StatementCategoryCreateDto = {
        name: 'categoryName',
        ownerId: 'ownerId',
      };
      // when
      await createStatementCategoryFn(statementCategory);
      // then
      expect(mockedDbclinet.createStatementCategory).toBeCalledWith(statementCategory);
    });

    it('should thrown database error where there is repo problem', async () => {
      // given
      const statementCategory: StatementCategoryCreateDto = {
        name: 'categoryName',
        ownerId: 'ownerId',
      };
      const error = Error('error message');
      createStatementCategoryMock.mockRejectedValueOnce(error);
      try {
        // when
        await createStatementCategoryFn(statementCategory);
        // then
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
