import { connect } from 'react-redux';

const Cart = (props) => {
    return (
        // <h1>Your cart is empty!</h1>
        <div>
            {props.cartItems.map((item) => { return(
                <div key={item.id}>{item.name}, {item.unit}
                </div>
            ); })}
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