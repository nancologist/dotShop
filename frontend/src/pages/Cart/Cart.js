import { connect } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

const Cart = (props) => {
    let title = 'Your cart is empty... :('

    const sum = {
        orderSum: 0,
        coupon: 0
    }

    if (props.cartItems.length > 0) {
        title = 'Check items in your cart:'
    }
    return (
        <div className="cart">
            <h3 className="cart__title">{title}</h3>
            <div className="cart__content">
                <div className="cart__content__items">
                    {props.cartItems.map((item) => (
                        <CartItem item={item} />
                    ))}
                </div>
                <CartSummary sum={sum} />
            </div>
            <div className="cart__content__coupon coupon">
                <div className="coupon__title">Coupon</div>
                <input type="text" className="coupon__input"/>
            </div>
        </div>
    )
};

const mapStateToProps = (reduxState) => {
    return {
        cartItems: reduxState.cart
    };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);