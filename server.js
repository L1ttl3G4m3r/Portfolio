require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! This is your Express server.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
