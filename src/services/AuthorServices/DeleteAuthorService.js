const Author = require("../../models/Author");

exports.delete = async (id) => {
  const author = await Author.findByPk(id);

  if (!author)
    throw new Error('Author not found');

  if (!await author.destroy())
    throw new Error('Cannot delete author');
};
