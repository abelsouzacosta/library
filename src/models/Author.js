const { Model, DataTypes } = require('sequelize');

class Author extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      date_of_death: DataTypes.DATE
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsToMany(models.Book, {
      foreignKey: 'author_id',
      through: 'book_author',
      as: 'books'
    });
  }
}

module.exports = Author;
