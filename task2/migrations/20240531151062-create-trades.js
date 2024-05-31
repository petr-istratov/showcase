'use strict';

require('tsx/cjs');
const TRADE_TYPES_IMPORT = require('../constants/enum.js');
const TRADE_TYPES = Object.values(TRADE_TYPES_IMPORT)[0];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trades', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM(Object.values(TRADE_TYPES)),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      symbol: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      shares: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('trades');
  },
};
