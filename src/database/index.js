const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Author = require('../models/Author');
const Category = require('../models/Category');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Author.init(sequelize);
Category.init(sequelize);

module.exports = sequelize;
