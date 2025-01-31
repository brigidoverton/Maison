const Sequelize = require('sequelize');
const mysql2    = require("mysql2");

const config    = require('../config/config');

// Connect to database...
module.exports  = new Sequelize(
    config.database_name, 
    config.database_username, 
    config.database_password,
    {
        host: '192.168.0.12',
        dialect: 'mysql'
    }
);