const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;