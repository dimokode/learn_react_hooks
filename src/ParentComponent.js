import { useRef } from "react";
import ChildComponent from "./ChildComponent";


export default function ParentComponent(){
    const childRef = useRef();

    const openChild = () => {
        console.log('Open child!');
        childRef.current.open();
    }

    return (
        <div>
            <h1>Here is a parent component!</h1>
            <ChildComponent ref={childRef} />
            <button onClick={openChild}>Open Child</button>
        </div>
    )
}