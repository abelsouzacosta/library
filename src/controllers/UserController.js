const { truncate } = require("../models/User");
const User = require("../models/User");
const { create } = require("../services/UserServices/CreateUserService");
const { list } = require("../services/UserServices/ListUserService");
const { update } = require("../services/UserServices/UpdateUserService");

exports.read = async (req, res) => {
  try {
    const users = await list();

    return res.status(200).send({ users });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await create(name, email, password);

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await update(id, name, email, password);

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).send({ message: "Usuário não encontrado" });

    if (!await user.destroy())
      return res.status(401).send({ message: "Não foi possível excluir o usuário" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
