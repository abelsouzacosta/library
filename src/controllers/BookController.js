const { create } = require('../services/BookServices/CreateBookService');
const { list } = require('../services/BookServices/ListBookService');
const { update } = require('../services/BookServices/UpdateBookService');
const { delete: delete_book } = require('../services/BookServices/DeleteBookService');
const { show } = require('../services/BookServices/ShowBookService');

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

    const book = await create(title, description, number_of_pages, publisher_id);

    return res.status(200).send({ book });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description, number_of_pages, publisher_id } = req.body;
  try {
    checkIfNull(title, description, number_of_pages, publisher_id, res);

    const book = await update(id, title, description, number_of_pages, publisher_id);

    return res.status(200).send({ book });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await delete_book(id);

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await show(id);

    return res.status(200).json({ book });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
