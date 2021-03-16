const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Book, {
      foreignKey: 'publisher_id',
      as: 'books'
    });
  }
}

module.exports = Publisher;
