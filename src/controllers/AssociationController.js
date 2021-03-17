const Book = require("../models/Book");
const Category = require("../models/Category");

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
