const User = require("../models/User");

exports.read = (req, res) => {
  return res.status(200).send({ message: "Ok" });
};

exports.create = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.create({
      name, email, password
    });

    if (!user)
      return res.status(401).send({ message: "Não foi possível criar o usuário" });

    return res.status(200).send({ success: "success" });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
