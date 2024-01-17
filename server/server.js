const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let gameData = {};

app.post('/updateData', (req, res) => {
  // Receive data from the extension and update the server's data
  gameData = req.body;
  res.sendStatus(200);
});

app.get('/getData', (req, res) => {
  // Send the stored data to the extension
  res.json(gameData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
