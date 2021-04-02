const Author = require('../../models/Author');

exports.list = async () => {
  const authors = await Author.findAll();

  if (!authors)
    throw new Error('Theres no author registred in the application database');

  return authors;
};
