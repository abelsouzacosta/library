const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      hooks: {
        beforeCreate: async (user, options) => {
          const hash = await bcrypt.hash(user.password, 10);
          user.password = hash;
        },
        beforeBulkCreate: async (user, options) => {
          const hash = await bcrypt.hash(user.password, 10);
          user.password = hash;
        },
        beforeUpdate: async (user, options) => {
          const hash = await bcrypt.hash(user.password, 10);
          user.password = hash;
        },
      },
      sequelize
    });
  }
}

module.exports = User;
