import { Fragment } from 'react';
import { connect } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

const Cart = (props) => {
    let sum = {
        orderSum: 0,
        coupon: 0
    }
    let title = 'Your cart is empty... :('
    let renderedContent = null;

    if (props.cartItems.length > 0) {
        title = 'Check items in your cart:'
        renderedContent =
            <Fragment>
                <div className="cart__content">
                    <div className="cart__content__items">
                        {props.cartItems.map((item) => {
                            const { unit, price } = item;
                            sum.orderSum += +(unit * price).toFixed(2);
                            return <CartItem item={item} key={item.id} />
                        })}
                    </div>
                    <CartSummary sum={sum} />
                </div>
                <div className="cart__content__coupon coupon">
                    <div className="coupon__title">Coupon</div>
                    <input type="text" className="coupon__input"/>
                </div>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);