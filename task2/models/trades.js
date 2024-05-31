import { DataTypes } from 'sequelize';

import { TRADE_TYPES } from '../constants/enum';

const Trades = (sequelize) => {
  const TradesModel = sequelize.define(
    'trades',
    {
      type: {
        type: DataTypes.ENUM(Object.values(TRADE_TYPES)),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      symbol: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shares: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
  );

  return TradesModel;
};

export default Trades;
