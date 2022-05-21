const express = require('express');

const app = express();
const port = 4000;

const articleRoutes = require('./src/routes/articles');

app.use('/', articleRoutes)

app.listen(port, () => {
  console.log("risa server...")
})