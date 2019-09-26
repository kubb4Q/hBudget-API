import { CustomErrorType } from "./custom-error-type";

export type CustomError = {
  type: CustomErrorType;
  message?: string;
};
