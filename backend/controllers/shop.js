const BaseController = require('./index');
const Product = require('../models/product');
const Coupon = require('../models/coupon');
const Order = require('../models/order');

class ShopController extends BaseController {
    constructor(mainRoute) {
        super(mainRoute);

        this.router.get('/', this.getProducts);
        this.router.post('/coupon', this.validateCoupon);
        this.router.post('/order', this.postOrder);
    }

    postOrder(req, res, next) {
        const { order: orderItems, couponCode } = req.body
        const sum = Order.getSum(orderItems);;
        const discount = Order.getDiscount(couponCode, sum);
        const totalPrice = sum - discount;
        new Order(orderItems, totalPrice).save();
        res.json({ msg: "Your order has been submitted. Thank you! :)"});
    }

    validateCoupon(req, res, next) {
        const { couponId } = req.body;
        const coupon = Coupon.getById(couponId);
        if (coupon) {
            res.json({ coupon })
        } else {
            res.json({
                msg: 'This is not a valid coupon code.'
            })
        }
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
