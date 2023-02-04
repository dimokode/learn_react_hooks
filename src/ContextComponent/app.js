import React, { useCallback, useContext, useReducer, useState } from "react";

const MyContext = React.createContext();
//console.log('MyContext', MyContext);

function reducer(state, action){
    switch (action) {
        case 'plus':
            return {count: state.count + 1};
        case 'minus':
            return {count: state.count - 1};
        default:
            return state
    }
}

function initialState(){
    return {count: initialState}
}

export default function ContextComponent(){
    //const [state, setState] = useState('bbb');
    const [rstate, dispatch] = useReducer(reducer, 0);



    return (
        <>
            <h1>Context</h1>
            <MyContext.Provider value={{rstate, dispatch}}>
                <SomeComponent />
                <SecondComponent />
            </MyContext.Provider>
        </>
    )
}


function SomeComponent(){
    const {rstate, dispatch} = useContext(MyContext);
    console.log(rstate);
    //console.log(dispatch);
    return (
        <>
            Some data with
        </>
    )
}

function SecondComponent(){
    //const {rstate, dispatch} = useReducer(MyContext);

    const onClick = () => {
        //dispatch('ccc');
    }

    return (
        <>
            <button onClick={onClick}>Click</button>
        </>
    )
}