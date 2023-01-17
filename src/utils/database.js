const { Sequelize } = require('sequelize');

const db = new Sequelize({
   database: 'courses_db',
   username: 'postgres',
   host: 'localhost',
   port: '2319',
   password: '23areilo23',
   dialect: 'postgres'
});

module.exports = db;