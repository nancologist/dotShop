const { DB } = require('../DB');
const Coupon = require('./coupon');

class Order {
    constructor(orderItems, totalPrice) {
        this.id = new Date().toString(); // Mock generating a random id
        this.orderItems = orderItems;
        this.totalPrice = totalPrice;
    }

    save() {
        DB.orders.push(this);
    }

    static getDiscount(couponCode, sum) {
        let discount = 0;

        if (couponCode) {
            const coupon = Coupon.getById(couponCode);
            if (coupon) {
                const couponType = coupon.type;
                switch (couponType) {
                    case 'percent':
                        discount = (coupon.value * sum / 100).toFixed(2);
                        break;

                    case 'amount':
                        discount = coupon.value;
                        break;
                
                    default:
                        break;
                }
            } else {
                throw new Error('This is not valid coupon code.');
            }
        }

        return discount;
    }

    static getSum(order) {
        let sum = 0;

        order.forEach(orderItem => {
            const { price, unit } = orderItem;
            sum += price * unit;
        });

        return sum;
    }
}

module.exports = Order;