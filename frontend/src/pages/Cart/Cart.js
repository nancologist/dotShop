import { Fragment } from 'react';
import { connect } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import { dispatchDecreaseItem, dispatchIncreaseItem } from '../../store/actions';

const Cart = (props) => {
    let sum = {
        orderSum: 0,
        coupon: 0
    }
    let title = 'Your cart is empty... :('
    let renderedContent = null;

    const handleClick = (productId, type) => {
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
                            sum.orderSum += +(unit * price).toFixed(2);
                            return (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    minClicked={handleClick}
                                    posClicked={handleClick}
                                />
                            )
                        })}
                    </div>
                    <div className="cart__content__side">
                        <CartSummary sum={sum} />
                        <div className="coupon border">
                            <div className="coupon__title">Coupon</div>
                            <div className="coupon__form">
                                <input type="text" className="coupon__form__input"/>
                                <button className="coupon__form__btn">Redeem</button>
                            </div>
                        </div>
                    </div>
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

const mapDispatchToProps = {
    decreaseItem: (id) => dispatchDecreaseItem(id),
    increaseItem: (id) => dispatchIncreaseItem(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);