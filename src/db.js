const Sequelize = require('sequelize');

const sequelize = new Sequelize('word_count', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
});

export default sequelize;
