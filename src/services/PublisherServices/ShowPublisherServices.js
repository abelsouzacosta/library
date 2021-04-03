const Publisher = require("../../models/Publisher");

exports.show = async (id) => {
  const publisher = await Publisher.findByPk(id, {
    include: 'books'
  });

  if (!publisher)
    throw new Error('Publisher not found');

  return publisher;
};
