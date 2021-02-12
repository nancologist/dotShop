
const BaseController = require('./index');
const Product = require('../models/product');

class AdminController extends BaseController {
    constructor(mainRoute) {
        super(mainRoute);
        this.router.post('/', this.addSomeProducts);
    }

    addSomeProducts (req, res, next) {
        new Product('13j4k', 'Apple', 0.65).save();
        new Product('jkl42', 'Orange', 0.8).save();
        new Product('mv2kl', 'Banana', 1.3).save();
    
        res.json({ msg: 'Products successfully added!' });
    };

    getRouter() {
        return this.router;
    }
}

module.exports = AdminController;
