const Author = require('../models/Author');

exports.read = async (req, res) => {
  try {
    const authors = await Author.findAll({});

    if (!authors)
      return res.status(404).send({ message: "Nenhum Autor foi encontrado" });

    return res.status(200).send({ ...authors });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name, description, date_of_birth, date_of_death } = req.body;
  try {
    const author = await Author.create({
      name, description, date_of_birth, date_of_death
    });

    if (!author)
      return res.status(402).send({ message: "Não foi possível criar o usuário" });

    return res.status(200).send({ success: "success" });
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

    return res.status(200).send({ success: "success" });
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

    return res.status(200).send({ success: "success" });
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
