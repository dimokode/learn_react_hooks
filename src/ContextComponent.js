import React, { useContext } from "react";

const ContextProvider = React.createContext();


const initState = {
    count: 0
}


const reducer = (state, action) => {
    if(action === 'inc'){
        return {
            count: state.count+1
        }
    }else if(action === 'dec'){
        return {
            count: state.count-1
        }
    }
}


export default function ContextComponent(){
    const [state, dispatch] = React.useReducer(reducer, initState);
    return (
        <>
            <h1>ContextComponent</h1>
            <ContextProvider.Provider value={{state, dispatch}}>
                <Title />
                <Button />
            </ContextProvider.Provider>
        </>
    )
}


function Title(){
    const {state} = useContext(ContextProvider);
    return (
        <>
            <h2>{state.count}</h2>
            
        </>
    )
}

function Button(){
    const {dispatch} = useContext(ContextProvider);
    
    const handleIncrement = () => {
        dispatch('inc');
    }

    const handleDecrement = () => {
        dispatch('dec');
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}