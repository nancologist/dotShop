import { connect } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';

const Cart = (props) => {
    let title = 'Your cart is empty... :('
    let totalPrice = 0;
    if (props.cartItems.length > 0) {
        title = 'Check items in your cart:'
    }
    return (
        <div className="cart">
            <h3 className="cart__title">{title}</h3>
            <div className="cart__content">
                <div className="cart__content__items"></div>
                {props.cartItems.map((item) => (
                    <CartItem item={item} />
                ))}
                <div className="cart__content__sum sum">
                    <div className="sum__title">Total Price</div>
                    <div className="sum__val"><span>{totalPrice}</span></div>
                    <button>Confirm Order</button>
                </div>
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