import { Icon } from '@mdi/react';
import { mdiPlusThick } from '@mdi/js';
import './Card.css'

const Card = ({ product }) => {
    const { imgPath, name, price } = product;
    return (
        <div className="card">
            <div className="card__img-container">
                <img src={ imgPath } />
            </div>
            <strong>{ name }</strong>
            <span>{ price.toFixed(2) }€</span>
            <button>
                <Icon path={mdiPlusThick} />
            </button>
        </div>
    );
};

export default Card;