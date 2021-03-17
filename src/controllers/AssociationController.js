const Book = require("../models/Book");
const Category = require("../models/Category");
const Author = require('../models/Author');

exports.associate_book_category = async (req, res) => {
  const { book_id, category_id } = req.body;
  try {
    const book = await Book.findByPk(book_id);

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    const category = await Category.findByPk(category_id);

    if (!category)
      return res.status(404).send({ message: "Categoria não encontrada" });

    if (!await book.addCategory(category))
      return res.status(401).send({ message: "Não foi possível fazer o relacionamento" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.associate_book_author = async (req, res) => {
  const { book_id, author_id } = req.body;
  try {
    const book = await Book.findByPk(book_id);

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    const author = await Author.findByPk(author_id);

    if (!author)
      return res.status(404).send({ message: "Autor não encontrado" });

    if (!await author.addBook(book))
      return res.status(401).send({ message: "Não foi possível fazer o relacionamento" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
