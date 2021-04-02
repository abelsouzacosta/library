const { truncate } = require("../models/User");
const User = require("../models/User");

exports.read = async (req, res) => {
  try {
    const users = await User.findAll({});

    if (!users)
      return res.status(404).send({ message: "Nenhum usuário foi encontrado no banco de dados" });

    return res.status(200).send({ users });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.create = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.create({
      name, email, password
    });

    if (!user)
      return res.status(401).send({ message: "Não foi possível criar o usuário" });

    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).send({ message: "Usuário não encontrado" });

    if (name)
      user.name = name;

    if (email)
      user.email = email;

    if (password)
      user.password = password;

    if (!await user.save())
      return res.status(401).send({ message: "Não foi possível salvar as atualizações" });

    return res.status(200).send({ message: "Ok" });
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
