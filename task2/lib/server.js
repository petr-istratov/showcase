import cors from 'cors';
import express from 'express';
import httpContext from 'express-http-context';

import globalErrorHandler from '../middleware/globalErrorHandler.js';
import indexRouter from '../routes/index';
import tradesRouter from '../routes/trades';

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(httpContext.middleware);

app.use('/trades', tradesRouter);
app.use('/', indexRouter);

app.use(globalErrorHandler);

export default app;
