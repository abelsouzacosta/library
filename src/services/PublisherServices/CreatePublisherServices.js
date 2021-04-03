const Publisher = require("../../models/Publisher")

exports.create = async (name) => {
  const publisher = await Publisher.create({
    name
  });

  if (!publisher)
    throw new Error('Was not possible to create Publisher instance');

  return publisher;
};
