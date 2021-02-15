import './CartSummary.css';

const CartSummary = ({ sum }) => {
    const { orderSum, coupon } = sum;
    return (
        <div className="cart__content__sum sum border">
            <div className="sum__title">Summary</div>
            <div className="sum__details">
                <div className="sum__details__price">
                    <span>Order Sum</span>
                    <span className="num">{orderSum}</span>
                </div>
                <div className="sum__details__coupon">
                    <span>Coupon </span>
                    <span className="num">{coupon}</span>
                </div>
                <div className="sum__details__total">
                    <span>Total Price</span>
                    <span className="num">{orderSum - coupon}</span>
                </div>
            </div>
            <button className="sum__btn">Confirm Order</button>
        </div>
    );
};

export default CartSummary;