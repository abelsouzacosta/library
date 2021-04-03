const Publisher = require("../models/Publisher");
const { list } = require("../services/PublisherServices/ListPublisherServices");

/**
 * Verifica se o corpo da requisição contém o campo `name`
 * necessário para realizar operações de inserção e alteração
 *
 * Se o nome não estiver setado retorna um erro
 * @param {String} name - nome da Editora
 * @param {Object} res - objeto de resposta da api
 * @returns {Error}
 */
const verifyConstraintName = (name, res) => {
  if (!name)
    return res.status(402).send({ message: "O campo `name` é necessário para a operação" });
}

exports.read = async (req, res) => {
  try {
    const publishers = await list();

    return res.status(200).send({ publishers });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    verifyConstraintName(name, res);

    const publisher = await Publisher.create({
      name
    });

    if (!publisher)
      return res.status(402).send({ message: "Não foi possível criar a Editora" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const publisher = await Publisher.findByPk(id);

    if (!publisher)
      return res.status(404).send({ message: "Editora não encontrada" });

    verifyConstraintName(name, res);

    publisher.name = name;

    if (!await publisher.save())
      return res.status(402).send({ message: "Não foi possivel alterar as informações da Editora" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const publisher = await Publisher.findByPk(id);

    if (!publisher)
      return res.status(404).send({ message: "Editora não encontrada" });

    if (!await publisher.destroy())
      return res.status(402).send({ message: "Não foi possível criar" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const publisher = await Publisher.findByPk(id, {
      include: 'books'
    });

    if (!publisher)
      return res.status(402).send({ message: "Editora não encontrada" });

    return res.status(200).json({ publisher });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
