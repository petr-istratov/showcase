import { Trades } from '../models';

export const postTrade = async (req, res, next) => {
  try {
    const result = await Trades.create(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getTrades = async (req, res, next) => {
  try {
    const where = {};
    if (req.query.type) where.type = req.query.type;
    if (req.query.user_id) where.user_id = Number(req.query.user_id);

    const result = await Trades.findAll({
      where,
      order: [['id', 'ASC']],
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getSingleTrade = async (req, res, next) => {
  try {
    const result = await Trades.findByPk(req.params.tradeId);
    if (!result) throw new Error('ID not found', { cause: { status: 404 } });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
