require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
