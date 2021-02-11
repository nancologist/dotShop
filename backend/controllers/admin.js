const router = require('express').Router();
const Product = require('../models/product');

const addSomeProducts = (req, res, next) => {
    new Product('13j4k', 'Apple', 0.65).save();
    new Product('jkl42', 'Orange', 0.8).save();
    new Product('mv2kl', 'Banana', 1.3).save();
};

router.post('/', addSomeProducts)

module.exports = router;