import { useImperativeHandle, forwardRef, useState } from 'react';
import './CartSummary.css';

const CartSummary = ({ sum, clicked }, ref) => {
    const [ couponVal, setCouponVal ] = useState(0)
    useImperativeHandle(ref, () => {
        return {
            getCoupon: (val) => { setCouponVal(val) }
        };
    })

    return (
        <div className="sum border">
            <div className="sum__title">Summary</div>
            <div className="sum__details">
                <div className="sum__details__price">
                    <span>Order Sum</span>
                    <span className="num">{sum.toFixed(2)} €</span>
                </div>
                <div className="sum__details__coupon">
                    <span>Coupon </span>
                    <span className="num">{couponVal.toFixed(2)} €</span>
                </div>
                <div className="sum__details__total">
                    <span>Total Price</span>
                    <span className="num">{(sum + couponVal).toFixed(2)} €</span>
                </div>
            </div>
            <button className="sum__btn" onClick={clicked}>CHECKOUT</button>
        </div>
    );
};

export default forwardRef(CartSummary);