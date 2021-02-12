const Product = require('../models/product');

class AdminController {
    constructor({ mainRoute, router }) {
        this.mainRoute = mainRoute;

        this.router = router;
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

// Get methods in an object:
// let props = [];
// props = props.concat(Object.getOwnPropertyNames(obj));
// console.log(props);
