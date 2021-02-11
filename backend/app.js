const express = require('express');
const bodyParser = require('body-parser');
const shopController = require('./controllers/shop')
const adminController = require('./controllers/admin')

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Controllers
app.use('/shop', shopController);
app.use('/admin', adminController);

app.listen(8989);