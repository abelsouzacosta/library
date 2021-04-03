const Publisher = require("../../models/Publisher");

exports.delete = async(id) => {
  const publisher = await Publisher.findByPk(id);

  if (!publisher)
    throw new Error('Publisher not found');

  if (!await publisher.destroy())
    throw new Error('Was not possible to delete Publisher instance');
};
