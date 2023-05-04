const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});