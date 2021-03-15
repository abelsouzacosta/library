const Book = require('../models/Book');

/**
 * Verifica se todas as informações referentes a um livro foram passadas
 * no corpo da requisição
 * @param {String} title - título do livro
 * @param {String} description - descrição do livro
 * @param {Integer} number_of_pages - número de páginas do livro
 * @returns
 */
function verifyConstraints(title, description, number_of_pages) {
  if (title && description && number_of_pages)
    return true;
  else
    return false;
}

exports.read = async (req, res) => {
  try {
    const books = await Book.findAll({});

    if (!books)
      return res.status(404).send({ message: "Nenhum Livro foi encontrado" });

    return res.status(200).send({ ...books });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { title, description, number_of_pages } = req.body;
  try {
    if (!verifyConstraints(title, description, number_of_pages))
      return res.status(402).send({ message: "Por favor preencha todos os campos" });

    const book = await Book.create({
      title, description, number_of_pages
    });

    if (!book)
      return res.status(402).send({ message: "Não foi possível criar o livro" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description, number_of_pages } = req.body;
  try {
    if (!(title || description || number_of_pages))
      return res.status(402).send({ message: "Ao menos um campo é requerido para realizar a operação" });

    const book = await Book.findByPk(id);

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    book.title = title;
    book.description = description;
    book.number_of_pages = number_of_pages;

    if (!book.save())
      return res.status(402).send({ message: "Não foi possível salvar as alterações" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    if (!await book.destroy())
      return res.status(402).send({ message: "Naõ foi possível excluir o Livro" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
}
