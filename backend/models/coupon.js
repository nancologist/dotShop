const { DB } = require('../DB');

class Coupon {
    constructor(type, value, name, id) {
        this.type = type;
        this.value = value;
        this.name = name;
        this.id = id;
    }

    save() {
        DB.coupons.push(this);
    }

    static getById(id) {
        const coupon = DB.coupons.find(coupon => coupon.id === id);
        return coupon;
    }
}

module.exports = Coupon;