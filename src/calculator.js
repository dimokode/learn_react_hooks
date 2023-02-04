import { useState } from "react"

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;
const pow = (a, b) => Math.pow(a, b);

const onChange = (setter) => {
    return (event) => {
        const { value } = event.target;
        setter( value ? parseFloat(value) : 0);
    }
}

/*
const applyOperation = (operation, setAction) => {
    //console.log(operation);
    setAction(() => {
        return operation;
    });
}
*/


export function Calculator(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [sign, setSign] = useState('+');
    const [action, setAction] = useState(() => add);

    const applyAction = (fn, fnSign) => {
        setAction(() => fn);
        setSign(fnSign);
    }

    return (
        <>
            <h1>Calculator</h1>

            <button onClick={()=> {applyAction(add, '+')}}>+</button>
            <button onClick={()=> {applyAction(sub, '-')}}>-</button>
            <button onClick={()=> {applyAction(div, '/')}}>/</button>
            <button onClick={()=> {applyAction(mul, '*')}}>*</button>
            <button onClick={()=> {applyAction(pow, '^')}}>^</button>
            <input type="number" value={a} onChange={onChange(setA)} />
            {sign}
            <input type="number" value={b} onChange={onChange(setB)}/>
            =
            { action ? action(a, b) : ''}
        </>
    )
}


/*

            <button onClick={()=> {applyOperation(add, setAction, setSign('+'))}}>+</button>
            <button onClick={()=> {applyOperation(sub, setAction, setSign('-'))}}>-</button>
            <button onClick={()=> {applyOperation(div, setAction, setSign('/'))}}>/</button>
            <button onClick={()=> {applyOperation(mul, setAction, setSign('*'))}}>*</button>
*/