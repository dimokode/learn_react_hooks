import { useRef, forwardRef, useState } from "react"


export function MyComponent({initialText}){

    const h1Ref = useRef();
    const [text, setText] = useState(initialText);
    

    console.log('rerender MyComponent');
    return (
        <>
            <h1 ref={h1Ref}>{text}</h1>
            <MyInput ref={h1Ref} onChange={setText} value={text}/>
        </>
    )
}

//

const MyInput = forwardRef(({value, onChange}, ref) => {
    
    return (
        <>
            <input onChange={(e) => {
                onChange(e.target.value);
            }} value={value} />
        </>
    )
});