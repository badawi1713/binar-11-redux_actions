import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_ADD_COUNTER,
  SET_RESET_COUNTER,
  SET_SUBTRACT_COUNTER
} from "./store/redux/constants";

const App = () => {
  const { number } = useSelector(({ counterReducer }) => counterReducer);
  const dispatch = useDispatch();
  const onDecrement = () => {
    dispatch({
      type: SET_SUBTRACT_COUNTER,
      payload: number - 1,
    });
  };
  const onIncrement = () => {
    dispatch({
      type: SET_ADD_COUNTER,
      payload: number + 1,
    });
  };

  const onReset = () => {
    dispatch({
      type: SET_RESET_COUNTER,
      payload: 0,
    });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl text-center uppercase">Counter</h1>

        <div className="flex items-center justify-center my-10">
          <div className="flex items-stretch">
            <button
              onClick={onDecrement}
              disabled={number === 0}
              className=" disabled:bg-gray-100 p-2 w-16 border-2 rounded-l-md hover:shadow-sm duration-150 transition-shadow hover:bg-gray-100 font-semibold"
            >
              -
            </button>
            <p className="p-2 border-t-2 border-b-2 w-16 text-center font-semibold text-lg">
              {number}
            </p>
            <button
              onClick={onIncrement}
              className="p-2 w-16 border-2 rounded-r-md hover:shadow-sm duration-150 transition-shadow hover:bg-gray-100 font-semibold"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={onReset}
          className=" p-2 w-16 border-2 rounded-md hover:shadow-sm duration-150 transition-shadow hover:bg-gray-100 font-semibold"
        >
          Reset
        </button>
      </div>
    </main>
  );
};

export default App;
