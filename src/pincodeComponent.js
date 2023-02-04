import { useState, useRef } from "react";
import PinInput from "./PinInput";

const initialDigits = ['', '', '', ''];

export function PincodeComponent(){
    const [digits, setDigits] = useState(initialDigits);
    const ref = useRef();

    const focus = ()=>{
        ref.current?.focus();
    }
    return (
        <div>
            <PinInput ref={ref} digits={digits} onChange={setDigits} />
            <p>
                <button onClick={focus}>FOCUS</button>
            </p>
        </div>
    )
}