const { create } = require("../services/UserServices/CreateUserService");
const { list } = require("../services/UserServices/ListUserService");
const { update } = require("../services/UserServices/UpdateUserService");
const { delete: delete_user } = require('../services/UserServices/DeleteUserService');

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
    await delete_user(id);

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
