const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chat-bot', 'root', '', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
