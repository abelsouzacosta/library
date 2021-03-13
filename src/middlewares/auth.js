require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  try {
    if (!authorizationHeader)
      return res.status(501).send({ error: "Token not provided" });

    const parts = authorizationHeader.split(' ');

    if (parts.length !== 2)
      return res.status(501).send({ error: "Token mismatch" });

    const [ bearer, token ] = parts;

    if (!/^Bearer$/i.test(bearer))
      return res.status(401).send({ error: "Token malformatted" });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(501).send({ message: "Unauthorized" });

        req.userId = decoded.id;

        return next();
    });
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};
