import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { dispatchGetProducts } from '../../store/thunks';
import { dispatchAddToCart } from '../../store/actions';

import Card from '../../components/Card/Card';
import './Shop.css';
import SlidingMsg from '../../components/SlidingMsg/SlidingMsg';

const Shop = (props) => {
    const { getProducts } = props;
    const msgEl = useRef();
    useEffect(() => { getProducts() }, [getProducts]);

    const handleClick = (id) => {
        props.addToCart(id)
        msgEl.current.showMsg('Item added to cart!');
    }

    const hasArticles = props.products.length > 0;
    return (
        <div className="shop">
            {hasArticles ?
                <div className="shop__list">{
                    props.products.map(prod => (
                        <Card
                            key={prod.id} product={prod}
                            clicked={handleClick}
                        />
                    ))
                }</div>
                : <div className="shop__list--empty">Currently there's no product available. Please contact the <strong>Admin</strong>!</div>
            }
            <SlidingMsg
                ref={msgEl}
                type="success"
                time={400}
            />
        </div>
    );
};

const mapStateToProps = (reduxState) => {
    return {
        products: reduxState.products
    };
};

const mapDispatchToProps = {
    getProducts: () => dispatchGetProducts(),
    addToCart: (id) => dispatchAddToCart(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);