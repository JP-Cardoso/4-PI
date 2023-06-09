'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('iot', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      moustre: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dateInsert: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('iot')
  }
};
