const { Model, DataTypes } = require('sequelize');

class Book extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      number_of_pages: DataTypes.INTEGER
    }, {
      sequelize
    });
  }
}

module.exports = Book;
