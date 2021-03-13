require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// função que gera o token jwt
const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400
  });
}

exports.sign_up = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(404).send({ message: "Usuário não encontrado no banco de dados" });

    if (!await bcrypt.compare(password, user.password))
      return res.status(401).send({ message: "Invalid password" });

    const user_id = user.id;

    return res.status(200).send({
      token: generateToken({ id: user_id })
    });
  } catch (err) {
    return res.status(400).send({ error: `${err}` });
  }
};
