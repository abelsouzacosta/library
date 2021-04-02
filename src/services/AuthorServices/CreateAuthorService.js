const Author = require('../../models/Author');

exports.create = async (name, description, date_of_birth, date_of_death) => {
  const author = await Author.create({
    name, description, date_of_birth, date_of_death
  });

  if (!author)
    throw new Error('Error: Cannot create Author');

  return author;
};
