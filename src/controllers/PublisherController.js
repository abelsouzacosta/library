const { create } = require("../services/PublisherServices/CreatePublisherServices");
const { list } = require("../services/PublisherServices/ListPublisherServices");
const { update } = require("../services/PublisherServices/UpdatePublisherServices");
const { delete: delete_publisher } = require('../services/PublisherServices/DeletePublisherServices');
const { show } = require("../services/PublisherServices/ShowPublisherServices");

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

    const publisher = await create(name);

    return res.status(200).send({ publisher });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const publisher = await update(id, name);

    return res.status(200).send({ publisher });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await delete_publisher(id);

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const publisher = await show(id);

    return res.status(200).json({ publisher });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
