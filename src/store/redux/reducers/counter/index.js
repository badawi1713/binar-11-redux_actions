import {
  SET_ADD_COUNTER,
  SET_SUBTRACT_COUNTER,
  SET_RESET_COUNTER,
} from "../../constants";

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_COUNTER:
      return { ...state, number: action.payload };
    case SET_SUBTRACT_COUNTER:
      return { ...state, number: action.payload };
    case SET_RESET_COUNTER:
      return { ...state, number: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
