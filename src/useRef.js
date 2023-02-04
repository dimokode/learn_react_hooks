import { useRef } from "react"



export function UseRefComponent(){

    const refInput = useRef();

    const setFocus = () => {
        refInput.current?.focus();
    }

    const onChange = (event) => {
        if(event.target.value == 'blur'){
            refInput.current?.blur();
        }
    }

    return (
        <div>
            <input onChange={onChange} ref={refInput} />
            <button onClick={setFocus}>Focus</button>
        </div>
    )
}