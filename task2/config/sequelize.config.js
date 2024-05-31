import path from 'path';

const sequelizeConfig = {
  dialect: process.env.DB_DIALECT || 'sqlite',
  database: process.env.DB_NAME || 'test-db',
  storage: process.env.DB_STORAGE || './database.sqlite3',
  models: [path.join(__dirname, '..', '/models')],
  logging: false,
};

export default sequelizeConfig;
