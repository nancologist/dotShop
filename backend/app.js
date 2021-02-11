const express = require('express');
const bodyParser = require('body-parser');
const shopController = require('./controllers/shop')

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/shop', shopController);


app.listen(8989);