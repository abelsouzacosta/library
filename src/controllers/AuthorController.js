const Author = require('../models/Author');
const { create } = require('../services/AuthorServices/CreateAuthorService');
const { list } = require('../services/AuthorServices/ListAuthorService');

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
    const author = await Author.findByPk(id);

    if (!author)
      return res.status(404).send({ message: "Autor não encontrado" });

    if (name)
      author.name = name;

    if (description)
      author.description = description;

    if (date_of_birth)
      author.date_of_birth = date_of_birth;

    if (date_of_death)
      author.date_of_death = date_of_death;

    if (!await author.save())
      return res.status(402).send({ message: "Não foi possível atualizar as informações do autor" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findByPk(id);

    if (!author)
      return res.status(404).send({ message: "Autor não foi encontrado" });

    if (!author.destroy())
      return res.status(402).send({ message: "Autor não foi encontrado" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findByPk(id, {
      include: 'books'
    });

    if (!author)
      return res.status(404).send({ message: "Autor não encontrado" });

    return res.status(200).json({ author });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
