const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');

const Server = require('./Server/server');
const shopController = require('./controllers/shop');
const AdminController = require('./controllers/admin');

const server = new Server({
    port: 8989,
    controllers: [
        new AdminController({ mainRoute: '/admin', router: router })
    ],
    middlewares: [
        bodyParser.urlencoded({ extended: false })
    ],
    express
});
