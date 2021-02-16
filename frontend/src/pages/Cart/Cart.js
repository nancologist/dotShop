import { Fragment, useRef, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import Coupon from '../../components/Coupon/Coupon';
import SlidingMsg from '../../components/SlidingMsg/SlidingMsg';

import { dispatchDecreaseItem, dispatchIncreaseItem } from '../../store/actions';
// import { dispatchValidateCoupon } from '../../store/thunks';

const Cart = (props) => {
    let orderSum = 0
    let title = 'Your cart is empty... :('
    let renderedContent = null;

    const msgEl = useRef();
    const couponEl = useRef();
    const cartSummaryCmp = useRef();
    const [couponCode, setCouponCode] = useState(undefined);
    const handleCouponSubmit = async (code) => {
        let res;
        try {
            res = await axios.post(
                'http://localhost:8989/shop/coupon',
                { couponId: code }
            );
        } catch (error) {
            console.log(error);
        }

        const isError = typeof res.data.msg === 'string';
        if (isError)  {
            msgEl.current.showMsg(res.data.msg);
            return;
        }
        
        couponEl.current.disableInput();
        const { coupon } = res.data;
        if (coupon.type === 'amount') {
            cartSummaryCmp.current.getCoupon(-coupon.value)
        }

        if (coupon.type === 'percent') {
            cartSummaryCmp.current.getCoupon(-(orderSum * coupon.value / 100));
        }

        setCouponCode(code);
    };

    const handleQtyChange = (productId, type) => {
        switch (type) {
            case 'dec':
                props.decreaseItem(productId);
                break;
        
            case 'inc':
                props.increaseItem(productId);
                break;
        }
    }

    if (props.cartItems.length > 0) {
        title = 'Check items in your cart:'
        renderedContent =
            <Fragment>
                <div className="cart__content">
                    <div className="cart__content__items">
                        {props.cartItems.map((item) => {
                            const { unit, price } = item;
                            orderSum += +(unit * price).toFixed(2);
                            return (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    minClicked={handleQtyChange}
                                    posClicked={handleQtyChange}
                                />
                            )
                        })}
                    </div>
                    <div className="cart__content__side">
                        <CartSummary sum={orderSum} ref={cartSummaryCmp} />
                        <Coupon clicked={handleCouponClick} />
                    </div>
                </div>
                <SlidingMsg
                    ref={msgEl}
                    type="error"
                    time={2500}
                />
            </Fragment>
    }
    return (
        <div className="cart">
            <h3 className="cart__title">{title}</h3>
            { renderedContent }
        </div>
    )
};

const mapStateToProps = (reduxState) => {
    return {
        cartItems: reduxState.cart
    };
}

const mapDispatchToProps = {
    decreaseItem: (id) => dispatchDecreaseItem(id),
    increaseItem: (id) => dispatchIncreaseItem(id),
    submitCheckout: (couponCode) => dispatchSubmitCheckout(couponCode)
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);