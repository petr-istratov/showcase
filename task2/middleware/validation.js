import { validationResult } from 'express-validator';

const validationMiddleware = (req, res, next, controller) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return controller(req, res, next);
  }
  res.status(400).json({ errors: result.array() });
};

export default validationMiddleware;
