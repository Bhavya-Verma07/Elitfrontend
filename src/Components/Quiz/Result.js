import React from "react";
import { useAuth } from "../../Context copy/QuizHolder";
// import Quiz from "./Quiz";
// import Start from "./Start";

const Result = () => {
  const { correct, setExit, setStart, quizes } = useAuth();
  const playAgain = () => {
    setExit(false);
    setStart(false);
    localStorage.setItem("currentstep", 0);
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%] h-[400px]">
          <h2 className="text-2xl p-3 my-2">
            {correct} are correct out of {quizes.length}
          </h2>
          <button
            onClick={playAgain}
            className="border border-orange-500 p-3 text-2xl rounded"
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
