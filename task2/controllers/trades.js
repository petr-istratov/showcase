import logger from '../lib/logger';
import { Trades } from '../models';

export const postTrade = async (req, res) => {
  //validation
  try {
    const result = await Trades.create(req.body);

    res.status(201);
    res.send(result);
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to get contract');
    // res.status(500);
    // res.send('Could not post new trade'); //error handler
  }
};
