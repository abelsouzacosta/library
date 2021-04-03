const Book = require('../models/Book');
const { list } = require('../services/BookServices/ListBookService');

/**
 * Verifica se os campos estão devidamente assinalados
 * Retornando um erro caso não estejam
 *
 * @param {String} title - título do livro
 * @param {String} description - descrição do livro
 * @param {Int} number_of_pages - número de páginass
 * @param {Int} publisher_id - id da Editora
 * @param {Object} res - Resposta da requisição
 * @returns
 */
const verifyConstraints = (title, description, number_of_pages, publisher_id, res) => {
  if (!(title && description && number_of_pages && publisher_id))
    return res.status(402).send({ message: "Os campos precisam estar corretamente preenchidos" });
};

/**
 * Verifica se ao menos um dos campos foi devidamente preenchido
 *
 * @param {String} title - título do livro
 * @param {String} description - descrição do livro
 * @param {Int} number_of_pages - número de páginass
 * @param {Int} publisher_id - id da Editora
 * @param {Object} res - Resposta da requisição
 * @returns
 */
const checkIfNull = (title, description, number_of_pages, publisher_id, res) => {
  if (!(title || description || number_of_pages || publisher_id))
    return res.status(402).send({ message: "Ao menos um campo tem de ser modificado" });
}

exports.read = async (req, res) => {
  try {
    const books = await list();

    return res.status(200).send({ books });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { title, description, number_of_pages, publisher_id } = req.body;
  try {
    verifyConstraints(title, description, number_of_pages, publisher_id, res);

    const book = await Book.create({
      title, description, number_of_pages, publisher_id
    });

    if (!book)
      return res.status(402).send({ message: "Não foi possível criar o livro" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description, number_of_pages, publisher_id } = req.body;
  try {
    checkIfNull(title, description, number_of_pages, publisher_id, res);

    const book = await Book.findByPk(id);

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    book.title = title;
    book.description = description;
    book.number_of_pages = number_of_pages;
    book.publisher_id = publisher_id;

    if (!book.save())
      return res.status(402).send({ message: "Não foi possível salvar as alterações" });

    return res.status(200).send({ message: "Ok" });
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

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id, {
      include: ['authors', 'publishers']
    });

    if (!book)
      return res.status(404).send({ message: "Livro não encontrado" });

    return res.status(200).json({ book });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
