const path = require('path');
const express = require('express');

var app = express();

const publicPath = path.join(__dirname, '/../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {

});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
