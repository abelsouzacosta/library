const { create } = require("../services/CategoryServices/CreateCategoryService");
const { list } = require("../services/CategoryServices/ListCategoryService");
const { update } = require("../services/CategoryServices/UpdateCategoryService");
const { delete: delete_category } = require('../services/CategoryServices/DeleteCategoryService');
const { show } = require("../services/CategoryServices/ShowCategoryService");

exports.read = async (req, res) => {
  try {
    const categories = await list();

    return res.status(200).send({ categories });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await create(name);

    return res.status(200).send({ category });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    if (!name)
      return res.status(402).send({ message: "O campo `name` é obrigatório" });

    const category = await update(id, name);

    return res.status(200).send({ category });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await delete_category(id);

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await show(id);

    return res.status(200).json({ category });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
