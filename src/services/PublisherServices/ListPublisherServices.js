const Publisher = require('../../models/Publisher');

exports.list = async () => {
  const publishers = await Publisher.findAll({});

  if (!publishers)
    throw new Error('No publisher was found');


  return publishers;
}
