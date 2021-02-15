import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { dispatchGetProducts } from '../../store/thunks';
import { dispatchAddToCart } from '../../store/actions';
import Card from '../../components/Card/Card';
import './Shop.css';

const Shop = (props) => {
    const { getProducts } = props;
    useEffect(() => { getProducts() }, [getProducts]);
    const [msgClass, setMsgClass] = useState(['shop__msg'])

    const handleClick = (id) => {
        props.addToCart(id)

        const isMsgInvisible = msgClass.length < 2;
        if (isMsgInvisible) {
            setMsgClass(['shop__msg', 'shop__msg--show']);
            setTimeout(() => { setMsgClass(['shop__msg']) }, 800);
        }

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
                : <div className="shop__list--empty">Currently there's no product available, please come back later again.</div>
            }
            <div className={msgClass.join(' ')}>
                <span>Item added to cart!</span>
            </div>
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