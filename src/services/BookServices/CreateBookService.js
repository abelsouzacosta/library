const Book = require("../../models/Book")

exports.create = async (title, description, number_of_pages, publisher_id) => {
  const book = await Book.create({
    title, description, number_of_pages, publisher_id
  });

  if (!book)
    throw new Error('error: Was not possible to create Book');

  return book;
}
