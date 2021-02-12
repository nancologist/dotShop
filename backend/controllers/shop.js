const BaseController = require('./index');
const Product = require('../models/product');

class ShopController extends BaseController {
    constructor(mainRoute) {
        super();
        this.mainRoute = mainRoute;
        this.router.get('/', this.getProducts);
    }

    getProducts (req, res, next) {
        const products = Product.getAll()    
        res.json({ products });
    };

    getRouter() {
        return this.router;
    }
}

module.exports = ShopController;
