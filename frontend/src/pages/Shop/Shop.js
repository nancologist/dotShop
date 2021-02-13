import { useEffect } from 'react';
import { connect } from 'react-redux';
import { dispatchGetProducts } from '../../store/thunks';

const Shop = (props) => {
    const { getProducts } = props;
    useEffect(() => { getProducts() }, [getProducts]);

    return (
        <div>{props.products.map(prod => (
            // <h3>{prod.name}</h3>
            <img src={prod.imgPath} key={prod.id} />
        ))}</div>
    );
};

const mapStateToProps = (reduxState) => {
    return {
        products: reduxState.products
    };
}

const mapDispatchToProps = {
    getProducts: () => dispatchGetProducts(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);