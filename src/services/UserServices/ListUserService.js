const User = require("../../models/User")

exports.list = async () => {
  const users = await User.findAll({});

  if (!users)
    throw new Error('No Users was found');

  return users;
}
