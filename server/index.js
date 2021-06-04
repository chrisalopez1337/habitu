const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 1337;
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`App listening @ localhost:${PORT}`));
