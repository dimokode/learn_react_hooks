import { useState } from "react"


function useMergedState( initialState ) {
    const [state, setState] = useState(initialState);

    const mergeState = (changes) => {
        setState((prevState) => {
            return {
                ...prevState,
                ...changes,
            }
        })
    }

    return [state, mergeState];
}

export function InputField({ props }){

    console.log(props);
    const { label, id, initialValue } = props;
    console.log(initialValue);
    const [ inputText, setInputText ] = useState(initialValue);

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div>
            <label>{label}</label>
            <input key={id} type="text" onChange={onChange} value={inputText} />
            <br />
            <span>{inputText}</span>
        </div>
    )
}
