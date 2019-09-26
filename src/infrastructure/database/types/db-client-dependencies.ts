import { ClientConfig } from "pg";

export type DbClientDependencies = {
  dbConfig: ClientConfig;
};
