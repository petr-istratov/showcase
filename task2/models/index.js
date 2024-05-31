import sequelize from '../lib/database';
import TradesModel from './trades';

export const Trades = TradesModel(sequelize);
