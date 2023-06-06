const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const pathDir = require('./utils/path.js');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded());
const router = require('./controllers/contact.js');
app.use(router);

app.listen(4000);