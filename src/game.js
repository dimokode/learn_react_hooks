import { useEffect, useLayoutEffect, useState, useMemo } from "react";

function useCoordinates(step){
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    useEffect(() => {

        const handleMovement = (event) => {
            console.log(event);
            //event.preventDefault();
            // eslint-disable-next-line default-case
            switch (event.key){
                case 'ArrowUp':
                    setTop((prev) => prev - step);
                    break;
                case 'ArrowDown':
                    setTop((prev) => prev + step);
                    break;
                case 'ArrowLeft':
                    setLeft((prev) => prev - step);
                    break;
                case 'ArrowRight':
                    setLeft((prev) => prev + step);
                    break;
            }
        }

        console.log('Component did mount');
        document.addEventListener('keydown', handleMovement);

        return () => {
            console.log('Component will unmount');
            document.removeEventListener('keydown', handleMovement);
        }


    }, [top, left]);

    return [top, left];
}

const initialStyle = {
    position: 'absolute',
    background: '#F00',
    width: 50,
    height: 50,
    left: 0,
    top: 0,
}

const generateDummies = (count) => {
    let dummies = [];
    for(let i=0; i<count; i++){
        dummies.push(
            <div>aaa = {i}</div>
        );
    }
    
    return dummies;
}

export function GameComponent(){

    const [top, left] = useCoordinates(50);
    const [style, setStyle] = useState(initialStyle);

    useMemo(() => {
        setStyle((prev) => {
            return {
                ...prev,
                left,
                top
            }
        })
    }, [top, left])

    return (
        <>
            <h1>Game</h1>
            Coordinates: {top} : {left}

            <div style={style}></div>
        </>
    )
}