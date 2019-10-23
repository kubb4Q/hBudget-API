import bodyParser from 'body-parser';
import { errorHandler } from 'core';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(errorHandler);

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000`));
