import { Sequelize } from 'sequelize';

import TradesModel from '../models/trades';

const sequelize = new Sequelize('sqlite::memory:');
const Trades = TradesModel(sequelize);

const connect = () =>
  sequelize
    .authenticate()
    .then(() => {
      console.log(`SQLite successfully connected!`);
      return Trades.sync();
    })
    .then((result) => {
      console.log(`Trades table created`);
      return result;
    })
    .catch((error) => {
      console.error('Unable to connect to SQLite database:', error);
    });

class SequelizeConnection {
  getConnection() {
    this.promise = connect();
    return this.promise;
  }

  async clearDatabase() {
    await Trades.drop();
    return Trades.sync();
  }

  closeConnection() {
    return sequelize.close();
  }
}

module.exports = SequelizeConnection;
