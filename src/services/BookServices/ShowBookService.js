const Book = require('../../models/Book');

exports.show = async (id) => {
  const book = await Book.findByPk(id, {
    include: ['authors', 'publishers']
  });

  if (!book)
    return res.status(404).send({ message: "Livro não encontrado" });

  return book;
};
