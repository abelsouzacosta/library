const { Model, DataTypes } = require('sequelize');

class Book extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      number_of_pages: DataTypes.INTEGER,
      publisher_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Publisher, {
      foreignKey: 'id',
      as: 'publishers'
    });
  }
}

module.exports = Book;
