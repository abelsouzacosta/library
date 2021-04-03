const Publisher = require("../../models/Publisher")

exports.update = async (id, name) => {
  const publisher = await Publisher.findByPk(id);

  if (!publisher)
    throw new Error('Publisher not found');

  publisher.name = name;

  if (!publisher.save())
    throw new Error('Was not possible to update Publisher instance');

  return publisher;
};
