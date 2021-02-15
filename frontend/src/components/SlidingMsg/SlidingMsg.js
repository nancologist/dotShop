import { useState, useImperativeHandle, forwardRef } from 'react'
import './SlidingMsg.css';

const SlidingMsg = ({ type = 'normal' , time = 800 }, ref) => {
    const [msgClass, setMsgClass] = useState(['sliding-msg', type ]);
    const [msg, setMsg] = useState('')
    
    useImperativeHandle(ref, () => {
        return {
            showMsg(str) {
                setMsg(str);
                const isMsgInvisible = msgClass.length < 3;
                if (isMsgInvisible) {
                    setMsgClass(prev => [...prev, 'sliding-msg--show']);
                    setTimeout(() => { setMsgClass(['sliding-msg', type]) }, time);
                }
            },
        }
    });

    return (
        <div className={msgClass.join(' ')}>
            <span>{ msg }</span>
        </div>
    );
};

export default forwardRef(SlidingMsg);