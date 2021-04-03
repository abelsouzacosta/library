const User = require("../../models/User");

exports.create = async (name, email, password) => {
  const user = await User.create({
    name, email, password
  });

  if (!user)
    throw new Error('Was not possible to create User');

  return user;
};
