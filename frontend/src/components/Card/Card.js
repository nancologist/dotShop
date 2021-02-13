import './Card.css'

const Card = ({ product }) => {
    const { imgPath, name, price } = product;
    return (
        <div className="card">
            <div className="card__img-container">
                <img src={ imgPath } />
            </div>
            <div className="card__details">
                <strong>{ name }</strong>
                <span>{ price }€</span>
            </div>
        </div>
    );
};

export default Card;