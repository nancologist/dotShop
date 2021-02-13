import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { dispatchGetProducts } from '../../store/thunks';
import Card from '../../components/Card/Card';
import './Shop.css';

const Shop = (props) => {
    const { getProducts } = props;

    useEffect(() => { getProducts() }, [getProducts]);

    const hasArticles = props.products.length > 0;

    return (
        <div className="shop">
            {hasArticles ?
                <div>{
                    props.products.map(prod => (
                        <Card key={prod.id} product={prod} />
                    ))
                }</div>
                : <div className="msg-box--error">Currently there's no product available, please come back later again.</div>
            }
        </div>
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