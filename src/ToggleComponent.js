import { useDebugValue, useState, useReducer } from "react";

function useToggle(initialValue){
    /*
    const [value, setValue] = useState(initialValue || false);

    useDebugValue(value);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    }

    return [value, toggle];
    */
   return useReducer(value=>!value, initialValue || false);
}



function Button({initState}){
    
    const [state, setState] = useToggle(initState);
    const label = (state) ? 'ON' : 'OFF';
    const style = (state) ? { color: 'green' } : { color: 'red' }

    return (
        <>
            <button style={style} onClick={setState}>{label}</button>
        </>
    )
}

export default function ToggleComponent(){
    return (
        <>
            <h1>ToggleComponent</h1>
            <Button/>
            <Button initState={true}/>
        </>
    )
}