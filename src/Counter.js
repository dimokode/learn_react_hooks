import React, { useReducer } from 'react';
const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return initialState;
  }
}


export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInc= () => dispatch({type: 'increment'});
  const handleDec= () => dispatch({type: 'decrement'});
return (
    <>
      Count: {state.count}
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
    </>
  );
}