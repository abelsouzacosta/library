const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Author = require('../models/Author');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Author.init(sequelize);

module.exports = sequelize;
