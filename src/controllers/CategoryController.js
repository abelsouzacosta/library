const Category = require("../models/Category");

exports.read = async (req, res) => {
  try {
    const categories = await Category.findAll({});

    if (!categories)
      return res.status(404).send({ message: "Nenhuma categoria foi encontrada" });

    return res.status(200).send({ ...categories });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({
      name
    });

    if (!category)
      return res.status(402).send({ message: "Não foi possível criar a categoria" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).send({ message: "Categoria não encontrada" });

    if (!name)
      return res.status(402).send({ message: "O campo `name` é obrigatório" });

    category.name = name;

    if (!await category.save())
      return res.status(401).send({ message: "Não ffoi possível atualizar informações referentes a Categoria" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).send({ message: "Categoria não encontrada" });

    if (!await category.destroy())
      return res.status(402).send({ message: "Não foi possível excluir a categoria" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id, {
      include: 'books'
    });

    if (!category)
      return res.status(404).send({ message: "Categoria não encontrada" });

    return res.status(200).json({ category });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
