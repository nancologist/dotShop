import { connect } from 'react-redux';

const Cart = (props) => {
    return (
        <div>
            {props.cartItems.map((item) => (
                <div key={item.id}>{item.name}, {item.unit}
                </div>
            ))}
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