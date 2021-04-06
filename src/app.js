const express = require('express');

const app = express();

const router = require('./routes/routes');
const { errors } = require('celebrate');

const db = require('./database/index');

app.use(express.json());
app.use(router);
app.use(errors);

try {
  db.authenticate();
  console.log(`Authenticated to database`);
} catch (err) {
  console.log(`${err}`);
}

module.exports = app;
