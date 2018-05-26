const {Pool, Client} = require('pg');
const dotenv = require('dotenv').config;

module.exports = {
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: 3000 || process.env.DB_PORT,
        dialect: 'postgres',
        define: {
            underscored: true,
        },
    },
}