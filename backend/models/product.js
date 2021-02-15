const { DB } = require('../DB');

class Product {
    constructor(id, name, price, imgPath) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgPath = imgPath;
    }

    static getAll() {
        return [ ...DB.products ]
    }

    static getById(id) {
        const product = DB.products.find(prod => prod.id === id);
        return product;
    }

    // admin
    save() {
        DB.products.push(this);
    }

    // admin
    static updateById(id, props) {
        const { name, price } = props;
        const index = DB.products.findIndex(prod => prod.id === id);
        DB.products[index].name = name;
        DB.products[index].price = price;
    }

    // admin
    static removeById(id) {
        DB.products = DB.products.filter(prod => prod.id !== id);
    }
}

module.exports = Product;