import { useState, forwardRef, useImperativeHandle } from "react";

const ChildComponent = (props, ref) => {

    const [visibility, setVisibility] = useState(false);

    useImperativeHandle(ref, ()=>({
        open: () => {
            setVisibility(true)
        },
    }));

    if(!visibility) return

    return (
        <div ref={ref}>
            Here am I! A child component!
            <button onClick={() => {setVisibility(false)}}>Hide</button>
        </div>
    )
}


export default forwardRef(ChildComponent);