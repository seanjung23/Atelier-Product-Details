const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const { getProductInfo } = require('./controller');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/products/:id', (req, res) => {
    getProductInfo(req, res, (data) => {
      res.json(data);
    });
});

let port = process.env.SERVER_PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});