import { TaskEither } from "fp-ts/lib/TaskEither";
import { CustomError } from "core/types";

export type OperationResult<T> = TaskEither<CustomError, T>;
