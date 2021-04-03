const Author = require('../../models/Author');

exports.update = async (id, name, description, date_of_birth, date_of_death) => {
  const author = await Author.findByPk(id);

  if (!author)
    throw new Error('Authro not found');

  author.name = name;
  author.description = description;
  author.date_of_birth = date_of_birth;
  author.date_of_death = date_of_death;

  await author.save();

  return author;
};
