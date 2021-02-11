const express = require('express');
const bodyParser = require('body-parser');
const shopController = require('./controllers/shop')

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Controllers
app.use('/shop', shopController);

app.listen(8989);