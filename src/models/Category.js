const { Model, DateTypes, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsToMany(models.Book, {
      foreignKey: 'category_id',
      through: 'book_category',
      as: 'books'
    });
  }
}

module.exports = Category;
