import { SET_ADD_COUNTER, SET_SUBTRACT_COUNTER, SET_RESET_COUNTER } from "../../constants";

export const handleIncrement = () => {
  return {
    type: SET_ADD_COUNTER,
  };
};

export const handleDecrement = () => {
  return {
    type: SET_SUBTRACT_COUNTER,
  };
};

export const handleReset = () => {
    return {
      type: SET_RESET_COUNTER,
    };
  };