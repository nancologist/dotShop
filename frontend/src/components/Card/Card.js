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
            <div className="card__details">
                <div><strong>{ name }</strong></div>
                <div className="card__price-add">
                    <span>{ price.toFixed(2) }€</span>
                    <button> <Icon path={mdiPlusThick} /> </button>
                </div>
            </div>
        </div>
    );
};

export default Card;