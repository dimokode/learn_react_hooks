import { useState } from "react";

export function useCounter(initialValue = 0, delta = 1){
    const [ count, setCount ] = useState(initialValue);

    const increment = () => {
        setCount( (prevValue) => prevValue + delta);
    }

    const decrement = () => {
        setCount( (prevValue) => prevValue - delta);
    }

    return [count, increment, decrement];
}

export function YearsCounter({initialValue, delta}){
    const [count, inc, dec] = useCounter(initialValue, delta);

    return (
        <div>
            <p>Year:</p>
            <span>{count}</span>
            <div>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}