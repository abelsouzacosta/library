const Book = require("../../models/Book")

exports.delete = async (id) => {
  const book = await Book.findByPk(id);

  if (!book)
    throw new Error('Book not found');

  if (!await book.destroy())
    throw new Error('Was not possible to delete book instance');
};
