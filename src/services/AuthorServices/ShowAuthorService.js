const Author = require("../../models/Author");

exports.show = async (id) => {
  const author = await Author.findByPk(id, {
    include: 'books'
  });

  if (!author)
    throw new Error('Author not found');

  return author;
};
