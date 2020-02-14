const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const path = require('path');
const products = require('./products.json');
const companies = require('./companies.json');

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);
app.get('/api/products', (req, res, next) => {
  res.send(products);
});
app.get('/api/companies', (req, res, next) => {
  res.send(companies);
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
