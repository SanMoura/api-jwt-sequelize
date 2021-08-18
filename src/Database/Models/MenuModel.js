const Sequelize = require('sequelize');
const database = require('../Connect');

const Menu = database.define('menu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  refmenu: {
    type: Sequelize.STRING,
    allowNull: false
  },
  order: {
    type: Sequelize.STRING,
    allowNull: false
  },
  is_assistance: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type_service: {
    type: Sequelize.STRING,
    allowNull: true
  },
  grupo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  atividade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  aceitar: {
    type: Sequelize.STRING,
    allowNull: false
  },
  equipe: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tempo_atendimento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  is_quantity: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  min_quantity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  max_quantity: {
    type: Sequelize.STRING,
    allowNull: false
  },
},

  {
    tableName: 'menu',
    createdAt: false,
    updatedAt: false,
  })

module.exports = Menu;