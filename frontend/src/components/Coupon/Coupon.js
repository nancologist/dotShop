import { useState } from "react";

const Coupon = ({ clicked }) => {
    const [code, setCode] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        setCode(input.toUpperCase())
    }

    return (
        <div className="coupon border">
            <div className="coupon__title">Coupon</div>
            <div className="coupon__form">
                <input
                    type="text"
                    className="coupon__form__input"
                    onChange={handleInputChange}
                    value={code}
                />
                <button 
                    className="coupon__form__btn"
                    onClick={() => clicked(code)}
                >
                    Redeem
                </button>
            </div>
        </div>
    );
};

export default Coupon;