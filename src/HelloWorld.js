import { useState } from "react";

function Label( { children} ){
    return (
        <span style={{ color: "green" }}>{children}</span>
    )
}

export function HelloWorld(props){
    const [ counter, setCounter ] = useState(0);
    const [ Visibility, setVisibility ] = useState(false);
    const [ text, setText ] = useState('HHHH');

    const onClick = () => {
        setCounter( (prev) => prev + 1 );
    }

    const toggleVisibility = () => {
        setVisibility( prev => !prev);
    }

    const { color } = props;
    const style = {
        color
    }

    //const counterElement = (Visibility) ? `(${counter})` : '';
    const counterElement = (Visibility) ? counter : '';

    const onChange = (e) => {
        //console.log(e);
        setText( e.target.value )
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <h2 style={style}>{ text }</h2>
            <Label>!!!!!</Label>
            <button onClick={onClick}>Click Me { counterElement }</button>
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            <input type="text" onChange={onChange} value={text} />
        </div>
    )
}