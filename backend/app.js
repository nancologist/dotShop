const express = require('express');
const bodyParser = require('body-parser');

const Server = require('./Server/server');
const shopController = require('./controllers/shop')
const adminController = require('./controllers/admin')

new Server({
    port: 8989,
    controllers: [ shopController, adminController ],
    middlewares: [
        bodyParser.urlencoded({ extended: false })
    ],
    express
});