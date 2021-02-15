import { Icon } from '@mdi/react';
import { mdiPlusThick } from '@mdi/js';
import './Card.css'

const Card = ({ product, clicked }) => {
    const { id, name, price, imgPath } = product;
    return (
        <div className="card border">
            <div className="card__img-container">
                <img src={ imgPath } />
            </div>
            <strong>{ name }</strong>
            <span>{ price.toFixed(2) }€</span>
            <button onClick={() => clicked(id)}>
                <Icon path={mdiPlusThick} size={1} />
            </button>
        </div>
    );
};

export default Card;