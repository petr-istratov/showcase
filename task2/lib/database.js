import { Sequelize } from 'sequelize';

import sequelizeConfig from '../config/sequelize.config';

const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : sequelizeConfig);

export default sequelize;
