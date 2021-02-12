const { Router } = require('express');

class BaseController {
    constructor(mainRoute) {
        this.router = new Router();
        this.mainRoute = mainRoute;
    }
}

module.exports = BaseController;