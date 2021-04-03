const Book = require("../../models/Book");

exports.update = async (id, title, description, number_of_pages, publisher_id) => {
  const book = await Book.findByPk(id);

  if (!book)
    throw new Error('Book not found');


  book.title = title;
  book.description = description;
  book.number_of_pages = number_of_pages;
  book.publisher_id = publisher_id;

  if (!await book.save())
    throw new Error('Was not possible to update book instance');

  return book;
};
