const { DB } = require('../DB')
const BaseController = require('./index');
const Product = require('../models/product');
const Coupon = require('../models/coupon');
const {
    apple, banana, orange, avocado, blueberry, carrot, celeriac, 
    cucamber, eggplant, ginger, kohlrabi, leeks, peach, potato, tomato
} = require('../assets/images/urls');

class AdminController extends BaseController {
    constructor(mainRoute) {
        super(mainRoute);
        this.router.post('/', this.addSomeProducts);
    }

    addSomeProducts (req, res, next) {
        const areProdsAlreadyStored = DB.products.length >= 15;
        if (areProdsAlreadyStored) {
            res.json({ msg: 'The products are already stored in database!' });
            return;
        }

        // Mock adding some products to DB by Admin
        new Product('13j4k', 'Apple', 0.59, apple).save();
        new Product('mv2kl', 'Banana', 0.39, banana).save();
        new Product('kj343', 'Orange', 0.8, orange).save();
        new Product('vcb5j', 'Avocado', 0.49, avocado).save();
        new Product('olr99', 'Blueberry', 0.79, blueberry).save();
        new Product('vnaq2', 'Carrot', 0.29, carrot).save();
        new Product('lksd2', 'Celeriac', 0.18, celeriac).save();
        new Product('polk6', 'Cucamber', 0.12, cucamber).save();
        new Product('cvn65', 'Eggplant', 0.54, eggplant).save();
        new Product('jfkg5', 'Ginger', 1.79, ginger).save();
        new Product('jjhhr', 'Kohlrabi', 0.54, kohlrabi).save();
        new Product('yy5fv', 'Leeks', 0.35, leeks).save();
        new Product('nbmn6', 'Peach', 0.85, peach).save();
        new Product('qazxs', 'Potato', 0.15, potato).save();
        new Product('edfr4', 'Tomato', 0.20, tomato).save();

        // Mock adding some coupons to DB by Admin
        new Coupon('percent', 5, 'New Year', 'X68SWL').save();
        new Coupon('amount', 6, 'Birthday', 'F32TM9').save();
        new Coupon('percent', 12, 'Summer', 'R5V9BU').save();
        new Coupon('amount', 10, 'Easter', 'K18XQH').save();

        res.json({ msg: 'Products successfully added!' });
    };

    getRouter() {
        return this.router;
    }
}

module.exports = AdminController;
