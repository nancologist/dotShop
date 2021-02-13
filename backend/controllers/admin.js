const { DB } = require('../DB')
const BaseController = require('./index');
const Product = require('../models/product');
const { apple, banana, orange } = require('../assets/images/urls');

class AdminController extends BaseController {
    constructor(mainRoute) {
        super(mainRoute);
        this.router.post('/', this.addSomeProducts);
    }

    addSomeProducts (req, res, next) {
        const areProdsAlreadyStored = DB.products.length >= 3;
        if (areProdsAlreadyStored) {
            res.json({ msg: 'The products are already stored in database!' });
            return;
        }

        new Product('13j4k', 'Apple', 0.65, apple).save();
        new Product('mv2kl', 'Banana', 1.3, banana).save();
        new Product('jkl42', 'Orange', 0.8, orange).save();

        res.json({ msg: 'Products successfully added!' });
    };

    getRouter() {
        return this.router;
    }
}

module.exports = AdminController;
