const { create } = require('../services/BookServices/CreateBookService');
const { list } = require('../services/BookServices/ListBookService');
const { update } = require('../services/BookServices/UpdateBookService');
const { delete: delete_book } = require('../services/BookServices/DeleteBookService');
const { show } = require('../services/BookServices/ShowBookService');

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
