import './CartSummary.css';

const CartSummary = ({ sum }) => {
    const { orderSum, coupon } = sum;
    return (
        <div className="sum border">
            <div className="sum__title">Summary</div>
            <div className="sum__details">
                <div className="sum__details__price">
                    <span>Order Sum</span>
                    <span className="num">{orderSum.toFixed(2)} €</span>
                </div>
                <div className="sum__details__coupon">
                    <span>Coupon </span>
                    <span className="num">{coupon}</span>
                </div>
                <div className="sum__details__total">
                    <span>Total Price</span>
                    <span className="num">{(orderSum - coupon).toFixed(2)} €</span>
                </div>
            </div>
            <button className="sum__btn">Confirm Order</button>
        </div>
    );
};

export default CartSummary;