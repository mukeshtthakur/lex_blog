import { data } from "autoprefixer";
import { useEffect, useReducer } from "react";
import { DiReact } from "react-icons/di";

const Quiz = () => {
  const initialState = {
    questions: [],
    //"loading", "error", "ready", "active", "finished"
    status: "loading",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: data, status: "ready" };
      case "dataFailed":
        return { ...state, status: "errors" };

      default:
        throw new Error("Action Unknown");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="mx-auto mt-10 flex flex-col gap-10 px-10">
      <div>
        <div className="flex items-center gap-5">
          <DiReact
            color="#00ffff"
            size={"10rem"}
            className="inline-block hover:rotate-90 transition-all duration-1000"
          />
          <span className="text-8xl font-Lilita">REACT QUIZ</span>
        </div>
        <div className="">
          <input className="block w-full slider " type="range" min={1} max={10} />
        </div>
        <div className="flex justify-between">
          <span>0/10</span>
          <span>50/250</span>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <p>Q1: What is react used for?</p>
          <div className="flex flex-col gap-0.5">
            <p className="rounded-full px-2 border-2 border-gray-700 bg-green-300 transition-all duration-500 hover:translate-x-6">
              It is frontend framework.
            </p>
            <p className="rounded-full px-2 border-2 border-gray-700 bg-yellow-200 transition-all duration-500 hover:translate-x-6">
              It is backed framework.
            </p>
            <p className="rounded-full px-2 border-2 border-gray-700 bg-yellow-200 transition-all duration-500 hover:translate-x-6">
              It is programming language.
            </p>
            <p className="rounded-full px-2 border-2 border-gray-700 bg-yellow-200 transition-all duration-500 hover:translate-x-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam liber
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="border-2 rounded-lg p-1 ">05:67</span>
          <button className="border-2 border-gray-800 rounded-lg px-3 hover:bg-gray-300 transition-all duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
