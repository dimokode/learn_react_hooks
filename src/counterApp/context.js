import React, { useReducer, createContext, useMemo } from "react";
export const NumberContext = createContext(); 
export const ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease"
};

const initialState = {
  value: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return {
        value: state.value + 1
      };
    case ACTIONS.DECREASE:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};

export const NumberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(children);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
      <NumberContext.Provider value={contextValue}>
        {children}
      </NumberContext.Provider>
  );
};