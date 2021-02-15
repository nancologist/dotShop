import './CartItem.css';

const CartItem = ({ item, minClicked, posClicked }) => {
    return (
        <div key={item.id} className="cart__item">
            <img src={item.imgPath} className="cart__item__pic" />
            <div className="cart__item__name">
                <span>{item.name}</span>
            </div>
            <div className="cart__item__unit-price">
                <span>Unit Price: </span>
                <span className="price">{item.price.toFixed(2)} €</span>
            </div>
            <div className="cart__item__qty">
                <button onClick={() => minClicked(item.id, 'dec')}>-</button>
                <span>{item.unit}</span>
                <button onClick={() => posClicked(item.id, 'inc')}>+</button>
            </div>
            <div className="cart__item__total-price">
                <span>Total: </span>
                <span className="price">{(item.price * item.unit).toFixed(2)} €</span>
            </div>
        </div>
    );
};

export default CartItem;