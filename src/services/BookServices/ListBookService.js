const Book = require('../../models/Book');

exports.list = async () => {
  const books = await Book.findAll({});

  if (!books)
    throw new Error('No book instances was found in the database');

  return books;
};
