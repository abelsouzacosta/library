const Author = require('../models/Author');
const { create } = require('../services/AuthorServices/CreateAuthorService');
const { list } = require('../services/AuthorServices/ListAuthorService');
const { update } = require('../services/AuthorServices/UpdateAuthorService');
const { delete: delete_author } = require('../services/AuthorServices/DeleteAuthorService');
const { show } = require('../services/AuthorServices/ShowAuthorService');

exports.read = async (req, res) => {
  try {
    const authors = await list();

    return res.status(200).send({ authors });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name, description, date_of_birth, date_of_death } = req.body;
  try {
    const author = await create(name, description, date_of_birth, date_of_death);

    return res.status(200).send({ author });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, description, date_of_birth, date_of_death } = req.body;
  try {
    const author = await update(id, name, description, date_of_birth, date_of_death);

    return res.status(200).send({ author });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await delete_author(id);

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await show(id);

    return res.status(200).json({ author });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
