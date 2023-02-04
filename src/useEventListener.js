import { useCallback, useEffect, useRef, useState } from "react";


function useEventListener(eventName, handler, element = window){
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(()=>{
        const isSupported = element && element.addEventListener;
        if(!isSupported){
            throw new Error('addEventListener is not supported by ' + element)
        }

        const eventListener = (event) => {
            if(savedHandler.current){
                savedHandler.current(event);
            }
        };

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        }
    }, [eventName, element]);
}

export default function PointsComponent(){
    const [coords, setCoords] = useState([]);

    const onMouseMove = useCallback((event) => {
        //console.log(event);
        const { clientX, clientY } = event;
        const newPoint = { x: clientX, y: clientY };
        setCoords( array => [...array, newPoint]);
    }, []);

    useEventListener('mousemove', onMouseMove);

    useEventListener('keydown', (event) => {
        //console.log(event);
        if(event.key==='Backspace'){
            setCoords([]);
        }
    })


    return (
        <>
            {coords.map((point, index) => {
                //console.log(index);
                const style = {
                    position: 'absolute',
                    left: point.x,
                    top: point.y,
                    width: 5,
                    height: 5,
                    border: '1px solid black',
                    backgroundColor: 'red'
                }

                return (
                    <div key={index} style={style}></div>
                )
            })}
        </>
    );
}