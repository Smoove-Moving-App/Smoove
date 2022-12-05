const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const cors = require('cors');

app.use(cors())

app.use('/', (req, res) => {
  return res.status(200).json('Hello??')
})


app.listen(port, () => console.log('Server listening to port', port));
