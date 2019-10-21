import { CustomError, CustomErrorType } from 'core/types';

export const CustomErrorFactory = {
  databaseClientError: (error: any): CustomError => ({
    error,
    message: 'Database client error',
    type: CustomErrorType.DatabaseClientError,
  }),
};
