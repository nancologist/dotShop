const BaseController = require('./index');
const Product = require('../models/product');
const Coupon = require('../models/coupon');

class ShopController extends BaseController {
    constructor(mainRoute) {
        super(mainRoute);
        
        this.router.get('/', this.getProducts);
        this.router.post('/coupon', this.validateCoupon);
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
