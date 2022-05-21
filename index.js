const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send(`<h1>Hallo Dunia!</h1>`)
});

app.listen(port, () => {
  console.log("tes server...")
})