const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    });
  }
}

module.exports = Publisher;
