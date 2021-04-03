const User = require("../../models/User")

exports.update = async (id, name, email, password) => {
  const user = await User.findByPk(id);

    if (!user)
      throw new Error('User not found');

    user.name = name;
    user.email = email;

    if (password)
      user.password = password;

    if (!await user.save())
      throw new Error('Was not possible to update User instance');

  return user;
};
