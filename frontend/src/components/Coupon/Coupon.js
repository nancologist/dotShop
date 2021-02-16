import { useState, useImperativeHandle, forwardRef } from "react";

const Coupon = ({ clicked }, cmpRef) => {
    const [code, setCode] = useState('');
    const [inputDisabled, setInputDisabled] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)

    useImperativeHandle(cmpRef, () => ({
        disableInput: () => {
            setInputDisabled(true);
        }
    }));

    const handleInputChange = (e) => {
        const val = e.target.value;
        if (!val) {
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false);
        }
        setCode(val.toUpperCase())
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
                    disabled={inputDisabled}
                />
                <button 
                    className="coupon__form__btn"
                    onClick={() => clicked(code)}
                    disabled={btnDisabled}
                >
                    Redeem
                </button>
            </div>
        </div>
    );
};

export default forwardRef(Coupon);