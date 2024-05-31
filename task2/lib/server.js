import cors from 'cors';
import express from 'express';
import httpContext from 'express-http-context';

import indexRouter from '../routes/index';
import tradesRouter from '../routes/trades';

// import { GlobalErrorHandler } from '../middleware/globalErrorHandler.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(httpContext.middleware);

app.use('/trades', tradesRouter);
app.use('/', indexRouter);

export default app;
