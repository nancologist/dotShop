import { connect } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';

const Cart = (props) => {
    let title = 'Your cart is empty... :('
    let orderSum = 0;
    let coupon = 0;
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