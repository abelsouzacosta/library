const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Author = require('../models/Author');
const Category = require('../models/Category');
const Book = require('../models/Book');
const Publisher = require('../models/Publisher');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Author.init(sequelize);
Category.init(sequelize);
Book.init(sequelize);
Publisher.init(sequelize);

module.exports = sequelize;
