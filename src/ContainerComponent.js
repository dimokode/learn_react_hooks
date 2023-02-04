import { useState } from "react";


export default function ContainerComponent(props){
    //console.log(props);
    const { title, contentVisible } = props;

    const [visibility, setVisibility] = useState(contentVisible);
    
    let children = (visibility) ? props.children.map(child => child) : [];
    


    return (
        <>
            <hr />
            <h1>{title}</h1>
            <button onClick={() => {setVisibility(!visibility)}}>Open/Hide</button>
            {children}
        </>
    )
}