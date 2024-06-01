import express from 'express';
import { checkExact, checkSchema, param, query, validationResult } from 'express-validator';

import { TRADE_TYPES } from '../constants/enum';
import { getSingleTrade, getTrades, postTrade } from '../controllers/trades';
import validationMiddleware from '../middleware/validation';

const router = express.Router();

const decline = (req, res) => {
  res.status(405).send('Method is not supported');
};

router.post(
  '/',
  checkExact(
    checkSchema({
      type: {
        isIn: { options: [Object.values(TRADE_TYPES)] },
      },
      user_id: {
        isInt: {},
      },
      symbol: {
        isString: {},
      },
      shares: {
        isInt: { options: { min: 1, max: 100 } },
      },
      price: {
        isFloat: {},
      },
      timestamp: {
        isNumeric: {},
      },
    }),
    {
      locations: ['body'],
    },
  ),
  (req, res, next) => validationMiddleware(req, res, next, postTrade),
);

router.get('/:tradeId', param('tradeId').isNumeric(), (req, res, next) =>
  validationMiddleware(req, res, next, getSingleTrade),
);

router.get(
  '/',
  query('type').isIn(Object.values(TRADE_TYPES)).optional(),
  query('user_id').isInt().optional(),
  (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return getTrades(req, res, next);
    }
    res.status(200).json([]);
  },
);

router.put('/:id', decline);
router.patch('/:id', decline);
router.delete('/:id', decline);

export default router;
