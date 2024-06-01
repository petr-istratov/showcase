import logger from '../lib/logger';

const globalErrorHandler = (error, req, res) => {
  logger.error(error.stack);
  res.status(error.cause.status || 500).send(error.message || 'Internal Server Error');
};

export default globalErrorHandler;
