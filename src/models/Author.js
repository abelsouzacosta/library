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
}

module.exports = Author;
