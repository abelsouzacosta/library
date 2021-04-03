const User = require("../../models/User")

exports.delete = async (id) => {
  const user = await User.findByPk(id);

  if (!user)
    throw new Error('User not found');

  if (!await user.destroy())
    throw new Error('Unable to delete User instance');
};
