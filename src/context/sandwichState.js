import React, { useReducer } from "react";
import SandwichReducer from "./sandwichReducer";
import SandwichContext from "./sandwichContext";
import { SET_COUNT, SET_TOTAL } from "../types";
const SanwichState = (props) => {
  const initialState = {
    count: 2,
    offset: 5,
    total: 0,
    mov: 0,
    precio: 20,
  };
  const [state, dispatch] = useReducer(SandwichReducer, initialState);

  //funciones
  const setCount = () => {
    console.log(`contador ${state.count}`);
    console.log(`movimiento en la visa: ${state.mov}`);
    state.count += 1;
    //state.mov = state.mov * state.count;
    if (state.count > 5) {
      state.count = 2;
    }
    dispatch({
      type: SET_COUNT,
    });
  };
  const setTotal = (value) => {
    state.total += state.precio;
    dispatch({
      type: SET_TOTAL,
      payload: value,
    });
  };
  return (
    <SandwichContext.Provider
      value={{
        count: state.count,
        offset: state.offset,
        total: state.total,
        mov: state.mov,
        precio: state.precio,
        setCount,
        setTotal,
      }}
    >
      {props.children}
    </SandwichContext.Provider>
  );
};

export default SanwichState;