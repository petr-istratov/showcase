import { Sequelize } from 'sequelize';

import sequelizeConfig from '../config/sequelize.config';

const sequelize = new Sequelize(sequelizeConfig);

export default sequelize;
