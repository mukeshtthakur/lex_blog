import { useReducer, useState } from "react";

const Counter = () => {
  const initialState = {
    step: 1,
    count: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;
  // const [count, setCount] = useState(0);

  function inc() {
    dispatch({ type: "inc" });
    // setCount((prev) => prev + step);
  }
  function dec() {
    dispatch({ type: "dec" });
  }

  function defCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }
  function defStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function reset() {
    dispatch({ type: "reset" });
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col gap-5 m-auto">
      <p className="font-semibold text-2xl">DATE COUNTER</p>
      <div className="flex gap-3">
        <label htmlFor="slider">Step:</label>
        <input type="range" min={1} max={10} id="slider" value={step} onChange={defStep} />
        <span>{step}</span>
      </div>
      <div className="flex gap-1">
        <button className=" border-2 px-2 border-slate-900 text-xl" onClick={dec}>
          -
        </button>
        <input
          type="number"
          className="border-2 px-2 border-slate-900"
          value={count}
          onChange={defCount}
        />
        <button className=" border-2 px-2 border-slate-900 text-xl" onClick={inc}>
          +
        </button>
      </div>
      <p className="font-bold">{date.toDateString()}</p>
      <div className="mx-auto">
        <button
          onClick={reset}
          className="font-yesterYear border-2 inline-block px-5 py-1 border-slate-950 rounded-md text-2xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
