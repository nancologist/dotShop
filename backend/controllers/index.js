const { Router } = require('express');

class BaseController {
    constructor() {
        this.router = new Router();
    }
}

module.exports = BaseController;