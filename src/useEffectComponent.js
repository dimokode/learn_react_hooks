import { useEffect } from "react";
import { useCounter } from "./counters"


export function UseEffectComponent(){

    const [count, inc] = useCounter(0, 1);

    useEffect(() => {
        console.log(count);
    }, [count]);

    useEffect(() => {
        setTimeout(()=>{
            document.getElementById('ufc').innerHTML = `Button has been clicked ${count}`;
        }, 1000)
    }, [count]);

    useEffect(() => {
        console.log('Component did mount');
        return () => {
            console.log('Component will unmount');
        }
    }, []);

    useEffect(() => {
        console.log(`>> running effect ${count}`);

        return () => {
            console.log(`<< cleaning up ${count}`);
        }
    }, [count]);

    return (
        <>
            <h1 id="ufc">useEffectComponent</h1>
            <button onClick={inc}>{count}</button>
        </>
    )
}